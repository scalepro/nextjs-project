import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import Heading from '@/components/app/Heading';
import ListThemes from '@/components/loja/ListThemes';

const pageData = {
  title: 'Temas',
  subTitle: 'Loja',
  pageTitle: 'Temas para loja',
  pageSubTitle:
    'Somos líder em criação dos melhores temas e com o maior foco em conversão que existe no mercado.',
  breadcrumb: [
    {
      title: 'Temas',
    },
    {
      title: 'Loja',
      href: '/loja',
    },
  ],
};

export default function Loja() {
  return (
    <>
      <Head>
        <title>ScalePRO | Loja</title>
      </Head>
      <Layout title={pageData.title} subTitle={pageData.subTitle}>
        <>
          <Heading page={pageData} />
          <ListThemes />
        </>
      </Layout>
    </>
  );
}
