import React, { useCallback } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CriptoTable = (props) => {
  const formateSymbolName = useCallback(
    (name) => {
      const delT = name.replace(/^t/, "");
      const addChar = delT
        .split(props.actibeTabIndex)
        .join(`/${props.actibeTabIndex}`);

      return addChar;
    },
    [props.actibeTabIndex]
  );

  const formateChange = (row) => {
    return (row.data[5] * 100).toFixed(2);
  };

  const formate = (data) => {
    const checkLength = data.toString().slice(".");
    if (checkLength.length > 5) {
      return checkLength.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <TableContainer className="table_container" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table_cell">SYMBOL</TableCell>
            <TableCell className="table_cell" align="right">
              LAST PRICE
            </TableCell>
            <TableCell className="table_cell" align="right">
              24H CHANGE
            </TableCell>
            <TableCell className="table_cell" align="right">
              24H HIGH
            </TableCell>
            <TableCell className="table_cell" align="right">
              24H LOW
            </TableCell>
            <TableCell className="table_cell" align="right">
              24H VOLUME
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.criptoTableData.map((row) => {
            const name = formateSymbolName(row.symbol);
            const slice = name.split('/')
            return (
              <TableRow
                className="table_row"
                key={row.symbol}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => {
                  window.open(`https://trading.bitfinex.com/t/${slice[0]}:${slice[1]}`);
                }}
              >
                <TableCell className="table_cell" component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell className="table_cell" align="right">
                  {formate(row.data[0])}
                </TableCell>
                <TableCell className={`table_cell ${formateChange(row) > 0 ? 'table_cell_green' : 'table_cell_red'}`} align="right">
                  {formateChange(row)}%
                </TableCell>
                <TableCell className="table_cell" align="right">
                  {formate(row.data[8])}
                </TableCell>
                <TableCell className="table_cell" align="right">
                  {formate(row.data[9])}
                </TableCell>
                <TableCell className="table_cell" align="right">
                  {row.data[7]} {props.actibeTabIndex}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CriptoTable;
