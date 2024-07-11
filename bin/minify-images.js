const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
sharp.cache(false)
const { entries } = Object

const directoryPath = path.join(__dirname, "..", "out", "_next", "static", "media"); // Replace "images" with your directory

const imageOptions = {
  jpeg: { quality: 80 },
  webp: { quality: 80 },
  png: { compressionLevel: 8 },
}

const filePath = (fileName) => path.join(directoryPath, fileName)

const getSize = (fileName) => fs.statSync(filePath(fileName)).size

const minifyFileName = (fileName) => {
  const ext = path.extname(fileName);
  const name = path.basename(fileName, ext);
  return `${name}-minified${ext}`;
}

const formatSize = (bytes) => {
  const kilobytes = bytes / 1024;
  const megabytes = kilobytes / 1024;
  if (megabytes >= 1) {
    return `${megabytes.toFixed(2)}mb`;
  } else {
    return `${kilobytes.toFixed(2)}kb`;
  }
}

// Function to optimize an image
const optimizeImage = async (fileName, originalSize) => {
  try {
    const image = sharp(filePath(fileName));
    const meta = await image.metadata()
    const { format } = meta
    const minifiedFileName = minifyFileName(fileName)

    const buffer = await image.rotate()
      .resize(1200, 1200, {
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      [format](imageOptions[format])
      .toBuffer()//async (_err, buffer) => {
        // await fs.promises.writeFile(filePath(minifiedFileName), buffer, function(e) {
        //   console.log(e)
        // });
      // });

    await fs.promises.writeFile(filePath(minifiedFileName), buffer)

    const newSize = getSize(minifiedFileName)
    if (newSize < originalSize) {
      console.log(`Optimized: ${fileName} from ${formatSize(originalSize)} => ${formatSize(newSize)}`);
      await fs.promises.rename(filePath(minifiedFileName), filePath(fileName))
    } else {
      console.log(`Optimized: but skipped ${fileName} as ${formatSize(originalSize)} => ${formatSize(newSize)}`);
      await fs.promises.unlink(filePath(minifiedFileName))
    }
  } catch (err) {
    console.error(`Error optimizing ${fileName}:`, err);
  }
};

// Read the directory and process each image file
fs.readdir(directoryPath, (err, fileNames) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  const files = {}
  fileNames.forEach((fileName) => {
    if (/\.(jpg|jpeg|png)$/i.test(fileName)) {
      files[fileName] = getSize(fileName)
    }
  });

  const bySize = entries(files).sort(([, sizeA], [, sizeB]) => sizeB - sizeA);
  Promise.all(bySize.map(async ([fileName, size]) => {
    await optimizeImage(fileName, size)
  }))
});
