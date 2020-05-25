import * as React from "react";
import { TextField, Button, Box, Typography, Grid, Container, Paper } from "@material-ui/core";

export interface TodoItem {
    title: string;
}

const Todos = () => {

    const [items, setItems] = React.useState<TodoItem[]>([]);
    const [newTodo, setNewTodo] = React.useState("");

    const addTodo = (title: string) => {
        setItems([...items, { title }]);
        { console.log(items) }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    };



    return (

        <Grid>
            <Box >
                <TextField label="todo" value={newTodo} onChange={handleChange} />
                <Button onClick={handleSubmit}>Add Todo</Button>
            </Box>
            <Grid container>
                <Grid>
                {items.map((item, index) => (
                    <Container key={`${item.title}-${index}`}>
                        <Typography>
                            {item.title}
                        </Typography>

                    </Container>

                ))}
                </Grid>
                <Grid>
                    ola
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Todos;