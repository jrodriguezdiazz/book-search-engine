import React, { FunctionComponent, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import { SearchOutlined } from '@mui/icons-material';
import { mockDataOfBooks } from './mockDataOfBooks';
import { Book } from '../../Interfaces/Book';

interface Props {
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

export const SearchInput: FunctionComponent<Props> = ({ setBooks }) => {
  const valueRef = useRef<HTMLInputElement | null>(null);

  const searchBook = async () => {
    const result = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${valueRef.current?.value}&printType=books&filter=full&orderBy=relevance&maxResults=10`
    );
    const json = await result.json();
    setBooks(json.items);
  };

  return (
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
  );
};
