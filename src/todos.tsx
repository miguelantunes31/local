import * as React from "react";
import { TextField, Button, Box, Typography, Grid, Container, Paper, makeStyles } from "@material-ui/core";
import { List, AutoSizer, ListRowProps } from "react-virtualized";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export interface TodoItem {
    title: string,
    id: number
}

export interface TodoItem2 {
    title: string,
    id: number
}
const listHeight = 600;
const rowHeight = 50;
const rowWidth = 800;

const useStyles = makeStyles((theme) => ({
    paper: {
        height: 400,
        width: 200,
        backgroundColor: "red"
    },

    grid: {
        height: 500,
        width: "100%",
    },
    box: {
        backgroundColor: "white",
        height: 50,
        textAlign: "left"
    }
}));

const Todos = () => {

    const classes = useStyles();

    const [items, setItems] = React.useState<TodoItem[]>([]);
    const [items2, setItems2] = React.useState<TodoItem2[]>([]);
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

    function renderRow({ key, index }: ListRowProps) {
        return (
            <Draggable draggableId={key} index={index}>
                {(provided, ) => (
                    <Paper className={classes.box} {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>
                        {items[index].title}<Button onClick={() => eleminate(index)}>Eliminar</Button>
                    </Paper>
                )}
            </Draggable>
        );
    }


    const onDragEnd = (result: any) => {
        const { destination, source, draggableId } = result;


        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        




    };

    return (

        <Grid className={classes.grid}>
            <Box >

                <TextField label="todo" value={newTodo} onChange={handleChange} />
                <Button onClick={handleSubmit}>Add Todo</Button>
            </Box>
            <Grid container>
                <DragDropContext onDragEnd={onDragEnd} >
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (

                            <Paper innerRef={provided.innerRef} {...provided.droppableProps} className={classes.paper}
                                ref={provided.innerRef}
                            >
                                {items.map((item, index) => (
                                    <Draggable draggableId={item.title} index={index} key={index}>
                                        {(provided) => (
                                            <Paper key={item.id} className={classes.box} {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>

                                                <Typography key={item.id} >
                                                    {item.title}<Button onClick={() => eleminate(index)}>Eliminar</Button>
                                                </Typography>
                                            </Paper>
                                        )}
                                    </Draggable>
                                ))}

                                {provided.placeholder}


                            </Paper>
                        )}
                    </Droppable>
                    <Droppable droppableId="droppable2">
                        {(provided, snapshot) => (
                            <Paper innerRef={provided.innerRef} {...provided.droppableProps} className={classes.paper}
                                ref={provided.innerRef}>
                                {items2.map((item2, index) =>
                                    <Draggable draggableId={index.toString()} index={index} key={index}>
                                        {(provided) => (
                                            <Paper key={item2.id} className={classes.box} {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>

                                                <Typography key={item2.id} >
                                                    {item2.title}<Button onClick={() => eleminate(index)}>Eliminar</Button>
                                                </Typography>
                                            </Paper>
                                        )}
                                    </Draggable>
                                )}
                                {provided.placeholder}
                            </Paper>
                        )}
                    </Droppable>
                </DragDropContext>

            </Grid>

        </Grid>
    );
};

export default Todos;


/*

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










                <AutoSizer>
                                    {({ width, height }) => {
                                        return (
                                            <List
                                                width={width}
                                                height={height}
                                                rowHeight={50}
                                                rowRenderer={renderRow}
                                                rowCount={items.length}
                                            />

                                        );
                                    }}

                                </AutoSizer>



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


*/