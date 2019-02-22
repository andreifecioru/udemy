#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
PROJECT_DIR="$DIR/../.."

pushd $DIR

echo "Creating HDFS folders"
hadoop fs -mkdir -p /user/root/inverted_index/input

echo "Copying input data"
hadoop fs -put ${PROJECT_DIR}/src/main/resources/*.txt /user/root/inverted_index/input

echo "Removing any previous output folders"
hadoop fs -rm -r -skipTrash /user/root/inverted_index/output

popd



