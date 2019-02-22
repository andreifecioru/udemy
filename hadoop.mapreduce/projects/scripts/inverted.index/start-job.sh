#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
PROJECT_DIR="$DIR/../.."

pushd $DIR

echo "Removing any previous output folders"
hadoop fs -rm -r -skipTrash /user/root/inverted_index/output

echo "Starting the inverted-index job"
hadoop jar $PROJECT_DIR/build/libs/projects.jar \
  com.afecioru.apps.invertedindex.InvertedIndexJob \
  /user/root/inverted_index/input \
  /user/root/inverted_index/output \

popd



