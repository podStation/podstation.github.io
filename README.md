# podstation.github.io

podStation github website

## How to build and deploy

```
docker run --rm -it -v ${PWD}:/docs squidfunk/mkdocs-material build
npm run deploy
```

<!-- reference - https://hub.docker.com/r/squidfunk/mkdocs-material>