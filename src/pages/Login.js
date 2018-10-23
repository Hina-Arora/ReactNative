import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView} from 'react-native';

import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';

export default class Login extends Component {
  render() {
    return (

      <ScrollView style={styles.scroll}>
              <Container>
                  <Button
                      label="Forgot Password?"
                      styles={{button: styles.alignRight, label: styles.label}}
                      // onPress={this.press.bind(this)} />
                      />
              </Container>
              <View style={styles.imageContainer}>
                          <Image resizeMode="contain"

                          style={styles.logo} source={require('../images/image1.jpg')} />
               </View>
              <Container>
          <Label text="Username or Email" />
          <TextInput
              placeholder="7838261344"
              style={styles.textInput}
          />
      </Container>
      <Container>
          <Label text="Password" />
          <TextInput
              secureTextEntry={true}
              placeholder="Enter password"
              style={styles.textInput}
          />
      </Container>
  </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
      position: 'absolute',
      width: 300,
      height: 100
  },
  imageContainer:{
       alignItems: 'center',
      
       padding: 40,
       marginBottom:40,
       justifyContent: 'center'
   },
  label: {
    color: 'white',
    fontSize: 15
  },
  alignRight: {
      alignSelf: 'flex-end'
  },
  scroll: {
     backgroundColor: '#4a90e2',
     padding: 30,
     flexDirection: 'column'
 },
 textInput: {
    height: 40,
    fontSize: 15,
    backgroundColor: 'white'
  },
});
