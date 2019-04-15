package filesystem.commands
import filesystem.fs.State

case class CommandNotFound(override val args: List[String]) extends Command {
  val COMMAND_NOT_FOUND = "Command not found: "

  override def apply(state: State): State = state.copy(output = s"$COMMAND_NOT_FOUND${args.mkString(" ")}")
}
