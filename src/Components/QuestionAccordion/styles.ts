import styled from 'styled-components';

export const QuestionBoxContainer = styled.div`
  .question-accordion--question {
    padding-left: 45px;
    position: relative;
    cursor: pointer;

    p {
      font-size: 18px;
      font-weight: 500;
      margin: 0;
      text-align: left;
      color: #ff0000;
    }

    &:before {
      content: ' ';
      --b: 4px; /* the thickness */
      width: 20px; /* the size */
      aspect-ratio: 1;
      background: conic-gradient(from 90deg at var(--b) var(--b), transparent 90deg, #888 0)
        calc(100% + var(--b) / 2) calc(100% + var(--b) / 2) / calc(50% + var(--b))
        calc(50% + var(--b));
      display: inline-block;
      position: absolute;
      left: 0;
      top: 4px;
    }
  }

  .question-accordion--answer-container {
    max-height: 0;
    overflow: hidden;
    transition: all 0.1s ease-out;
    padding-left: 45px;

    p {
      font-size: 16px;
      font-weight: 500;
      text-align: left;
      margin: 10px 0;
    }
  }

  &.answer-correct {
    .question-accordion--question {
      p {
        color: #008000;
      }
    }
  }

  &.question-accordion--opened {
    .question-accordion--question {
      &:before {
        background: conic-gradient(from 90deg at 0 var(--b), transparent 90deg, #888 0)
          calc(100% + var(--b) / 2) calc(100% + var(--b) / 2) / calc(50% + var(--b))
          calc(50% + var(--b));
      }
    }

    .question-accordion--answer-container {
      max-height: 100px;
    }
  }
`;
