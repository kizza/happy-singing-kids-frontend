# Happy Singing Kids Frontend

This is a straightforward [next.js](https://nextjs.org/) app deployed
with [serverless](https://www.serverless.com/) using the to
aws, via the [serverless-lift](https://github.com/getlift/lift) plugin.

It amounts to a static s3 bucket served via cloudfront.

### Basics

The basic movements are
```
next build
serverless deploy
```

1. nextjs will build to the default `/out` (as a static site, with trailing slash in routes)
2. The image optimisation will run over the images (updating them inplace within the above)
3. Serverless will upload to the s3 bucket

### Environment

Given nextjs uses production env vars for `build` (ie. `dev` uses `.env.development` and `build` uses `.env.production`)
we're copying each stage `.env` to `.env.local` prior to build.  It's a small hack that makes it quite straightforward.

So the following is bundled into `yarn deploy:dev`

```
cp .env.dev .env.local
yarn build
yarn deploy --stage dev
```

### Usage

Run locally
```
yarn dev
```

Debug built artefacts locally
```
yarn start:dev
yarn start:prod
```

Deploy stages
```
yarn deploy:dev
yarn deploy:prod
```

### Updating

Update everything to the latest version
```
npx npm-check-updates -u
yarn install
```

### Testing

The primary focus is on the integration with our `shop` backend.
A cypress e2e test creates a checkout session, intercepting the stripe session to assert against it's
attributes.

```
yarn e2e
yarn cypress:open
```

Various environments can be tested with
```
yarn test # localhost
yarn test:dev # dev.
yarn test:prod #
```

nextjs doens't play particularly nicely with a dev build, so `yarn start` is best.
