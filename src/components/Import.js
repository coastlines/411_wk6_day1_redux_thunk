import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, Paper } from '@material-ui/core'

const Import = (props) => {
    // fill out this component

    return (
        <div>
            <p>Import Component</p>
            <Container component='Paper'>
                <Button variant='contained' color='primary'>Import</Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Make</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </Container>        
        </div>
       
    )
}

export default Import