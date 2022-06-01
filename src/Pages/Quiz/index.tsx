import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from 'Layout/main';
import { QuestionBox } from 'Components/QuestionBox';
import { QuizContext } from 'Contexts/QuizContext';
import { HomepageContainer } from './styles';

export default function QuizPage() {
  const navigate = useNavigate();
  const { questions, fetchQuestions, isFetching, saveAnswer } = useContext(QuizContext);
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    if (questions.length === 0) {
      fetchQuestions();
    }
  }, []);

  const handleAnswer = (answer: boolean) => {
    saveAnswer(pageNum, answer);

    if (pageNum + 1 < questions.length) {
      setPageNum(pageNum + 1);
    } else {
      navigate('/result');
    }
  };

  return (
    <MainLayout>
      <HomepageContainer className="page-container quiz-page--container">
        {isFetching || questions.length === 0 ? (
          <p className="quiz-page--loading">Loading...</p>
        ) : (
          <>
            <h2 className="quiz-page--category-title">{questions?.[pageNum].category}</h2>
            <div className="quiz-page--question-content">
              <QuestionBox question={questions?.[pageNum].question} handleClick={handleAnswer} />
              <p className="quiz-page--question-page-info">{`${pageNum + 1} of ${
                questions.length
              }`}</p>
            </div>
          </>
        )}
      </HomepageContainer>
    </MainLayout>
  );
}
