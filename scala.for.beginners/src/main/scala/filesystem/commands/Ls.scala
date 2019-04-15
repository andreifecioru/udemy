package filesystem.commands
import filesystem.fs.State

case class Ls(override val args: List[String]) extends Command {
  override def apply(state: State): State = {
    val output = state.workDir.children.foldLeft("") {
      case (acc, (name, _)) => s"$acc\n$name"
    }
    state.copy(output = output)
  }
}
