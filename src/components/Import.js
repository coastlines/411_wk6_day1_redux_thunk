import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, Paper } from '@material-ui/core'

const Import = (props) => {
    // fill out this component

    return (
        <div>
            <p>Import Component</p>
            <Container component='Paper'>
                <Button variant='contained' color='primary' onClick={props.fetchMakes}>Import</Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Make</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.makes.map((make) => (
                            <TableRow key={make.id}>
                                <TableCell component="th" scope="row">
                                    {make.MakeName}
                                </TableCell>
                                <TableCell align="right">{make.MakeId}</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>        
        </div>
       
    )
}

export default Import