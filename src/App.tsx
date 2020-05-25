import * as React from "react";
import { Grid, Button, Menu, MenuItem, TextField, Input, Typography, Box, Divider } from '@material-ui/core';
import { useState } from "react";
import Todos from "./todos";

interface IList {
  name: string
}



export default function App() {

  let texto: string = "ola"

  const [anchorEl, setAnchorEl] = useState(null);
  const [newList, setNewList] = useState("");
  const [list, setLists] = useState<IList[]>([])


  const handleClick = (event: { currentTarget: React.SetStateAction<any>; }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(null);
    setNewList("")
    event.preventDefault()
    if (list.length === 5) {
      return alert("sem espaço para novas listas")
    } else if (newList !== "") {
      addList(newList);
      setNewList("");
    } else {
      return alert("Introduza um titulo")
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewList(e.target.value);
  };

  const addList = (name: string) => {
    setLists([...list, { name }]);
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
            <TextField id="standard-basic" value={newList} onChange={handleChange} />
            <Button onClick={handleClose}>Adicionar titulo</Button>
          </MenuItem>
        </Menu>
      </Grid>
      <Grid>
        {list.map((item, index) => (
          <Box key={`${item.name}-${index}`}>
            <Typography>
              {item.name} {index + 1} 
            </Typography>
            <Todos/> 
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}
