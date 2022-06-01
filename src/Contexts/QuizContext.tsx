import React, { useState } from 'react';
import axios from 'axios';

interface QuizData {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  user_answer: string;
}

interface IQuizContext {
  questions: QuizData[];
  fetchQuestions: () => void;
  clearQuestions: () => void;
  isFetching: boolean;
  saveAnswer: (index: number, answer: boolean) => void;
}

const QuizContext = React.createContext<IQuizContext | any>({});
export { QuizContext };

const QuizContextContainer = (props: any) => {
  const [questions, setQuestions] = useState<QuizData[]>([]);
  const [isFetching, setFetching] = useState<boolean>(true);

  const fetchQuestions = async () => {
    setFetching(true);
    const data = await axios.get(
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    );
    if (data?.status === 200) {
      const { results } = data.data;
      setQuestions([...results]);
    }
    setFetching(false);
  };

  const clearQuestions = () => {
    setQuestions([]);
    setFetching(true);
  };

  const saveAnswer = (index: number, answer: boolean) => {
    const tmp = [...(questions || [])];
    tmp[index] = {
      ...tmp[index],
      user_answer: answer ? 'True' : 'False',
    };
    setQuestions(tmp);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        fetchQuestions,
        clearQuestions,
        isFetching,
        saveAnswer,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizContextContainer;
