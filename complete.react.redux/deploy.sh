#!/usr/bin/env bash

main() {
  local remote=$1
  local app_dir=$2

  echo "Deploying ${app_dir} to ${remote}"

  git push ${remote} $(git subtree split --prefix ${app_dir} master):master --force
}

main $@
