import 'package:flutter/material.dart';

void main() {
  MaterialApp app = MaterialApp(
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

        child: Icon(Icons.play_arrow),
      ),
    )
  );

  runApp(app);
}