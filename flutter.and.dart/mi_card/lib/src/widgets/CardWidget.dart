import 'package:flutter/material.dart';

class CardWidget extends StatelessWidget {
  final String text;
  final IconData icon;

  CardWidget({this.text, this.icon});

  @override
  Widget build(BuildContext context) {
    return Card(
      color: Colors.white,
      margin: EdgeInsets.symmetric(
        vertical: 10,
        horizontal: 25,
      ),
      child: ListTile(
        leading: Icon(icon),
        title: Text(
          text,
          style: TextStyle(
            fontSize: 20,
            fontFamily: 'SourceSansPro',
            color: Colors.teal,
          ),
        ),
      ),
    );
  }
}
