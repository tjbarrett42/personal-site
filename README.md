# personal-site
### About

Personal website for listing portfolio projects, resume, and contact information. Built with create-react-app.

Hosted on [jamesbarrett.us](jamesbarrett.us).

## Running the app

Install packages
### `npm install`

Start on local dev server (localhost:3000)
### `npm start`

## Note on gh-pages

I found myself quite lost in `gh-pages` method of deploying websites to custom domains. 

Confirm that:
* package.json has `"homepage": {https://customdomain.com}` added, and `"predeploy": "npm run build", "deploy": "gh-pages -d build",` added to `"scripts"`
* CNAME file in root directory containing `customdomain.com`

Then proceed:
1. `npm install` to make sure package.json updates take effect
2. `npm start` may or may not have an effect, just step I took in debugging
3. commit any current changes to current branch (main in my case)
4. `npm run deploy`, creating gh-pages branch
5. choose gh-pages /(root) as source, save in repo > settings > custom domain
6. link custom domain, save in repo > settings > custom domain
7. celebrate

#### `yarn start`


