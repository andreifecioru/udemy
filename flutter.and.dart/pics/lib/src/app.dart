import 'package:flutter/material.dart';

class App extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return AppState();
  }
}

class AppState extends State<App> {
  int counter = 0;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Let's See Images!"),
        ),
        body: Center(
          child: Text('Counter value: $counter'),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            setState(() => counter ++);
            print('Hello! $counter}');
          },
          tooltip: 'A button',
          child: Icon(Icons.add),
        ),
      )
    );
  }
}
