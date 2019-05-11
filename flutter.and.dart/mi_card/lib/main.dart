import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

// NOTE: we have to use a stateless/stateful widget
// in order for the hot-reload to work
// (we need a 'build()' method to be called)
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.teal,
        body: bodyWidget,
      ),
    );
  }

  Widget bodyWidget = SafeArea(
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        Container(
          color: Colors.red,
          width: 100,
        ),
        Container(
            child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Container(
              color: Colors.yellow,
              width: 100,
              height: 100,
            ),
            Container(
              color: Colors.green,
              width: 100,
              height: 100,
            ),
          ],
        )),
        Container(
          color: Colors.blue,
          width: 100,
        ),
      ],
    ),
  );

  Widget bodyWidget1 = SafeArea(
      child: Column(
//          mainAxisSize: MainAxisSize.min,
//          mainAxisAlignment: MainAxisAlignment.spaceBetween,
//          crossAxisAlignment: CrossAxisAlignment.end,
    crossAxisAlignment: CrossAxisAlignment.stretch,
//          verticalDirection: VerticalDirection.up,
    children: <Widget>[
      Container(
        color: Colors.white,
        height: 100,
        child: Text('Container 1'),
      ),
      SizedBox(height: 20),
      Container(
        height: 100,
        color: Colors.blue,
        child: Text('Container 2'),
      ),
      SizedBox(height: 20),
      Container(
        height: 100,
        color: Colors.red,
        child: Text('Container 3'),
      ),

      // Forces all the containers above to align
      // to the end or to be stretched
      Container(
        width: double.infinity,
      )
    ],
  ));
}
