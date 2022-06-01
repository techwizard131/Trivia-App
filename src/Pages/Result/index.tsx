import { useContext } from 'react';
import MainLayout from 'Layout/main';
import { useNavigate } from 'react-router-dom';
import { Button } from 'Components/Button';
import { QuestionAccordion } from 'Components/QuestionAccordion';
import { QuizContext } from 'Contexts/QuizContext';
import { ResultContainer } from './styles';

export default function QuizPage() {
  const navigate = useNavigate();
  const { questions, clearQuestions } = useContext(QuizContext);
  const score = questions.filter(
    (question: any) => question.correct_answer === question.user_answer
  ).length;
  const handlePlayAgain = () => {
    clearQuestions();
    navigate('/');
  };

  return (
    <MainLayout>
      <ResultContainer className="page-container result-page--container">
        <h2 className="result-page--score-title">
          You scored
          <br />
          {`${score} / ${questions.length}`}
        </h2>
        <div className="result-page--question-content">
          {questions.map((question: any, index: number) => (
            <QuestionAccordion
              question={question.question}
              correctAnswer={question.correct_answer}
              userAnswer={question.user_answer}
              key={index}
            />
          ))}
        </div>
        <Button onClick={handlePlayAgain}>Play Again?</Button>
      </ResultContainer>
    </MainLayout>
  );
}
