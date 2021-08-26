#!/bin/bash

set -ex

npm run publish

scp -r index.html \
  style.css \
  *.bundle.js \
  images/ \
  root@gramend.ru:/srv/nutnet.gramend.ru
