import 'package:flutter/material.dart';

import 'src/MainPage.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.blueGrey[700],
          title: Text('Ask Me Anything'),
        ),
        body: MainPage(),
        backgroundColor: Colors.blueGrey,
      ),
    ),
  );
}
