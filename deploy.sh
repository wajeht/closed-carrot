#!/bin/bash

source .env

npm run build:ui

caprover deploy -h $CAPROVER_DOMAIN -p $CAPROVER_PASSWORD -b $CAPROVER_GIT_BRANCH_NAME -a $CAPROVER_APP_NAME
