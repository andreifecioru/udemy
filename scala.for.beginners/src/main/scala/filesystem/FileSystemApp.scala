package filesystem

import java.util.Scanner

import filesystem.commands.Command
import filesystem.fs.State
import filesystem.fs.FsNode._

object FileSystemApp extends App {
  var state = State(FS_ROOT, FS_ROOT)
  state.show()

  val scanner = new Scanner(System.in)
  while(true) {
    val input = scanner.nextLine()
    val cmd = Command.from(input)
    state = cmd.apply(state)
    state.show()
  }
}

