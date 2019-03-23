import 'dart:convert' as convert;

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http show get;

import 'models/image_model.dart';

class App extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return AppState();
  }
}

class AppState extends State<App> {
  static final String IMG_SERVICE_URL = 'https://jsonplaceholder.typicode.com/photos';
  int counter = 1;

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
          onPressed: fetchImage,
          tooltip: 'A button',
          child: Icon(Icons.play_arrow),
        ),
      )
    );
  }

  void fetchImage() {
    http.get('$IMG_SERVICE_URL/$counter')
    .then((response) {
      if (response.statusCode == 200) {
        var parsedJson = convert.jsonDecode(response.body);
        var imageModel = ImageModel.fromJson(parsedJson);
        print(imageModel);

        setState(() => counter ++);
      }
    });
  }
}
