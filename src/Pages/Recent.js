import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(fileName, accountAddress, time, gasFee) {
  return { fileName, accountAddress, time, gasFee };
}

const rows = [
  createData('Document.pdf', '0x1234...', '2022-02-10 12:34:56', '0.012345'),
  createData('Spreadsheet.xlsx', '0x5678...', '2022-02-09 09:01:23', '0.009876'),
  createData('Presentation.pptx', '0x9abc...', '2022-02-08 03:45:01', '0.011223'),
];

export default function Recent() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Recent Documents">
        <TableHead>
          <TableRow>
            <TableCell>File Name</TableCell>
            <TableCell>Account Address</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Gas Fee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.fileName}>
              <TableCell component="th" scope="row">
                {row.fileName}
              </TableCell>
              <TableCell>{row.accountAddress}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.gasFee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
