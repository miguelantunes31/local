import * as React from "react";
import Todos from "./Todos";
import AddForm from "./AddForm";
import Droppable from "./drops/drops";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

export interface TodoItem {
  title: string;
}

export default function List() {
  const [items, setItems] = React.useState<TodoItem[]>([]);

  const addTodo = (title: string) => {
    setItems([...items, { title }]);
  };

  return (
    <Box width="55%" bgcolor="grey.300" p={1} my={0.5}>
      <Grid container>
        <Grid item>
          <Droppable id="dr1">
            <Container maxWidth="lg">
              <AddForm addTodo={addTodo} />
              <Todos todos={items}/>
            </Container>
          </Droppable>
        </Grid>
        <Grid item>
          <Droppable id="dr1">
            <Container maxWidth="sm">
              <Typography
                style={{
                  backgroundColor: "grey",
                  height: "50vh",
                  width: "50vh",
                }}
              ></Typography>
            </Container>
          </Droppable>
        </Grid>
      </Grid>
    </Box>
  );
}
