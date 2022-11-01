import React, { useEffect, useState, FC, Dispatch, SetStateAction } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from './api';
import Filters from './filters';
import PaginationButtons from './pagination';
import FormControlLabelPosition from './sorting';
import Table from './table';
import { Filter, mockFilter, PAGES, SortingType } from './const';
 
export interface ITableRow {
  date: string;
  name: string;
  count: number;
  distance: number;
  id: number;
}

export interface ServerTableRowsJSON {
  data: ITableRow[]
}

export const sortRows = (value: SortingType, rows: ITableRow[], setTableRows: Dispatch<SetStateAction<ITableRow[]>> ) => {
  if (value === 'count') setTableRows([...rows].sort((a, b) => a.count - b.count));
  else if (value === 'name') setTableRows([...rows].sort((a, b) => (a.name.toLowerCase() < b.name.toLocaleLowerCase()) ? 1 : -1));
  else if (value === 'distance') setTableRows([...rows].sort((a, b) => a.distance - b.distance));
  else setTableRows(rows);
}

export const filterRows = ( filterRule: Filter, rows: ITableRow[] ): ITableRow[] => {
      if (filterRule.col !=='' && filterRule.condition !=='' && filterRule.field !=='') {
        if (filterRule.condition === '>') {
          if( filterRule.col === 'count'){
            return [...rows].filter(el => el.count > Number(filterRule.field))
          } else {
            return [...rows].filter(el => el.distance > Number(filterRule.field))
          }
        }
        if (filterRule.condition === '<') {
          if( filterRule.col === 'count'){
            return [...rows].filter(el => el.count < Number(filterRule.field))
          } else {
            return [...rows].filter(el => el.distance < Number(filterRule.field))
          }
        }
        if (filterRule.condition === '=') {
          if( filterRule.col === 'count'){
            return [...rows].filter(el => el.count === Number(filterRule.field))
          } else {
            return [...rows].filter(el => el.distance === Number(filterRule.field))
          }
      }
  }
  else if (filterRule.field ===''){
    return rows;
  }
  return rows;
}

const App: FC = () => {
  const [tableRows, setTableRows] = useState<ITableRow[]>([]);
  const [newRows, setNewRows] = useState<ITableRow[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<SortingType>('');
  const [filter, setFilter] = useState<Filter >(mockFilter);

  useEffect(() => {
    const page = searchParams.get('page');
    if (!page || isNaN(Number(page)) || Number(page) > PAGES.length) {
      setSearchParams({ page: '1' })
    } else {
      if (!isNaN(Number(page))) {
        (async () => {
          const res: ServerTableRowsJSON = await api.get(`?page=${page}`);
          if (res) {
            setNewRows(res.data);
            sortRows(value, filterRows( filter,res.data) , setTableRows);
          }
        })();
      }
    }
  }, [searchParams]);

  useEffect(() => {
    sortRows(value, filterRows(filter ,newRows) , setTableRows);
  }, [value, filter]);

  return (
    <div className="App">
      <Filters {...{ setFilter, filter }} />
      <FormControlLabelPosition {...{ setValue, value }} />
      {tableRows.length > 0 && <Table {...{ tableRows }} />}
      <PaginationButtons />
    </div>
  );
}

export default App;
