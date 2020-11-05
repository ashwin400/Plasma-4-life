import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class TextInputCustom extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        
      </View>
    );
  }
}