import React from 'react';
import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';
import {Button} from '@material-ui/core'

const Box = styled('div')(compose(spacing,palette));


export default function DashBoard () {
    return (
        <Box
            color="Blue" bgcolor="lightBlue" p={1}
        >
            <table>       
                <td>
                    <Button variant="outlined" color="secondary" >
                        Nova Lista
                    </Button>
                </td>
                <td>
                    <Button variant="contained" color="secondary">
                        Apagar Lista
                    </Button>
                </td>
            </table>
        </Box>
    );
}
