import 'dart:math';

import 'package:flutter/material.dart';

class MainPage extends StatefulWidget {
  @override
  _MainPageState createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  final Random _rng = Random();
  int _number = 1;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: FlatButton(
        child: Image.asset('images/ball$_number.png'),
        onPressed: _nextAnswer,
      ),
    );
  }

  void _nextAnswer() {
    setState(() {
      _number = _rng.nextInt(5) + 1;
    });
  }
}
