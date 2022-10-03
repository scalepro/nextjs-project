import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import Heading from '@/components/app/Heading';

const pageData = {
  title: 'Configurações',
  pageSubTitle:
    'Aqui é possível editar, remover ou adicionar informações que serão necessárias e relevantes à sua conta.',
  breadcrumb: [
    {
      title: 'Configurações',
      href: '/configuracoes',
    },
  ],
};

export default function Configuracoes() {
  return (
    <>
      <Head>
        <title>ScalePRO | Configurações</title>
      </Head>
      <Layout title={pageData.title}>
        <>
          <Heading page={pageData} />
        </>
      </Layout>
    </>
  );
}
