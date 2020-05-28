import * as React from "react";
import { TextField, Button, Box, Typography, Grid, Container, Paper, makeStyles } from "@material-ui/core";

export interface TodoItem {
    title: string;
}

const useStyles = makeStyles((theme) => ({
    paper: {
        height: 140,
        width: 100
    },

    grid: {
        height: 500,
        width: "100%",
    }
}));

const Todos = () => {

    const classes = useStyles();

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

        <Grid className={classes.grid}>
            <Box >
                <TextField label="todo" value={newTodo} onChange={handleChange} />
                <Button onClick={handleSubmit}>Add Todo</Button>
            </Box>
            <Grid container>
                <Paper className={classes.paper}>
                    {items.map((item, index) => (
                        <Container key={`${item.title}-${index}`}>
                            <Typography>
                                {item.title}
                            </Typography>
                        </Container>
                    ))}
                </Paper>
                <Paper className={classes.paper}>

                </Paper>
            </Grid>
        </Grid>
    );
};

export default Todos;