# podstation.github.io

This repository contains the source code of the website of podStation, which is deployed to <http://podstation.github.io>, using GitHub Pages.

The website is built with the MkDocs framework and the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

## How to run the website locally

Requirements:
* You have a container environment compatible with Docker Compose

Run the command:
```
docker compose up
```

The website will be available at <http://localhost:8000>

## Deployment

New versions pushed to the `master` branch are built and pushed to GitHub Pages using GitHub Actions.

<!-- reference - https://hub.docker.com/r/squidfunk/mkdocs-material>