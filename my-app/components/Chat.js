import React, { useState } from 'react';
import { Text, TextInput, View, SafeAreaView } from 'react-native';
import tailwind from 'twrnc';

const Chat = () => {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={tailwind`align-bottom`}>
      <TextInput 
        style={tailwind`h-10 m-3 border p-2`}
        onChangeText={text}
        placeholder='Type a message'
      />
    </SafeAreaView>
  );
}

export default Chat;