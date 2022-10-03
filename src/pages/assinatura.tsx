import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import Heading from '@/components/app/Heading';
import BillingData from '@/components/assinatura/BillingData';
import Cards from '@/components/assinatura/Cards';

const pageData = {
  title: 'Assinatura',
  pageSubTitle:
    'Acompanhe aqui o status atual de sua assinatura, gerencie seu plano e suas informações de pagamento.',
  breadcrumb: [
    {
      title: 'Assinatura',
      href: '/assinatura',
    },
  ],
};

export default function Assinatura() {
  return (
    <>
      <Head>
        <title>ScalePRO | Assinatura</title>
      </Head>
      <Layout title={pageData.title}>
        <>
          <Heading page={pageData} />
          <BillingData />
          <Cards />
        </>
      </Layout>
    </>
  );
}
