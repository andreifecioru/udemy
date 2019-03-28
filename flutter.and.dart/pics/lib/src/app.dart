import 'dart:convert' as convert;

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http show get;

import 'models/image_model.dart';
import 'widgets/image_list.dart';


class App extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return AppState();
  }
}

class AppState extends State<App> {
  static final String imgServiceUrl = 'https://jsonplaceholder.typicode.com/photos';
  int counter = 1;

  List<ImageModel> images = [];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Let's See Images!"),
        ),
        body: ImageList(images),
        floatingActionButton: FloatingActionButton(
          onPressed: fetchImage,
          tooltip: 'A button',
          child: Icon(Icons.play_arrow),
        ),
      )
    );
  }

  void fetchImage() {
    http.get('$imgServiceUrl/$counter')
    .then((response) {
      if (response.statusCode == 200) {
        var parsedJson = convert.jsonDecode(response.body);
        var imageModel = ImageModel.fromJson(parsedJson);

        addImage(imageModel);
        incrementCounter();
      }
    });
  }

  void incrementCounter() {
    setState(() {
      counter ++;
    });
  }

  void addImage(ImageModel image) {
    setState(() {
      images.add(image);
      print('We now have ${images.length} images');
    });
  }
}
