import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/movieoverview');
  }, []);
  return (
    <Wrapper>
      <h1>Welcome to real movie ratings!</h1>
      <p>Getting the best movies...</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px;
`;

export default Home;
