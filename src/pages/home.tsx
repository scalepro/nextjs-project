import Head from 'next/head';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import Layout from '@/components/layout/Layout';
import Heading from '@/components/app/Heading';
import Stats from '@/components/home/Stats';
import Steps from '@/components/home/Steps';

const pageDataStart = {
  title: 'Home',
  breadcrumb: [
    {
      title: 'Home',
      href: '/home',
    },
  ],
};

export default function Home() {
  const [pageData, setPageData] = useState(pageDataStart);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      const [firstName, lastName] = user.name.split(' ');
      let pageDataClone = {
        ...pageData,
        pageTitle: 'Olá, ' + firstName + ' 👋',
      };
      setPageData(pageDataClone);
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>ScalePRO | Home</title>
      </Head>
      <Layout title={pageData.title}>
        <>
          <Heading page={pageData} />
          <Stats />
          <Steps />
        </>
      </Layout>
    </>
  );
}
