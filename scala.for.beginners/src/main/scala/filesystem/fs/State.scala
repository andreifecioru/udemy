package filesystem.fs

case class State(root: FsFolder, workDir: FsFolder, output: String = "") {
  def show(): Unit = {
    println(output)
    print(State.PROMPT)
  }
}

object State {
  val PROMPT = "$ "
}
