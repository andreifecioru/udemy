import 'package:flutter/material.dart';

import 'src/widgets/CardWidget.dart';

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
        backgroundColor: Colors.green[400],
        body: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              CircleAvatar(
                radius: 50,
                backgroundImage: AssetImage('images/avatar.jpg'),
              ),
              Text(
                'Andrei Fecioru',
                style: TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                  fontFamily: 'Pacifico',
                  fontSize: 40,
                ),
              ),
              Text(
                'SOFTWARE DEVELOPER',
                style: TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                  fontFamily: 'SourceSansPro',
                  fontSize: 20,
                  letterSpacing: 2.5,
                ),
              ),
              SizedBox(
                height: 20,
                width: 150,
                child: Divider(
                  color: Colors.white,
                ),
              ),
              CardWidget(
                text: '+40 728 446 476',
                icon: Icons.phone,
              ),
              CardWidget(
                text: 'andrei.fecioru@gmail.com',
                icon: Icons.email,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
