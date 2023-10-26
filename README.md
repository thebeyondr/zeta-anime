# [-ζ-] zeta

![zeta logo](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Sigle_zeta.png/200px-Sigle_zeta.png)

A test anime app to try [bun](https://bun.sh) and [Remix](https://remix.run)

## Run Locally

Clone the project

```bash
  git clone https://github.com/thebeyondr/zeta-anime
```

Go to the project directory

```bash
  cd zeta-anime
```

Get bun

> Follow the steps [here](https://bun.sh/docs/installation) for your OS: `https://bun.sh/docs/installation`

Install dependencies

```bash
  bun install
```

## Development

From your terminal:

```sh
  bun dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
  bun build
```

Then run the app in production mode:

```sh
  bun start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
