#!/bin/sh

export $(cat /data/secrets/env | xargs)

yarn start
