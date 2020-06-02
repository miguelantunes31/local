import * as React from "react";
import { TextField, Button, Box, Typography, Grid, Container, Paper, makeStyles } from "@material-ui/core";
import { List, AutoSizer } from "react-virtualized";

export interface TodoItem {
    title: string,
    id: number
}
const listHeight = 600;
const rowHeight = 50;
const rowWidth = 800;

const useStyles = makeStyles((theme) => ({
    paper: {
        height: 399,
        width: 200,
        backgroundColor:"red"
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
        setItems([...items, { title, id: Math.random() }]);
        console.log(items)
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    };

    const eleminate = (index: number) => {
        const newItems = [...items]
        newItems.splice(index, 1)
        setItems(newItems)
    }

    const renderRow = () => {
        return (
            <Grid container>
                <Paper className={classes.paper}>
                    {items.map((item, index) => (

                        <Container key={item.id}>
                            
                            <Typography key={item.id} >
                                {item.title}<Button onClick={() => eleminate(index)}>Eliminar</Button>
                            </Typography>
                        </Container>
                    ))}
                </Paper>
                <Paper className={classes.paper}>

                </Paper>
            </Grid>
        );
    }

    return (

        <Grid className={classes.grid}>
            <Box >
                <TextField label="todo" value={newTodo} onChange={handleChange} />
                <Button onClick={handleSubmit}>Add Todo</Button>
            </Box>
            <Grid container>
                <AutoSizer>
                    {({ width, height }) => {
                        return (
                            <List
                                width={width}
                                height={400}
                                rowHeight={400}
                                rowRenderer={renderRow}
                                rowCount={items.length}
                            />
                        );
                    }}
                </AutoSizer>
            </Grid>
        </Grid>
    );
};

export default Todos;