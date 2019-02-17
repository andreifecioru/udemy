#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
PROJECT_DIR="$DIR/.."

pushd $DIR

echo "Removing any previous output folders"
hadoop fs -rm -r -skipTrash /user/root/word_count/output

echo "Starting the word-count job"
hadoop jar $HADOOP_HOME/share/hadoop/tools/lib/hadoop-streaming-*.jar \
    -files map.py,reduce.py \
    -input /user/root/word_count/input/input.txt \
    -output /user/root/word_count/output \
    -mapper "python map.py" \
    -combiner "python reduce.py" \
    -reducer "python reduce.py"

popd


