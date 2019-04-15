package filesystem.commands

import filesystem.fs.{FsFolder, FsNode, State}

case class MkDir(override val args: List[String]) extends Command {
  override def apply(state: State): State = args match {
    case Nil => state.copy(output = "mkdir: invalid input")
    case _ => args.foldLeft(state.copy(output = ""))(execute)
  }


  private def execute(state: State, name: String): State = {
    val newState = createFolder(state, name)
    state match {
      case State(_, _, "") => newState
      case _ => newState.copy(output = s"${state.output}\n${newState.output}")
    }
  }

  private def createFolder(state: State, name: String): State = {
    if (isFolderNameValid(name))
      state.workDir.children.get(name)
        .map(_ => state.copy(output = s"Folder $name already exists."))
        .getOrElse {
          val newFolder = FsFolder(name, state.workDir.path)
          FsNode.addChild(state.root, newFolder)
            .flatMap { newRoot =>
              FsNode.folderFromPath(newRoot, newFolder.parentPath) match {
                case Some(newWorkDir) => Some((newRoot, newWorkDir))
                case None => None
              }
            }
            .map {
              case (root, workDir) => state.copy(root = root, workDir = workDir, output = s"Created folder: $name")
            }
            .getOrElse(state.copy(output = s"Failed to create folder: $name"))
        }
    else
      // TODO: implement the '-p' flag
      state.copy(output = s"Invalid folder name: $name")
  }

  private def isFolderNameValid(name: String): Boolean = !name.contains(FsNode.SEPARATOR) && !name.contains(".")
}
