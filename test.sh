#!/usr/bin/env bash

cd example
npm install --legacy-peer-deps
configs="./eslint*.config.js"

for config in $configs; do
    npm run eslint -- -c $config ./index.js
done
