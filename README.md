# Happy Singing Kids Frontend

This is a straightforward [next.js](https://nextjs.org/) app deployed
with the [serverless framework](https://www.serverless.com/) using the to
aws, via the [serverless-lift](https://github.com/getlift/lift) plugin

### Building

Is the standard static export next.js build, with a trailing slash to be
navigable within the hosted aws bucket. A hand-rolled image optimisation step
is built into `yarn build` to reduce file size.

### Deploying

The related domains are configured to be included based on the stage.

```
yarn deploy
yarn deploy --stage prod
```

1. Next.js will build to the default `/out` (as a static site, with trailing slash in routes)
2. The image optimisation will run over the images (updating them inplace within the above)
3. Serverless will upload to the s3 bucket
