import { View, Text, Pressable } from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-purple-500 px-6">

      <Text className="text-4xl font-bold text-white">
        💡🧠 Quiz App
      </Text>

      <Text className="mt-4 text-center text-base text-purple-100">
        Test your knowledge with fun questions!
      </Text>

      <Pressable
        className="mt-10 rounded-xl bg-white px-10 py-4"
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text className="text-lg font-bold text-purple-600">
          Start Quiz
        </Text>
      </Pressable>

    </View>
  );
}