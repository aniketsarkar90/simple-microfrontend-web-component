#!/bin/sh

cd ../header-web-component
printf "\n\n Building Header Web Component Project"
npm run buildpackage

cd first-web-component
printf "\n\n Building First Web Component Project"
npm run buildpackage

cd ../footer-web-component
printf "\n\n Building Footer Web Component Project"
npm run buildpackage