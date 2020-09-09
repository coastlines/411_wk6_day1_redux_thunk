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
  return (
    <div>
      <Container component="Paper">
        <h2>Total Makes: {props.makes.length}</h2>
        <Button variant="contained" color="primary" onClick={props.fetchMakes}>
          Import
        </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Make</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.makes.map((make, index) => (
              <TableRow key={make.id}>
                <TableCell align="right">{make.MakeId}</TableCell>
                <TableCell align="right">{make.MakeName}</TableCell>
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
