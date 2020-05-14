import Lista from './components/List';
import { useState } from 'react';
import * as React from "react";

import { Button, Typography, Grid, Divider, Box } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';


//const BBox = styled('div')(compose(spacing,palette));

const useStyles = makeStyles(() => ({
  root: {}
}))

interface ILista {
  name: string
}
export default function App() {
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
        <div key={`${item.name}-${index}`}>
          <Typography>
            Lista {index}
          </Typography>
          <Lista />
          </div>
      ))}
    </>
  );
}








