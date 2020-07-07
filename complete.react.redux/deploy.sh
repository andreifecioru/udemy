#!/usr/bin/env bash

main() {
  local remote=$1
  local app_dir=$2

  echo "Deploying ${app_dir} to ${remote}"

  pushd ..
  git push ${remote} $(git subtree split --prefix complete.react.redux/${app_dir} master):master --force
  popd
}

main $@
