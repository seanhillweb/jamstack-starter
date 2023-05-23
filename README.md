# Jamstack Starter

<p align="center"><a href="https://seanhillweb.com"><strong>Jamstack Starter</strong></a></p>

<p align="center"><em>Eleventy · Tailwind CSS · AlpineJS · Webpack</em></p>

<p align="center"><a href="https://app.netlify.com/sites/webstarter/deploys"><img src="https://api.netlify.com/api/v1/badges/27819fce-1c2b-4f30-ab30-5c0769f9734e/deploy-status"></a></p>

## Contents 	

- [Project overview](#project-overview)
- [Getting started](#getting-started)
	- [Install dependencies](#install-dependencies)
	- [Working locally](#working-locally)
	- [Creating a production build](#creating-a-production-build)
- [Deployment](#deployment)
- [Credits](#credits)

---

## Project Overview 

- The project uses [Eleventy](https://11ty.io) as a static site generator
- Default templating is [Nunjucks](https://mozilla.github.io/nunjucks/)
- PostCSS set up to handle:
	- TailwindCSS
	- CSS Imports
	- Autoprefixer 
- PurgeCSS to remove unused CSS (set up for TailwindCSS by default) in production
- [AlpineJS](https://github.com/alpinejs/alpine) is added for interactive behavior
- HTML minified in production
- CSS inlined and minified in production
- Webpack used to bundle scripts
- Scripts optimised for production
- Document `<head>` crafted using [htmlhead.dev](https://htmlhead.dev)

---

## CHANGLEOG

All notable changes to this project will be documented in the CHANGELOG.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## Getting Started

### Prerequisites

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

---

## Deployment 

You can host the production output on any web server or service you like and upload it via any method, it'll work. 

If you don't have an existing place to host your site you should have a look at [Netlify](https://www.netlify.com), I can't recommend it enough. To get started you can hit the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/scottishstoater/jamstack-web-starter)

---

#### Credits 

- [Inspiration](https://github.com/scottishstoater/jamstack-web-starter)
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
