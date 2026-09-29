import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './global.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-400">
        Open up App.js to start working on your app!!
      </Text>
      <Text className="text-2xl font-light text-cyan-700">
        Welcome back After long time!
        </Text>
    
      <StatusBar style="auto" />
    </View>
  );
}