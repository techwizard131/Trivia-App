import styled from 'styled-components';

export const QuestionBoxContainer = styled.div`
  border: 1px solid #000000;
  padding: 40px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .question-box--question {
    font-size: 28px;
    font-weight: 500;
    margin: 0;
    display: flex;
    align-items: center;
    height: 100%;
    word-break: break-word;
    hyphens: auto;
  }

  .question-box--button-container {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
      flex: 1;
    }
  }
`;
