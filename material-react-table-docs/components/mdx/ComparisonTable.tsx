import { Box, Link } from '@mui/material';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import React from 'react';

const columns: MRT_ColumnDef<typeof data[0]>[] = [
  {
    accessorKey: 'library',
    header: 'Library',
    size: 150,
    Cell: ({ cell, row }) => (
      <Link
        href={row.original.libraryLink}
        target="_blank"
        rel="noreferrer"
        sx={(theme) => ({
          color:
            cell.getValue() === 'Material React Table'
              ? theme.palette.primary.main
              : cell.getValue() === 'TanStack Table'
              ? theme.palette.secondary.light
              : theme.palette.text.primary,
          fontWeight: 'bold',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        })}
      >
        <>{cell.getValue()}</>
      </Link>
    ),
  },
  {
    accessorKey: 'freeOrLicensed',
    header: 'Free or Licensed',
    size: 100,
  },
  {
    accessorKey: 'bundleSize',
    header: 'Bundle Size',
    Cell: ({ cell, row }) => (
      <Box sx={{ display: 'flex', alignContent: 'center', gap: '1ch' }}>
        {`${cell.getValue<string>()} KB`}
        <a
          href={row.original.bundlePhobiaLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt={cell.getValue<string>()}
            loading="lazy"
            src={row.original.bundlePhobiaImg}
          />
        </a>
      </Box>
    ),
    size: 200,
    sortDescFirst: false,
  },
  {
    accessorKey: 'description',
    header: 'Description',
    size: 500,
  },
];

const data = [
  {
    library: 'Material React Table',
    libraryLink: '#',
    freeOrLicensed: 'Free MIT',
    bundleSize: 37,
    bundlePhobiaImg:
      'https://badgen.net/bundlephobia/minzip/material-react-table@latest?color=blue',
    bundlePhobiaLink:
      'https://bundlephobia.com/package/material-react-table@latest',
    description:
      'Built on top of TanStack Table V8 and Material UI V5, Material React Table is a batteries-included react table library that attempts to provide all the table features you need while trying to stay as highly performant and lightweight as possible. Customization is treated as a top priority to let you override any styles you need to change.',
  },
  {
    library: 'TanStack Table',
    libraryLink: 'https://tanstack.com/table',
    freeOrLicensed: 'Free MIT',
    bundleSize: 13,
    bundlePhobiaImg:
      'https://badgen.net/bundlephobia/minzip/@tanstack/react-table@latest',
    bundlePhobiaLink:
      'https://bundlephobia.com/package/@tanstack/react-table@latest',
    description:
      'TanStack Table (formerly React Table) is a lightweight Headless UI library for building powerful tables & datagrids. No CSS or Components included. You use logic from the useReactTable hook to build your own table components. No Batteries Included, but you get total control of your markup and styles. (Material React Table is built on top of TanStack Table)',
  },
  {
    library: 'Material Table',
    libraryLink: 'https://material-table.com',
    freeOrLicensed: 'Free MIT',
    bundleSize: 185,
    bundlePhobiaImg:
      'https://badgen.net/bundlephobia/minzip/material-table?color=red',
    bundlePhobiaLink: 'https://bundlephobia.com/package/material-table@latest',
    description:
      'A once popular Material UI component for creating MUI tables that includes tons of features. However, it has a very large bundle size and outdated and insecure dependencies. It is mostly unmaintained now, but did recently release a version that was somewhat compatible with Material UI V5.',
  },
  {
    library: 'MUI X Data Grid',
    libraryLink: 'https://mui.com/x/react-data-grid/',
    freeOrLicensed: 'Free MIT',
    bundleSize: 91,
    bundlePhobiaImg:
      'https://badgen.net/bundlephobia/minzip/@mui/x-data-grid@latest?color=orange',
    bundlePhobiaLink:
      'https://bundlephobia.com/package/@mui/x-data-grid@latest',
    description:
      'Directly from Material UI. The MIT version does not include the full suite of features you might need, but it provides a high quality table that is easy to use.',
  },
  {
    library: 'MUI X Data Grid Pro/Premium',
    libraryLink: 'https://mui.com/store/items/mui-x-premium/',
    freeOrLicensed: 'Paid License',
    bundleSize: 105,
    bundlePhobiaImg:
      'https://badgen.net/bundlephobia/minzip/@mui/x-data-grid-pro?color=orange',
    bundlePhobiaLink:
      'https://bundlephobia.com/package/@mui/x-data-grid-pro@latest',
    description:
      'One of the best Material UI Data Grid options available. It includes the full suite of features you may need, but it requires a paid license.',
  },
];

const ComparisonTable = () => {
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enablePagination={false}
      enableColumnActions={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
    />
  );
};

export default ComparisonTable;
