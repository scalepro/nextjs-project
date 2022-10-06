export default function TableLoading() {
  return (
    <div className="overflow-x-auto relative mt-5 -mx-5 sm:-mx-6 max-h-80">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 animate-pulse">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </th>
            <td className="py-4 px-6">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </td>
            <td className="py-4 px-6">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
