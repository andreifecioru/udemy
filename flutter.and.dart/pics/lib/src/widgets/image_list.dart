import 'package:flutter/material.dart';
import '../models/image_model.dart';

class ImageList extends StatelessWidget {
  final List<ImageModel> images;

  ImageList(this.images);

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: images.length,
      itemBuilder: (ctx, idx) => buildImage(images[idx]),
    );
  }

  Widget buildImage(ImageModel image) {
    return Container(
        margin: EdgeInsets.all(8),
        decoration: BoxDecoration(
            border: Border.all(color: Colors.grey)
        ),
        padding: EdgeInsets.all(8),
        child: Column(
          children: <Widget>[
            Image.network(image.url),
            Padding(
              padding: EdgeInsets.only(top: 4),
              child: Text(image.title),
            ),
          ],
        )
    );
  }
}
