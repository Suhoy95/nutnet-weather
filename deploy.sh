#!/bin/bash

set -ex

npm run publish

scp -r index.html \
  style.css \
  *.bundle.js \
  *.svg \
  *.png \
  root@gramend.ru:/srv/nutnet.gramend.ru
