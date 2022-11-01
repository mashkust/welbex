import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '@mui/material';

function PaginationButtons() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    setPage(Number(searchParams.get('page')));
  },[searchParams]);

  const setPageHandler = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setSearchParams({ page: String(value) });
  }


  return (
    <Stack spacing={2}>
      <Pagination page={page} count={5} hidePrevButton hideNextButton onChange={setPageHandler} />
    </Stack>
  );
}

export default PaginationButtons;