import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const IndexPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/1');
  }, []);

  return null;
};

export default IndexPage;
