import React from 'react';
import { useTable } from 'react-table';
import uuid from 'react-uuid';
import tw, { css } from 'twin.macro';

const Table = ({ columns, data }) => {
  const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
    const [value, setValue] = React.useState(globalFilter);
    const onChange = () => setGlobalFilter(value || undefined);

    return (
      <span>
        Search:{' '}
        <input
          value={value || ''}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
        />
      </span>
    );
  };

  const {
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  const styles = {
    header: () => [tw`text-2xl font-bold leading-tight text-gray-600 mb-2.5`],
    table: () => [tw`border`],
    table_header: () => [tw`text-left`]
  };
  // Render the UI for your table
  return (
    <>
      <h4 css={styles.header()}>Household</h4>
      <table {...getTableProps()} css={styles.table()}>
        <thead style={{ 'text-align': 'left' }}>
          {headerGroups.map(headerGroup => (
            <tr key={uuid()} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  key={uuid()}
                  {...column.getHeaderProps()}
                  css={styles.table_header()}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr key={uuid()} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td key={uuid()} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
    </>
  );
};

export default Table;
