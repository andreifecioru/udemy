import 'package:flutter/material.dart';

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Let's See Images!"),
        ),
        body: Center(
          child: Text('A pics app'),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            print('Hello!');
          },
          tooltip: 'A button',
          child: Icon(Icons.add),
        ),
      )
    );
  }
}
