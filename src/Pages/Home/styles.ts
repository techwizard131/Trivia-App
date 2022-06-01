import styled from 'styled-components';

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .page--title {
    font-size: 32px;
    font-weight: 600;
  }

  & > p {
    font-size: 28px;
    font-weight: 500;
  }
`;
