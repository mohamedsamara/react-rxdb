import { CloseIcon } from 'components/Icons';
import { ChangeEvent, MouseEvent, useState } from 'react';

interface SearchFormProps {
  placeholder: string;
  onSearchSubmit: (search: string) => void;
}

const Search = (props: SearchFormProps) => {
  const [search, setSerach] = useState('');
  const { placeholder, onSearchSubmit } = props;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSerach(e.target.value);
  };

  const handleOnClear = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSerach('');
  };

  const handleSearchSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search.length <= 0) return;
    onSearchSubmit(search);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="flex items-center py-2 border-b border-gray-500">
        <input
          className="w-full px-2 py-1 mr-3 text-lg leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
          type="text"
          placeholder={placeholder}
          aria-label={placeholder}
          value={search}
          onChange={handleOnChange}
        />

        <button
          type="submit"
          className="flex-shrink-0 py-2 px-3 text-lg bg-[#f1c50e] rounded transition-all	duration-150 min-w-[160px]"
        >
          Search
        </button>

        {search.length > 0 && (
          <button
            type="button"
            className="flex-shrink-0 px-2 py-1 text-sm text-gray-500 border-4 border-transparent rounded hover:text-gray-800"
            onClick={handleOnClear}
          >
            <CloseIcon />
          </button>
        )}
      </div>
    </form>
  );
};

export default Search;
