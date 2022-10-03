import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { classNames } from '@/services/functions';
import { HiMenu, HiOutlineBell } from 'react-icons/hi';

const notifications = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '#',
    icon: HiMenu,
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '#',
    icon: HiMenu,
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '#',
    icon: HiMenu,
  },
];

export default function Notification() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open &&
                'bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-white',
              'hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded-lg text-gray-400 hover:text-gray-500 dark:hover:text-white focus:outline-none'
            )}
          >
            <HiOutlineBell className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-full pl-5 z-10 mt-2 w-screen max-w-[21rem] sm:max-w-[22rem] -translate-x-2/3 sm:-translate-x-3/4  transform px-4 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white dark:bg-gray-700 p-6">
                  {notifications.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-gray-700 hover:text-gray-800 dark:text-gray-50 sm:h-12 sm:w-12 bg-gray-200 dark:bg-gray-500 rounded">
                        <item.icon aria-hidden="true" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="bg-white dark:bg-gray-700 border-t border-gray-100 dark:border-gray-500 p-4">
                  <a
                    href="#"
                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <span className="flex items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Ver todas
                      </span>
                    </span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400">
                      Clique para ver todas as notificações
                    </span>
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
