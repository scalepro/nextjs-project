export const StepsData = [
  {
    title: 'Etapa 1',
    description: 'Para confirmar sua conta, verifique o seu e-mail',
    content:
      'Para a segurança e validação de todos os usuários, nós verificamos a validade dos e-mails cadastrados em cada conta cadastrada em nosso site.',
    buttons: [
      {
        text: 'Verificar',
        href: '#',
        class:
          'text-gray-100 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 mr-2',
        classDisabled:
          'bg-primary-600 cursor-not-allowed text-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2',
      },
      {
        text: 'Reenviar código',
        href: '#',
        class:
          'text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
        classDisabled:
          'text-gray-700 bg-gray-50 border border-gray-300 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 cursor-not-allowed',
      },
    ],
    finished: true,
  },
  {
    title: 'Etapa 2',
    description: 'Essa é a etapa 2',
    content:
      'If you are unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.',
    finished: false,
  },
];
