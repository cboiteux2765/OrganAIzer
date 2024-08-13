import { Switch, Text, View } from "react-native";
import { useState } from "react";

export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Push Notifications</Text>
      <Switch
            trackColor={{false: '#767577', true: '#1ddb4f'}}
            thumbColor={'white'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    </View>
  );
}