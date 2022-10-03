import { Disclosure } from '@headlessui/react';
import { HiCheckCircle, HiOutlineChevronRight } from 'react-icons/hi';
import { classNames } from '@/services/functions';
import { StepsData } from './StepsData';

export default function Steps() {
  return (
    <>
      <div className="w-full pt-8">
        <div className="mx-auto w-full rounded shadow bg-white dark:bg-gray-800 p-5">
          <div>
            <h1 className="text-md font-medium text-gray-700 dark:text-gray-200">
              Complete as etapas abaixo e comece a escalar sua operação
            </h1>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3 dark:bg-gray-700">
              <div className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-700 w-[35%]"></div>
            </div>
          </div>
          <div className="grid gap-3 mt-5">
            {StepsData.map((item) => (
              <Disclosure key={item.title} defaultOpen={!item.finished}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-2 text-left  focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 items-center">
                      <div className="flex gap-3">
                        <div>
                          {item.finished ? (
                            <HiCheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                          ) : (
                            <span className="block w-5 h-5 border-2 border-gray-700 dark:border-gray-300 border-dashed rounded-full mr-1 mt-0.5" />
                          )}
                        </div>
                        <div>
                          <h4 className="text-md font-medium text-gray-700 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
                            {item.title}
                          </h4>
                          <span className="text-sm font-sm text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200">
                            {item.description}
                          </span>
                        </div>
                      </div>
                      <HiOutlineChevronRight
                        className={classNames(
                          open ? 'rotate-90 transform' : '',
                          'h-5 w-5 text-gray-500 dark:text-gray-400'
                        )}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-600 dark:text-gray-400 gap-1">
                      <div>{item.content}</div>
                      <div className="mt-6 mb-2">
                        {item.buttons?.map((button) => (
                          <a
                            key={button.text}
                            href={button.href}
                            className={
                              item.finished
                                ? button.classDisabled
                                : button.class
                            }
                            disabled={item.finished}
                          >
                            {button.text}
                          </a>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
