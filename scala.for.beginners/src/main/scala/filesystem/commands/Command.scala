package filesystem.commands

import filesystem.fs.State

trait Command {
  def args: List[String]
  def apply(state: State): State
}

object Command {
  val EMPTY_CMD = ""
  val MKDIR = "mkdir"
  val LS = "ls"

  val NOOP_CMD = new Command {
    override def args: List[String] = Nil
    override def apply(state: State): State = state.copy(output = "")
  }

  def from(input: String): Command = input.split("\\s+").toList match {
    case MKDIR :: args => MkDir(args)
    case LS :: args => Ls(args)
    case "" :: _ => NOOP_CMD
    case args => CommandNotFound(args)
  }
}