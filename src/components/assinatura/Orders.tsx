import Table from './Table';
import TableLoading from './TableLoading';
import { dividedCard, cardTitle, cardSubtitle } from '@/styles/StyledElements';

export default function Orders() {
  const paymentData = [
    {
      period: 'De 13/08/22 à 20/08/22',
      value: 'R$15,89',
      status: 'Pago',
    },
  ];
  return (
    <section className="mt-10" aria-labelledby="table-orders">
      <div className={dividedCard}>
        <div className="px-4 pt-5 pb-3 sm:px-6 sm:pt-6 sm:pb-3">
          <div>
            <h2 id="payment-made" className={cardTitle}>
              Pagamentos realizados
            </h2>
            <p className={cardSubtitle}>
              Estes são os registros de pagamentos que já foram realizados em
              sua conta desde a sua criação.
            </p>
          </div>
          <Table bodyData={paymentData} />
        </div>
      </div>
    </section>
  );
}
