import { Tooltip } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HiSun, HiOutlineMoon } from 'react-icons/hi';

const isDark = () =>
  (localStorage && localStorage.theme === 'dark') ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches);

const getTheme = (isDark) => (isDark ? 'dark' : 'light');

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    localStorage.theme = getTheme(!darkMode);
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    setDarkMode(isDark());
  }, []);

  const darkModeActive =
    process.browser && document.documentElement.classList.contains('dark');
  return (
    <>
      <Tooltip content={darkModeActive ? 'Tema claro' : 'Tema escuro'}>
        <button
          className="ml-2 hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded-lg text-gray-400 hover:text-gray-500 dark:hover:text-white focus:outline-none"
          onClick={toggleMode}
        >
          <span className="sr-only">Mudar cor</span>
          {darkModeActive ? (
            <HiSun className="h-6 w-6" />
          ) : (
            <HiOutlineMoon className="h-6 w-6" />
          )}
        </button>
      </Tooltip>
    </>
  );
}
