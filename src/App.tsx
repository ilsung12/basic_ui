import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import Skceleton from './components/Skceleton';

const Base = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 16px;
`;

const Item: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src="../public/logo192.png" />
      </ImageWrapper>
      <Info>
        <Title>Cat Talking a nap</Title>
        <Description>zzzzzzzzzzzz</Description>
      </Info>
    </Container>
  );
};

const Placeholder: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <Skceleton width={320} height={220} />
      </ImageWrapper>
      <Info>
        <Skceleton width={150} height={22} rounded />
        <div style={{ height: '8px' }} />
        <Skceleton width={200} height={19} rounded />
      </Info>
    </Container>
  );
};

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 20000);
  }, []);

  return (
    <Base>
      {loading
        ? Array.from({ length: 25 }).map((_, idx) => <Placeholder key={idx} />)
        : Array.from({ length: 25 }).map((_, idx) => <Item key={idx} />)}
    </Base>
  );
}

export default App;
