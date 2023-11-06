import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

const data = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Sara',
    age: 25,
  },
];

export default function ReactTable() {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        muiTableHeadCellProps: { style: { color: 'green' } }, 
      },
      {
        accessorFn: (originalRow) => originalRow.age,
        id: 'age',
        header: 'Age',
        Header: <i style={{ color: 'red' }}>Age</i>, 
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true, 
    enableColumnOrdering: true,
    enableGlobalFilter: false,
  });

  return <MaterialReactTable table={table} className="react-table" />;
}