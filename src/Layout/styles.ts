import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  background-color: #dcdcdc;
  margin: 0 auto;

  .main-content {
    padding: 30px;
    height: calc(100% - 60px);
    overflow: auto;

    .page-container {
      min-height: 100%;
      padding: 0 20px;
    }
  }
`;
