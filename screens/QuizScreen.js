import { View, Text, Pressable } from "react-native";
import { useState } from "react";

const questions = [
  {
    id: "1",
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: "2",
    question: "What is capital of Pakistan?",
    options: ["USA", "KSA", "NY", "None of these"],
    correctAnswer: "None of these",
  },
  {
    id: "3",
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    id: "4",
    question: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    id: "5",
    question: "What is the largest ocean in the world?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: "Pacific Ocean",
  },
  {
    id: "6",
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "Python", "Java"],
    correctAnswer: "CSS",
  },
  {
    id: "7",
    question: "What is 10 + 15?",
    options: ["20", "25", "30", "35"],
    correctAnswer: "25",
  },
  {
    id: "8",
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Elephant", "Lion", "Bear"],
    correctAnswer: "Lion",
  },
  {
    id: "9",
    question: "Which country is famous for the Eiffel Tower?",
    options: ["Italy", "France", "Germany", "Spain"],
    correctAnswer: "France",
  },
];

export default function QuizScreen({ navigation }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    const finalScore = selectedAnswer === currentQuestion.correctAnswer ? score + 1 : score;

    if (isLastQuestion) {
      navigation.navigate('Result', {
        score: finalScore,
        total: questions.length,
      });
    } else {
      setScore(finalScore);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-base text-gray-500">
        Question {currentQuestionIndex + 1} of {questions.length}
      </Text>

      <Text className="mt-2 text-xl font-bold text-center">
        {currentQuestion.question}
      </Text>

      {currentQuestion.options.map((option, index) => {
        const isSelected = option === selectedAnswer;
        const isCorrect = option === currentQuestion.correctAnswer;

        let bgColor = 'bg-gray-100';
        let textColor = 'text-black';

        if (selectedAnswer) {
          if (isCorrect) {
            bgColor = 'bg-green-500';
            textColor = 'text-white';
          } else if (isSelected && !isCorrect) {
            bgColor = 'bg-red-500';
            textColor = 'text-white';
          }
        }

        return (
          <Pressable
            key={index}
            className={`w-full rounded-xl py-4 px-7 mt-3 ${bgColor}`}
            onPress={() => setSelectedAnswer(option)}
            disabled={selectedAnswer !== null}
          >
            <Text className={`text-base font-bold ${textColor}`}>
              {option}
            </Text>
          </Pressable>
        );
      })}

      {selectedAnswer && (
        <Pressable
          className="mt-8 w-full rounded-xl bg-black py-4"
          onPress={handleNext}
        >
          <Text className="text-center text-lg font-bold text-white">
            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
          </Text>
        </Pressable>
      )}
    </View>
  );
}