export default function StatsLoading() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="animate-pulse bg-gray-50 dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div className="h-[72px]">
          <div className="flex h-full items-center">
            <div className="h-full px-10 lg:px-12 flex-shrink-0 bg-gray-300 dark:bg-gray-700 flex items-center"></div>
            <div className="py-3 ml-6 flex-1">
              <div className="w-full">
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3 mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="animate-pulse bg-gray-50 dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div className="h-[72px]">
          <div className="flex h-full items-center">
            <div className="h-full px-10 lg:px-12 flex-shrink-0 bg-gray-300 dark:bg-gray-700 flex items-center"></div>
            <div className="py-3 ml-6 flex-1">
              <div className="w-full">
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3 mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
