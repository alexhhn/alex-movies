import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/movieoverview');
  }, []);
  return <h1>Getting the best movies just for you...</h1>;
};

export default Home;
