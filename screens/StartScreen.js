import { View, Text, Pressable } from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-purple-500 px-6">

      <Text className="text-4xl font-bold text-black">
        💡🧠 Quiz App
      </Text>

      <Text className="mt-4 text-center text-base font-bold text-black">
        Test your knowledge with fun questions!
      </Text>

      <Pressable
        className="mt-10 rounded-xl bg-white px-10 py-4"
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text className="text-lg font-bold text-black">
          Start Quiz
        </Text>
      </Pressable>
      
      <View className="mt-6 flex-row gap-6 ">
        <Text className="text-black font-bold">📝 10 Questions</Text>
        <Text className="text-black font-bold">⏱️ 5 Minutes</Text>
      </View>

    </View>

    
  );
}