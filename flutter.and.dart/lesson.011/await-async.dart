import 'dart:async';

void main () async {
  print('Fetching data...');

  String data = await get('http://example.com');
  print(data);
}

Future<String> get(String url) {
  return new Future.delayed(
    Duration(seconds: 3),
    () => 'Done: $url'
  );
}