import 'package:audioplayers/audio_cache.dart';
import 'package:flutter/material.dart';

final AudioCache _player = AudioCache();

class MainPage extends StatefulWidget {
  @override
  _MainPageState createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: <Widget>[
        KeyNote(code: 1, color: Colors.red),
        KeyNote(code: 2, color: Colors.orange),
        KeyNote(code: 3, color: Colors.yellow),
        KeyNote(code: 4, color: Colors.green),
        KeyNote(code: 5, color: Colors.teal),
        KeyNote(code: 6, color: Colors.blue),
        KeyNote(code: 7, color: Colors.purple),
      ],
    );
  }
}

class KeyNote extends StatelessWidget {
  final int code;
  final MaterialColor color;

  KeyNote({this.code, this.color});

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: FlatButton(
        color: color,
        child: SizedBox(
          width: double.infinity,
        ),
        onPressed: () {
          _player.play('note$code.wav');
        },
      ),
    );
  }
}
