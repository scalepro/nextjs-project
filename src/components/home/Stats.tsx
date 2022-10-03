import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import StatsLoading from './StatsLoading';
import {
  HiCheckCircle,
  HiXCircle,
  HiExclamationCircle,
  HiTemplate,
} from 'react-icons/hi';

export default function Stats() {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="h-full">
              <div className="flex h-full items-center">
                {user?.active ? (
                  <div className="h-full px-5 lg:px-7 flex-shrink-0 bg-green-500 flex items-center">
                    <HiCheckCircle className="w-10 h-10 text-gray-100" />
                  </div>
                ) : user?.plan ? (
                  <div className="h-full px-5 lg:px-7 flex-shrink-0 bg-red-600 flex items-center">
                    <HiXCircle className="w-10 h-10 text-gray-100" />
                  </div>
                ) : (
                  <div className="h-full px-5 lg:px-7 flex-shrink-0 bg-yellow-500 flex items-center">
                    <HiExclamationCircle className="w-10 h-10 text-gray-100" />
                  </div>
                )}

                <div className="py-3 ml-6 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-600 dark:text-gray-400 truncate">
                      Status da conta
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-800 dark:text-gray-200">
                        {user?.active ? 'Ativa' : 'Inativa'}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="h-full">
              <div className="flex h-full items-center">
                {user?.theme ? (
                  <div className="h-full px-5 lg:px-7 flex-shrink-0 bg-green-500 flex items-center">
                    <HiTemplate className="w-10 h-10 text-gray-100" />
                  </div>
                ) : (
                  <div className="h-full px-5 lg:px-7 flex-shrink-0 bg-gray-500 flex items-center">
                    <HiTemplate className="w-10 h-10 text-gray-100" />
                  </div>
                )}
                <div className="py-3 ml-6 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-600 dark:text-gray-400 truncate">
                      Tema instalado
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-800 dark:text-gray-200">
                        {user?.theme ? user?.theme : 'Nenhum'}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <StatsLoading />
      )}
    </>
  );
}
