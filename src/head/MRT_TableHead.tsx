import React, { FC, RefObject } from 'react';
import { TableHead } from '@mui/material';
import { MRT_TableHeadRow } from './MRT_TableHeadRow';
import type { MRT_TableInstance } from '..';

interface Props {
  tableInstance: MRT_TableInstance;
  tableContainerRef: RefObject<HTMLDivElement>;
}

export const MRT_TableHead: FC<Props> = ({ tableContainerRef, tableInstance }) => {
  const {
    getHeaderGroups,
    options: { muiTableHeadProps },
  } = tableInstance;

  const tableHeadProps =
    muiTableHeadProps instanceof Function
      ? muiTableHeadProps({ tableInstance })
      : muiTableHeadProps;

  return (
    <TableHead {...tableHeadProps}>
      {getHeaderGroups().map((headerGroup) => (
        <MRT_TableHeadRow
          headerGroup={headerGroup as any}
          key={headerGroup.id}
          tableContainerRef={tableContainerRef}
          tableInstance={tableInstance}
        />
      ))}
    </TableHead>
  );
};
