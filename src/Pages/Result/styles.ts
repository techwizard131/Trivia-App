import styled from 'styled-components';

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .result-page--score-title {
    font-size: 25px;
    font-weight: 500;
    line-height: 150%;
  }

  .result-page--question-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px 0;
    margin: 40px 0 0;
  }

  button {
    margin: 40px 0 0;
  }
`;
