import { Button } from 'Components/Button';
import { QuestionBoxContainer } from './styles';

interface Props {
  question?: string | undefined;
  handleClick: (answer: boolean) => void;
}

export function QuestionBox({ question, handleClick }: Props) {
  return (
    <QuestionBoxContainer className="question-box--container">
      <p
        className="question-box--question"
        dangerouslySetInnerHTML={{ __html: question || '' }}
      ></p>
      <div className="question-box--button-container">
        <Button onClick={() => handleClick(true)} bgColor="#008000" color="#fff">
          True
        </Button>
        <Button onClick={() => handleClick(false)} bgColor="#ff0000">
          False
        </Button>
      </div>
    </QuestionBoxContainer>
  );
}
