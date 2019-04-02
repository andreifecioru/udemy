package basics

object StringOps extends App {
  // String interpolators - there are 3 types

  // S-interpolator
  println(s"Example string: ${1 + 1}")

  // F-interpolator (with printf-like syntax)
  println(f"Example string: ${1.2}%2.2f")

  // Raw-interpolator (keeps special characters like end-of-line)
  println(raw"Example string \n Another string")
}
