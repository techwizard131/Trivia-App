import styled from 'styled-components';

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .quiz-page--loading {
    font-size: 32px;
    font-weight: 500;
    position: absolute;
    text-align: center;
    width: calc(100% - 40px);
    top: calc(50% - 40px);
    transform: translateY(-50%);
  }

  .quiz-page--category-title {
    font-size: 32px;
    font-weight: 500;
  }

  .quiz-page--question-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    top: 50%;

    .quiz-page--question-page-info {
      margin: 30px 0 0;
      font-size: 18px;
    }
  }
`;
