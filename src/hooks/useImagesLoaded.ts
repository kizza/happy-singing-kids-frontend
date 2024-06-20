import { useState, useEffect, RefObject } from 'react';

const useImagesLoaded = (ref: RefObject<HTMLDivElement>) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const div = ref.current;
    if (!div) return;

    const images: HTMLImageElement[] = Array.from(div.querySelectorAll('img'));
    if (images.length === 0) {
      setLoaded(true);
      return;
    }

    let loadedImages = 0;
    let loadedWindow = false;
    const checkAllLoaded = () => {
      if (loadedWindow && loadedImages === images.length) {
        setLoaded(true);
      }
    }

    const onWindowLoad = () => {
      loadedWindow = true;
      checkAllLoaded();
    };

    const onImageLoad = () => {
      loadedImages += 1;
      checkAllLoaded();
    };

    const onImageError = () => {
      loadedImages += 1;
      checkAllLoaded();
    };

    if (document.readyState === 'complete') {
      onWindowLoad()
    } else {
      window.addEventListener('load', onWindowLoad);
    }

    images.forEach((img) => {
      if (img.complete) {
        onImageLoad();
      } else {
        img.addEventListener('load', onImageLoad);
        img.addEventListener('error', onImageError);
      }
    });

    return () => {
      window.removeEventListener('load', onWindowLoad);
      images.forEach((img) => {
        img.removeEventListener('load', onImageLoad);
        img.removeEventListener('error', onImageError);
      });
    };
  }, [ref]);

  return loaded;
};

export default useImagesLoaded;
