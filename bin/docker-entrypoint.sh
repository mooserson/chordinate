#!/bin/bash
set -e

bundle exec rake db:migrate

exec "$@"
