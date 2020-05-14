import Lista from './components/List';
import { useState, useEffect } from 'react';
import * as React from "react";

import Virtualize from './components/virtalize'



import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';
import { Button, Typography, Grid, Divider } from '@material-ui/core'

import Box from '@material-ui/core/Box';


import { makeStyles } from '@material-ui/core/styles';
import { render } from 'react-dom';


//const BBox = styled('div')(compose(spacing,palette));

const useStyles = makeStyles(() => ({
  root: {}
}))

interface ILista {
  name: string
}
export default function App() {
  const classes = useStyles()
  const [lista, setListas] = useState<ILista[]>([])

  const onNewListClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    if (lista.length === 5) {
      return alert("sem espaço para novas listas")
    }
    setListas([...lista, { name: "nome" }])
  }

  return (
    <>
      <Box
        color="Blue" bgcolor="lightBlue" p={1}
      >
        <Grid container >
          <Grid item>

            <Button variant="outlined" color="secondary" onClick={onNewListClick}>
              Nova Lista
              </Button>

          </Grid>
        </Grid>
      </Box>
      <Divider />
      {lista.map((item, index) => (
        <Box width="5%" bgcolor="grey.300" p={1} my={0.3} key={item.name + index} >
          <Typography >
            Lista {index}
          </Typography>
          <Lista />
        </Box>
      ))}
    </>
  );
}








