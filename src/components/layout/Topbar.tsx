import { Fragment, useContext } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { AuthContext } from '@/contexts/AuthContext';
import { classNames, getInitials } from '@/services/functions';
import ThemeSwitch from './ThemeSwitch';
import Notification from './Notification';
import { HiMenu, HiOutlineSearch, HiOutlineChevronDown } from 'react-icons/hi';

export default function Topbar({ navigation, setSidebarOpen }) {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white dark:bg-gray-800 shadow">
        <button
          type="button"
          className="px-4 border-r border-gray-200 dark:border-gray-700 text-gray-500 focus:outline-none md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <HiMenu className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 px-4 flex justify-between">
          <div className="flex-1 flex">
            <form className="w-full flex md:ml-0" action="#" method="GET">
              <label htmlFor="search-field" className="sr-only">
                Buscar
              </label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600 dark:focus-within:text-gray-300">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <HiOutlineSearch className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  className="block w-full h-full pl-8 pr-3 py-2 bg-white dark:bg-gray-800 border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-200 focus:outline-none focus:placeholder-gray-400 dark:focus:placeholder-white focus:ring-0 focus:border-transparent sm:text-sm"
                  placeholder="Buscar"
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <Notification />

            <ThemeSwitch />

            {/* begin: Perfil dropdown */}
            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="max-w-xs bg-white dark:bg-gray-800 flex items-center text-sm rounded-full focus:outline-none">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary-700">
                    <span className="font-medium leading-none text-gray-100">
                      {getInitials(user?.name)}
                    </span>
                  </span>
                  <span className="hidden ml-3 text-gray-600 dark:text-gray-100 hover:text-gray-800 dark:hover:text-white text-sm font-medium lg:block">
                    <span className="sr-only">Abrir menu de usuário</span>
                    {user?.name}
                  </span>
                  <HiOutlineChevronDown className="hidden flex-shrink-0 ml-1 h-4 w-4 text-gray-500 dark:text-gray-100 lg:block" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-200 dark:divide-gray-600">
                  <div className="px-4 py-3 text-gray-600 dark:text-gray-100">
                    <p className="text-sm">Logado como</p>
                    <p className="text-sm font-medium truncate">
                      {user?.email}
                    </p>
                  </div>
                  <div>
                    {navigation.map(
                      (item) =>
                        item.type == 'user' && (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active &&
                                    'bg-gray-100 dark:bg-gray-600 dark:text-white',
                                  'flex px-4 py-2 text-sm text-gray-600 dark:text-gray-100'
                                )}
                              >
                                <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        )
                    )}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            {/* end: Perfil dropdown */}
          </div>
        </div>
      </div>
    </div>
  );
}
