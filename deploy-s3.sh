#!/bin/sh

aws s3 rm s3://vue-front-ysy/ --recursive
aws s3 cp dist s3://vue-front-ysy/ --recursive
