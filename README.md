# JAMStack Starter

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
	- [Install Dependencies](#install-dependencies)
	- [Working Locally](#working-locally)
	- [Creating a Production Build](#creating-a-production-build)
- [Deployment](#deployment)
- [Additional Information](#additional-information)

## Project Overview 

- The project uses [Eleventy](https://11ty.io) as a static site generator
- Default templating is [Nunjucks](https://mozilla.github.io/nunjucks/) (can be changed if you want)
- PostCSS set up to handle:
	- TailwindCSS
	- CSS Imports
	- Autoprefixer 
- PurgeCSS to remove unused CSS (set up for TailwindCSS by default) in production
- HTML minified in production
- CSS inlined and minified in production
- Webpack used to bundle scripts
- Scripts optimised for production
- Document `<head>` crafted using [htmlhead.dev](https://htmlhead.dev)

## Getting Started

### Install dependencies

```
npm install
```

### Working locally
Starts watch tasks to compile when changes detected

```
npm start
```

### Creating a production build 
Minify HTML, compress JS, inline and minify CSS.

``` 
npm run build
```

## Deployment 

You can host the production output on any web server or service you like and upload it via any method, it'll work. 

If you don't have an existing place to host your site you should have a look at [Netlify](https://www.netlify.com), I can't recommend it enough. To get started you can hit the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/scottishstoater/jamstack-web-starter)

---

### Additional Information

#### Attributions

<p align="center">
	<img src="/src/static/icon.svg" alt="Rocket icon" width="56" align="center" />
</p>

<p align="center"><a href="https://webstarter.chriscollins.me"><strong>Built off of the intial JAMStack Web Starter by Chris Collins</strong></a></p>

<p align="center"><em>Eleventy · Tailwind CSS · HTML · CSS · Javascript · AlpineJS</em></p>

<p align="center"><a href="https://app.netlify.com/sites/webstarter/deploys"><img src="https://api.netlify.com/api/v1/badges/27819fce-1c2b-4f30-ab30-5c0769f9734e/deploy-status"></a></p>

#### Credits

- [Eleventy](https://11ty.io)
- [TailwindCSS](https://tailwindcss.com/)
- [AlpineJS](https://github.com/alpinejs/alpine)
- [PostCSS](https://github.com/postcss)
	- Autoprefixer
	- PostCSS Import
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [Luxon](https://moment.github.io/luxon/)
- [NPM Run All](https://www.npmjs.com/package/npm-run-all)
- [HTML Minifier](https://www.npmjs.com/package/html-minifier)