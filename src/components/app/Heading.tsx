import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HiHome, HiChevronRight } from 'react-icons/hi';

export default function Heading({ page }) {
  const [pageData, setPageData] = useState(page);

  useEffect(() => {
    //console.log(props);
    setPageData(page);
  }, [page]);

  return (
    <>
      <nav className="flex mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <HiHome className="mr-2 w-4 h-4" />
              App
            </span>
          </li>
          {pageData.breadcrumb.map((item) => (
            <li key={item.title}>
              <div className="flex items-center">
                <HiChevronRight className="w-5 h-5 text-gray-400" />
                {item.href ? (
                  <Link href={item.href}>
                    <a
                      href="#"
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      {item.title}
                    </a>
                  </Link>
                ) : (
                  <span className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                    {item.title}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-800 dark:text-gray-50">
        {pageData.pageTitle ? pageData.pageTitle : pageData.title}
      </h1>
      {pageData.pageSubTitle && (
        <h4 className="mb-4 text-md font-normal tracking-tight leading-none text-gray-600 dark:text-gray-400">
          {pageData.pageSubTitle}
        </h4>
      )}
    </>
  );
}
