import 'dart:async';

void main () {
  print('Fetching data...');

  get('http://example.com')
    .then((data) => print(data));
}

Future<String> get(String url) {
  return new Future.delayed(
    Duration(seconds: 3),
    () => 'Done: $url'
  );
}