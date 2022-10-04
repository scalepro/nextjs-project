import { classNames } from '@/services/functions';
import { HiCheck, HiX, HiSpeakerphone } from 'react-icons/hi';

export default function Toast({ type = 'default', title, toast, id }) {
  return (
    <div
      id={'toast-' + type}
      className={classNames(
        type == 'success'
          ? 'text-gray-50 bg-green-600 dark:text-gray-200 dark:bg-green-700 dark:ring-green-700'
          : type == 'error'
          ? 'text-gray-50 bg-red-600 dark:text-gray-200 dark:bg-red-800 dark:ring-red-800'
          : 'text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-700 dark:ring-gray-600',
        'rounded-lg shadow-lg flex items-center px-4 py-3 mb-4 w-full max-w-xs pointer-events-auto ring-1 ring-black ring-opacity-5'
      )}
      role="alert"
    >
      <div
        className={classNames(
          type == 'success'
            ? 'text-green-600 bg-green-50 dark:bg-gray-100 dark:text-green-700'
            : type == 'error'
            ? 'text-red-600 bg-red-50 dark:bg-gray-100 dark:text-red-800'
            : 'text-gray-700 bg-gray-300 dark:bg-gray-200 dark:text-gray-700',
          'inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-full'
        )}
      >
        {type == 'success' ? (
          <HiCheck className="w-5 h-5" />
        ) : type == 'error' ? (
          <HiX className="w-5 h-5" />
        ) : (
          <HiSpeakerphone className="w-5 h-5" />
        )}

        <span className="sr-only">Ícone</span>
      </div>
      <div className="ml-4 text-sm font-normal">{title}</div>
      <button
        type="button"
        className={classNames(
          type == 'success'
            ? 'text-gray-100 hover:text-gray-100 focus:ring-gray-300 dark:text-gray-300 dark:hover:text-gray-200'
            : type == 'error'
            ? 'text-gray-100 hover:text-gray-100 focus:ring-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            : 'text-gray-600 hover:text-gray-700 focus:ring-gray-300 dark:text-gray-400 dark:hover:text-gray-300',
          'ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8'
        )}
        aria-label="Fechar"
        onClick={() => toast.dismiss(id)}
      >
        <span className="sr-only">Fechar</span>
        <HiX className="w-5 h-5" />
      </button>
    </div>
  );
}
