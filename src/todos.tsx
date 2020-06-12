import * as React from "react";
import { TextField, Button, Box, Typography, Grid, Container, Paper, makeStyles } from "@material-ui/core";
import { List, AutoSizer, ListRowProps } from "react-virtualized";
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

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

    const eleminate = (index: number, array: number) => {

        if (array === 1) {
            const newItems = [...items]
            newItems.splice(index, 1)
            setItems(newItems)
        } else {
            const newItems2 = [...items2]
            newItems2.splice(index, 1)
            setItems2(newItems2)
        }




    }
    function rowRenderer({ key, index }: ListRowProps) {
        return (

            <Draggable draggableId={index + " " + items[index].title} index={0 + index} key={index * Math.random()}>
                {(provided) => (

                    <Paper key={key} className={classes.box} {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>

                        <Typography key={items[index].id} >
                            {items[index].title}<Button onClick={() => eleminate(index, 1)}>Eliminar</Button>
                        </Typography>
                    </Paper>
                )}
            </Draggable>

        );
    }

    function rowRenderer2({ key, index }: ListRowProps) {
        return (

            <Draggable draggableId={index + " " + items2[index].title} index={0 + index} key={index * Math.random()}>
                {(provided) => (

                    <Paper key={key} className={classes.box} {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>

                        <Typography key={items2[index].id} >
                            {items2[index].title}<Button onClick={() => eleminate(index, 2)}>Eliminar</Button>
                        </Typography>
                    </Paper>
                )}
            </Draggable>

        );
    }


    const onDragEnd = (result: DropResult): void => {
        const { destination, source, draggableId } = result;


        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        let index: string = "";

        for (let i = 0; i <= draggableId.length; i++) {
            if (draggableId[i] === " ") {
                index = draggableId.slice(0, i)
                i = draggableId.length
                console.log(i, index)
            }
        }


        if (source.droppableId === "droppable") {
            if (destination.droppableId === "droppable2") {

                const newItems = [...items]

                setItems2([...items2, newItems[parseInt(index)]]);
                newItems.splice(parseInt(index), 1)
                setItems(newItems)

            } else {
                return;
            }
        } else if (source.droppableId === "droppable2") {
            if (destination.droppableId === "droppable") {
                const newItems2 = [...items2]

                setItems([...items, newItems2[parseInt(index)]]);
                newItems2.splice(parseInt(index), 1)
                setItems2(newItems2)
            } else {
                return;
            }
        } else {
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
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable" renderClone={(provided, snapshot, rubric) => (
                        <Paper className={classes.box}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                        >
                            {items[rubric.source.index].title}
                        </Paper>
                    )}>
                        {(provided) => (
                            <Paper innerRef={provided.innerRef} {...provided.droppableProps} className={classes.paper}
                                ref={provided.innerRef}
                            >

                                <AutoSizer>
                                    {({ height, width }) => (
                                        <List
                                            width={width}
                                            height={height}
                                            rowCount={items.length}
                                            rowHeight={50}
                                            rowRenderer={rowRenderer}
                                        />
                                    )}
                                </AutoSizer>

                                {provided.placeholder}


                            </Paper>
                        )}
                    </Droppable>
                    <Droppable droppableId="droppable2" renderClone={(provided, snapshot, rubric) => (
                        <Paper className={classes.box}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                        >
                            {items2[rubric.source.index].title}
                        </Paper>
                    )}>
                        {(provided) => (
                            <Paper innerRef={provided.innerRef} {...provided.droppableProps} className={classes.paper}
                                ref={provided.innerRef}>
                                <AutoSizer>
                                    {({ height, width }) => (
                                        <List
                                            width={width}
                                            height={height}
                                            rowCount={items2.length}
                                            rowHeight={50}
                                            rowRenderer={rowRenderer2}
                                        />
                                    )}
                                </AutoSizer>
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