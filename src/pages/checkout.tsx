import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import Heading from '@/components/app/Heading';
import ListThemes from '@/components/checkout/ListThemes';
import ListThemesLoading from '@/components/app/ListThemesLoading';

const pageData = {
  title: 'Temas',
  subTitle: 'Checkout',
  pageTitle: 'Temas para checkout',
  pageSubTitle:
    'Um checkout bonito passa segurança, profissionalizmo e muda tudo na hora do cliente decidir realizar um pedido ou abandonar a compra.',
  breadcrumb: [
    {
      title: 'Temas',
    },
    {
      title: 'Checkout',
      href: '/checkout',
    },
  ],
};

export default function Checkout() {
  return (
    <>
      <Head>
        <title>ScalePRO | Checkout</title>
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
