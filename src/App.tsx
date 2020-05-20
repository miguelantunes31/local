import * as React from "react";
import { Grid, Button, Menu, MenuItem, TextField, Input, Typography, Box, Divider } from '@material-ui/core';
import { useState } from "react";
import Teste from "./teste";

interface IList {
  name: string
}


export default function App() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [newList, setNewList] = useState("");
  const [list, setLists] = useState<IList[]>([])

  let texto: string = "Lista"

  const handleClick = (event: { currentTarget: React.SetStateAction<any>; }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(null);
    setNewList("")
    event.preventDefault()
    if (list.length === 5) {
      return alert("sem espaço para novas listas")
    }
    setLists([...list, { name: "nome" }])

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewList(e.target.value);
  };


  return (

    <Grid>
      <Grid container justify="center" >

        <Button variant="contained" color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Adicionar Lista
        </Button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem >
            <Input type="text" value={newList} onChange={handleChange} /><Button onClick={handleClose}>Add Todo</Button>
          </MenuItem>
        </Menu>

      </Grid>
      <Grid >
        {list.map((item, index) => (
          <Box key={`${item.name}-${index}`}>
            <Typography>
              {texto} {index + 1}
            </Typography>
          </Box>
        ))}
        <Teste/>
      </Grid>
    </Grid>

  );
}








