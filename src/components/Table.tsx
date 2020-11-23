import { Column, useSortBy, useTable } from 'react-table';
import { PubOverview } from '../types/types';
import { Icon, Table } from 'semantic-ui-react';
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
          <Table.Row
            {...headerGroup.getHeaderGroupProps()}
            key={headerGroup.id}
          >
            {headerGroup.headers.map((column) => (
              <Table.HeaderCell
                {...column.getHeaderProps(column.getSortByToggleProps())}
                key={column.id}
              >
                {column.render('Header')}
                {column.isSorted && (
                  <Icon
                    name={column.isSortedDesc ? 'caret down' : 'caret up'}
                    size="large"
                  />
                )}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        ))}
      </Table.Header>
      <Table.Body {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Table.Row key={row.id}>
              {row.cells.map((cell, index) => (
                <Table.Cell {...cell.getCellProps()} key={index}>
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
