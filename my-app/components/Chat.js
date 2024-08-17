import React, { useState } from 'react';
import { Button, Text, TextInput, View, SafeAreaView, Pressable } from 'react-native';
import tailwind from 'twrnc';

const Chat = () => {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={tailwind`justify-end flex-1 inline-block`}>
      <TextInput 
        style={tailwind`h-10 m-3 border p-2`}
        onChangeText={text}
        placeholder="Type a message"
      />
      <Button
        style={tailwind`bg-blue-500 text-white`}
        title="Send"
      />
      
    </SafeAreaView>
  );
}

export default Chat;