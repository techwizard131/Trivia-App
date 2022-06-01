import MainLayout from 'Layout/main';
import { useNavigate } from 'react-router-dom';
import { Button } from 'Components/Button';
import { HomepageContainer } from './styles';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <HomepageContainer className="page-container home-page--container">
        <h2 className="page--title">Welcome to the Trivia Challenge</h2>
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you score 100%?</p>
        <Button onClick={() => navigate('/quiz')}>Begin</Button>
      </HomepageContainer>
    </MainLayout>
  );
}
