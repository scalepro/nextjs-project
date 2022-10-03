import Link from 'next/link';
import { Fragment } from 'react';
import { Dialog, Transition, Disclosure } from '@headlessui/react';
import { classNames } from '@/services/functions';
import { HiOutlineChevronRight, HiX } from 'react-icons/hi';

export default function Sidebar({ navigation, sidebarOpen, setSidebarOpen }) {
  return (
    <div className="w-full h-full">
      {/* begin: Mobile sidebar menu */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pb-4 bg-white dark:bg-gray-800">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Fechar sidebar</span>
                    <HiX className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-200 dark:bg-gray-700">
                <img
                  className="block h-8 w-auto dark:hidden"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                />
                <img
                  className="hidden h-8 w-auto dark:block"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item) =>
                    !item.children ? (
                      <div key={item.name}>
                        {/* begin: Separação de itens da conta */}
                        {item.first && (
                          <div className="py-4">
                            <div className="border-t border-gray-200 dark:border-gray-700"></div>
                          </div>
                        )}
                        {/* end: Separação de itens da conta */}

                        <Link href={item.href}>
                          <a
                            href="#"
                            className={classNames(
                              item.current
                                ? 'bg-primary-700 text-gray-100 dark:bg-gray-700 dark:text-white'
                                : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100',
                              'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md'
                            )}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? 'text-gray-200 dark:text-gray-300'
                                  : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300',
                                'mr-3 flex-shrink-0 h-6 w-6'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        </Link>
                      </div>
                    ) : (
                      <Disclosure
                        as="div"
                        key={item.name}
                        className="space-y-1"
                        defaultOpen={item.current}
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md">
                              <item.icon
                                className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300"
                                aria-hidden="true"
                              />
                              <span className="flex-1">{item.name}</span>
                              <HiOutlineChevronRight
                                className={classNames(
                                  open
                                    ? 'text-gray-400 rotate-90'
                                    : 'text-gray-300',
                                  'ml-3 mr-2 flex-shrink-0 h-4 w-4 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                                )}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-1">
                              {item.children.map((subItem) => (
                                <Disclosure.Button
                                  key={subItem.name}
                                  as="a"
                                  href={subItem.href}
                                  className={classNames(
                                    subItem.current
                                      ? 'bg-primary-700 text-gray-100 dark:bg-gray-700 dark:text-white'
                                      : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100',
                                    'group w-full flex items-center  pl-11 pr-2 py-2 text-sm font-medium rounded-md'
                                  )}
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )
                  )}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
      {/* end: Mobile sidebar menu */}

      {/* begin: Desktop sidebar menu */}
      <div className="h-full flex-1 flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-200 dark:bg-gray-700">
          <img
            className="block h-8 w-auto dark:hidden"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
            alt="Workflow"
          />
          <img
            className="hidden h-8 w-auto dark:block"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
            alt="Workflow"
          />
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-2 py-4 space-y-1" aria-label="Sidebar">
            {navigation.map((item) =>
              !item.children ? (
                <div key={item.name}>
                  {/* begin: Separação de itens da conta */}
                  {item.first && (
                    <div className="py-4">
                      <div className="border-t border-gray-200 dark:border-gray-700"></div>
                    </div>
                  )}
                  {/* end: Separação de itens da conta */}

                  <Link href={item.href}>
                    <a
                      href="#"
                      className={classNames(
                        item.current
                          ? 'bg-primary-700 text-gray-100 dark:bg-primary-700 dark:text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100',
                        'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? 'text-gray-200 dark:text-gray-200'
                            : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300',
                          'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                </div>
              ) : (
                <Disclosure
                  as="div"
                  key={item.name}
                  className="space-y-1"
                  defaultOpen={item.current}
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md">
                        <item.icon
                          className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300"
                          aria-hidden="true"
                        />
                        <span className="flex-1">{item.name}</span>
                        <HiOutlineChevronRight
                          className={classNames(
                            open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                            'ml-3 mr-2 flex-shrink-0 h-4 w-4 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                          )}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="space-y-1">
                        {item.children.map((subItem) => (
                          <Link key={subItem.name} href={subItem.href}>
                            <Disclosure.Button
                              as="a"
                              href="#"
                              className={classNames(
                                subItem.current
                                  ? 'bg-primary-700 text-gray-100 dark:bg-primary-700 dark:text-white'
                                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100',
                                'group w-full flex items-center  pl-11 pr-2 py-2 text-sm font-medium rounded-md'
                              )}
                            >
                              {subItem.name}
                            </Disclosure.Button>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              )
            )}
          </nav>
        </div>
      </div>
      {/* end: Desktop sidebar menu */}
    </div>
  );
}
