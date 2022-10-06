export default function Table({ bodyData }) {
  return (
    <div className="overflow-x-auto relative mt-5 -mx-5 sm:-mx-6 max-h-80">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Período
            </th>
            <th scope="col" className="py-3 px-6">
              Valor
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {!bodyData.length && (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                colSpan="3"
                className="py-4 px-6 font-medium text-gray-700 whitespace-nowrap dark:text-gray-100"
              >
                Nenhum pagamento realizado
              </th>
            </tr>
          )}
          {bodyData.map((item, itemIdx) => (
            <tr
              key={itemIdx}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-700 whitespace-nowrap dark:text-gray-100"
              >
                {item.period}
              </th>
              <td className="py-4 px-6"> {item.value} </td>
              <td className="py-4 px-6"> {item.status} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
