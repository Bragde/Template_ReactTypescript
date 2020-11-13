import { Column, useSortBy, useTable } from 'react-table';
import { PubOverview } from '../types/types';
import { Table } from 'semantic-ui-react';
import React from 'react';

function PubOverviewTable({
  columns,
  data,
}: {
  columns: Column<PubOverview>[];
  data: PubOverview[];
}): JSX.Element {
  // Use the state and functions returned from useTable to build UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
  );

  // Render the UI for table
  return (
    <Table {...getTableProps()}>
      <Table.Header>
        {headerGroups.map((headerGroup) => (
          <Table.Row {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Table.HeaderCell
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render('Header')}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        ))}
      </Table.Header>
      <Table.Body {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Table.Row>
              {row.cells.map((cell) => (
                <Table.Cell {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </Table.Cell>
              ))}
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default PubOverviewTable;
