import { View, Text, Pressable } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { score, total } = route.params;
  const percentage = Math.round((score / total) * 100);

  let feedback = '';
  if (percentage >= 80) {
    feedback = 'Excellent! 🎉';
  } else if (percentage >= 50) {
    feedback = 'Good Job! 👍';
  } else {
    feedback = 'Keep Practicing! 💪';
  }

  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-2xl font-bold text-gray-900">
        Your Score
      </Text>

      <Text className="mt-4 text-6xl font-bold text-purple-600">
        {score} / {total}
      </Text>

      <Text className="mt-2 text-lg text-gray-500">
        {percentage}%
      </Text>

      <Text className="mt-4 text-xl font-bold text-gray-800">
        {feedback}
      </Text>

      <Pressable
        className="mt-10 w-full rounded-xl bg-purple-600 py-4"
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text className="text-center text-lg font-bold text-white">
          Restart Quiz
        </Text>
      </Pressable>
    </View>
  );
}