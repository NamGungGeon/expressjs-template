# expressjs-template

`expressjs-template` is template for expressjs api server.

From original express generator, This template remove view rendering engine and involved component.

And also, Useful scripts(dev, deploy) are added.

## Usage

Click `Use this template` button and create your own repository based on `expressjs-template`.

Don't forget changing name and version in `package.json`

(You must change project name. All `deploy`-about scripts are using project name for identifying projects.)

## Script: dev(Debug)

Using terminal, just type `yarn dev` or `npm run dev` for development.

`dev` script uses `nodemon` dependency.

## Script: deploy

Using terminal, just type `yarn deploy` or `npm run deploy` for deploy.

`deploy` script uses `forever` dependency.

## Script: stopDeploy

Using terminal, just type `yarn stopDeploy` or `npm run stopDeploy` for stopping deploy.

This script will kill deployed this project.

If project state is `not deployed`, this scripts returns error.

## Script: reDeploy

Using terminal, just type `yarn reDeploy` or `npm run reDeploy` for re-deploying.

This script execute `stopDeploy` and `deploy`.

If project state is `not deployed`, this script returns error.
