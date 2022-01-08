import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useRef,
  useState,
} from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { mockDataOfBooks } from './mockDataOfBooks';
import { Book } from '../../Interfaces/Book';
import { Loading } from '../Loading/Loading';

interface Props {
  setBooks: Dispatch<SetStateAction<Book[]>>;
}

export const SearchInput: FunctionComponent<Props> = ({ setBooks }) => {
  const [isLoading, setIsLoading] = useState(false);
  const valueRef = useRef<HTMLInputElement | null>(null);

  const searchBook = async () => {
    if (valueRef.current?.value === '') {
      return;
    }
    setIsLoading(true);
    setBooks([]);
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${valueRef.current?.value}&printType=books&filter=full&orderBy=relevance&maxResults=12`
    );
    const json = await response.json();
    setIsLoading(false);

    setBooks(json.items);
  };

  return (
    <div>
      <Stack spacing={2} sx={{ margin: '7% auto' }}>
        <Autocomplete
          freeSolo
          disableClearable
          options={mockDataOfBooks.map((book) => book.volumeInfo.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search a book 🔍 📚"
              inputRef={valueRef}
              InputProps={{
                ...params.InputProps,
                type: 'search',
                endAdornment: (
                  <IconButton onClick={searchBook}>
                    <SearchOutlined />
                  </IconButton>
                ),
              }}
            />
          )}
        />
      </Stack>
      {isLoading && <Loading titleBook={valueRef.current?.value} />}
    </div>
  );
};
