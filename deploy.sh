#!/bin/bash

set -ex

npm run publish

scp -r index.html \
  *.bundle.js \
  *.svg \
  *.png \
  fonts/ \
  root@gramend.ru:/srv/nutnet.gramend.ru
