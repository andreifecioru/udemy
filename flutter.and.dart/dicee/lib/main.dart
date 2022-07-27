import 'dart:math';

import 'package:flutter/material.dart';

void main() {
  return runApp(
    MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.red,
        appBar: AppBar(
          title: Text('Dicee'),
          backgroundColor: Colors.red,
        ),
        body: DicePage(),
      ),
    ),
  );
}

class DicePage extends StatefulWidget {
  @override
  _DicePageState createState() => _DicePageState();
}

class _DicePageState extends State<DicePage> {
  int leftDiceNumber = 1;
  int rightDiceNumber = 1;

  final Random rng = new Random();

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        children: <Widget>[
          Expanded(
//          flex: 2,
            child: TextButton(
              child: Image.asset('images/dice$leftDiceNumber.png'),
              onPressed: _onDicePressed,
            ),
          ),
          Expanded(
//          flex: 1,
            child: TextButton(
              child: Image.asset('images/dice$rightDiceNumber.png'),
              onPressed: _onDicePressed,
            ),
          ),
        ],
      ),
    );
  }

  void _onDicePressed() {
    setState(() {
      leftDiceNumber = _nextDiceValue();
      rightDiceNumber = _nextDiceValue();
    });
  }

  int _nextDiceValue() {
    return rng.nextInt(6) + 1;
  }
}
