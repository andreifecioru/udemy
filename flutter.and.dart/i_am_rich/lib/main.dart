import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.blueGrey,
        appBar: AppBar(
          title: Text('I am rich!'),
          backgroundColor: Colors.blueGrey[900],
        ),
        body: Center(
          child: Column(
            children: <Widget>[
              Image(image: AssetImage('images/diamond.png')),
              Text('Andrei is the best! He really is!')
            ],
          ),
        ),
      ),
    ),
  );
}
