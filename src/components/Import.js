import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
  Paper,
} from "@material-ui/core";
import ImportActionMenu from "./ImportActionMenu";

const Import = (props) => {
  // Hide table header until the import button is clicked (lines 17, 19, 24, 41, 46)
  const [showTable, setShowTable] = React.useState(false);

  const displayTable = () => {
    props.fetchMakes();
    setShowTable(true);
  };

  const DisplayTableHead = () => {
    return (
      <TableHead id="import-table-head">
        <TableRow>
          <TableCell align="right">ID</TableCell>
          <TableCell align="left">Make</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
    );
  };

  const DefaultDisplay = () => {
    return (
      <h3 className="import-default-display">
        Click the import button above to show all current makes.
      </h3>
    );
  };

  return (
    <div className="import-container">
      <Container component="Paper">
        <div className="import-header">
          <h2>Total Makes: {props.makes.length}</h2>
          <Button
            variant="contained"
            color="primary"
            className="import-btn"
            onClick={displayTable}
          >
            Import
          </Button>
        </div>
        <Table>
          {showTable ? <DisplayTableHead /> : <DefaultDisplay />}
          <TableBody>
            {props.makes.map((make, index) => (
              <TableRow key={make.id}>
                <TableCell align="right">{make.MakeId}</TableCell>
                <TableCell align="left">{make.MakeName}</TableCell>
                <TableCell align="right">
                  <ImportActionMenu
                    deleteMake={props.deleteMake}
                    index={index}
                  ></ImportActionMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default Import;
