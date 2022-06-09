import React, { FC, RefObject } from 'react';
import { Table } from '@mui/material';
import { MRT_TableHead } from '../head/MRT_TableHead';
import { MRT_TableBody } from '../body/MRT_TableBody';
import { MRT_TableFooter } from '../footer/MRT_TableFooter';
import { MRT_TableInstance } from '..';

interface Props {
  tableContainerRef: RefObject<HTMLDivElement>;
  tableInstance: MRT_TableInstance;
}

export const MRT_Table: FC<Props> = ({ tableContainerRef, tableInstance }) => {
  const {
    options: {
      enableColumnResizing,
      enableRowVirtualization,
      enableColumnVirtualization,
      enableStickyHeader,
      enableTableFooter,
      enableTableHead,
      muiTableProps,
    },
  } = tableInstance;

  const tableProps =
    muiTableProps instanceof Function
      ? muiTableProps({ tableInstance })
      : muiTableProps;

  return (
    <Table
      stickyHeader={enableStickyHeader}
      {...tableProps}
      sx={{
        tableLayout:
          enableColumnResizing ||
          enableColumnVirtualization ||
          enableRowVirtualization
            ? 'fixed'
            : undefined,
        ...tableProps?.sx,
      }}
    >
      {enableTableHead && (
        <MRT_TableHead
          tableContainerRef={tableContainerRef}
          tableInstance={tableInstance}
        />
      )}
      <MRT_TableBody
        tableContainerRef={tableContainerRef}
        tableInstance={tableInstance}
      />
      {enableTableFooter && <MRT_TableFooter tableInstance={tableInstance} />}
    </Table>
  );
};
