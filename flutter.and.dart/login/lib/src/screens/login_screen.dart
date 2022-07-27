import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return LoginScreenState();
  }
}

class LoginScreenState extends State<LoginScreen> {
  final formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(32),
      child: Form(
        key: formKey,
        child: Column(
          children: <Widget>[
            emailField(),
            passwdField(),
            SizedBox(height: 16),
            submitBtn(),
          ],
        ),
      ),
    );
  }

  Widget emailField() {
    return TextFormField(
      decoration: InputDecoration(
        labelText: 'e-mail',
        hintText: 'your.name@example.com',
      ),
      keyboardType: TextInputType.emailAddress,
    );
  }

  Widget passwdField() {
    return TextFormField(
      decoration: InputDecoration(
        labelText: 'password',
        hintText: 'your password here'
      ),
      obscureText: true,
    );

  }

  Widget submitBtn() {
    return ElevatedButton(
      style: ElevatedButton.styleFrom(
        primary: Colors.blue
      ),
      child: Text(
        'Submit',
        style: TextStyle(
          color: Colors.white
        ),
      ),
      onPressed: onSubmitPressed,
    );
  }

  void onSubmitPressed() {
    formKey.currentState.reset();
  }
}