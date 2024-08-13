import React, { useState } from 'react';
import { Button, Text, TextInput, View, SafeAreaView, Pressable } from 'react-native';
import tailwind from 'twrnc';

const Chat = () => {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={tailwind`justify-end flex-1`}>
      <TextInput 
        style={tailwind`h-10 m-3 border p-2`}
        onChangeText={text}
        placeholder="Type a message"
      />
      <Pressable style={tailwind`absolute self-center right-0`}>
        <Text>Send</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default Chat;