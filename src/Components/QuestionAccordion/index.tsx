import { useState } from 'react';
import { QuestionBoxContainer } from './styles';

interface Props {
  question: string;
  correctAnswer: string;
  userAnswer: string | undefined;
}

export function QuestionAccordion({ question, correctAnswer, userAnswer }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <QuestionBoxContainer
      className={`question-accordion--container answer-${
        correctAnswer === userAnswer ? 'correct' : 'wrong'
      } question-accordion--${open ? 'opened' : ''}`}
      onClick={() => setOpen(!open)}
    >
      <div className="question-accordion--question">
        <p dangerouslySetInnerHTML={{ __html: question || '' }} />
      </div>
      <div className="question-accordion--answer-container">
        <p>{`Correct answer is "${correctAnswer}"`}</p>
        <p>{`You answered "${userAnswer || 'nothing'}"`}</p>
      </div>
    </QuestionBoxContainer>
  );
}
