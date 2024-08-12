import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/Home";
import Settings from "./components/Settings";
import Chat from "./components/Chat";
import CameraScreen from "./components/CameraScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarIcon: makeIconRender("home") }}
        />
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{ tabBarIcon: makeIconRender("camera") }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{ tabBarIcon: makeIconRender("message") }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{ tabBarIcon: makeIconRender("cog") }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
