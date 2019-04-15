package filesystem.fs


sealed trait FsNode {
  def name: String
  def parentPath: String
  def children: Map[String, FsNode]
  def path: String = s"$parentPath${FsNode.SEPARATOR}$name"
}

case object FsNode {
  val SEPARATOR = "/"
  val ROOT_PATH = "/"

  val FS_ROOT = FsFolder("", ROOT_PATH)

  def folderFromPath(start: FsFolder, path: String): Option[FsFolder] = {
    def walk(node: FsNode, pathElements: List[String]): Option[FsFolder] =
      node match {
        case folder:FsFolder if pathElements.isEmpty => Some(folder)
        case folder: FsFolder =>
          folder.children.get(pathElements.head)
            .flatMap {
              case f: FsFolder => walk(f, pathElements.tail)
              case _ => None
            }
        case _:FsFile => None
      }

    walk(start, path.split(FsNode.SEPARATOR).filter(!_.isEmpty).toList)
  }

  def addChild(root: FsFolder, childNode: FsNode): Option[FsFolder] = {
    val targetPath = childNode.parentPath
    folderFromPath(root, targetPath)
      .map(targetFolder => targetFolder.copy(children = targetFolder.children ++ Map(childNode.name -> childNode)))
      .flatMap(newNode => newNode.parentPath match {
        case ROOT_PATH => Some(newNode)
        case _ => addChild(root, newNode)
      })
  }
}

case class FsFile(override val name: String,
                  override val parentPath: String) extends FsNode {
  override def children:Map[String, FsNode] = throw new RuntimeException("File has no children")
}

case class FsFolder(override val name: String,
                    override val parentPath: String,
                    override val children: Map[String, FsNode] = Map.empty) extends FsNode


