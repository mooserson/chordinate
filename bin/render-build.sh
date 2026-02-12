#!/usr/bin/env bash
set -o errexit

bundle install
npm install
npx webpack --config webpack.config.js
bundle exec rake assets:precompile
bundle exec rake db:migrate
