import * as React from "react";
import { TextField, Button, Box, Grid, Paper, makeStyles, ListItem, ListItemText } from "@material-ui/core";
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import DeleteIcon from '@material-ui/icons/Delete';
import { FixedSizeList } from 'react-window';

export interface TodoItem {
    title: string,
    id: number
}

export interface TodoItem2 {
    title: string,
    id: number
}

const useStyles = makeStyles(() => ({
    paper: {
        height: 400,
        width: 200,
        backgroundColor: "lightgrey"
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
        if(title!==""){
        setItems([...items, { title, id: Math.random() }]);
        console.log(items)}
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

    function renderRow(props: any ) {
        
        const { index } = props;

        
        return (
            <Draggable draggableId={index + "/" + Math.random()} index={0 + index} key={index * Math.random()}>
                {(provided) => (
                    <ListItem divider  className={classes.box} {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>
                        <ListItemText  primary={items[index].title} /><Button onClick={() => eleminate(index, 1)}><DeleteIcon /></Button>
                    </ListItem>
                )}
            </Draggable>


        );
    }

    function renderRow2(props: any) {

        const { index } = props;

        return (

            <Draggable draggableId={index + "/" + Math.random()} index={0 + index} key={index}>
                {(provided) => (
                    <ListItem divider className={classes.box} {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>
                        <ListItemText primary={items2[index].title} /><Button onClick={() => eleminate(index, 2)}><DeleteIcon /></Button>
                    </ListItem>
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

        const index: string = draggableId.split("/")[0]
        // for (let i = 0; i <= draggableId.length; i++) {
        //     if (draggableId[i] === " ") {
        //         index = draggableId.slice(0, i)
        //         i = draggableId.length
        //     }
        // }


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


        <Grid container>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable" renderClone={(provided, snapshot, rubric) => (
                    <ListItem divider className={classes.box}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <ListItemText primary={items[rubric.source.index].title} />
                        <Button><DeleteIcon /></Button>
                    </ListItem>
                )}>
                    {(provided) => (
                        <Grid item xs={6} innerRef={provided.innerRef} {...provided.droppableProps} className={classes.paper}
                            ref={provided.innerRef}
                        >
                            <Box >
                                <TextField label="todo" value={newTodo} onChange={handleChange} />
                                <Button onClick={handleSubmit}>Add Todo</Button>
                            </Box>

                            <FixedSizeList height={350} width="100%" itemSize={50} itemCount={items.length} >
                                {renderRow}
                            </FixedSizeList>


                            {provided.placeholder}


                        </Grid>
                    )}
                </Droppable>
                <Droppable droppableId="droppable2" renderClone={(provided, snapshot, rubric) => (
                    <ListItem divider className={classes.box}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <ListItemText primary={items2[rubric.source.index].title} />
                    <Button><DeleteIcon /></Button>
                </ListItem>
                )}>
                    {(provided) => (
                        <Grid item xs={6} innerRef={provided.innerRef} {...provided.droppableProps} className={classes.paper}
                            ref={provided.innerRef}>
                            <FixedSizeList height={400} width="100%" itemSize={50} itemCount={items2.length} >
                                {renderRow2}
                            </FixedSizeList>
                            {provided.placeholder}
                        </Grid>
                    )}
                </Droppable>
            </DragDropContext>

        </Grid>

    );
};

export default Todos;

/*
                                <AutoSizer>
                                    {({ height, width }) => (
                                        <List
                                            width={width}
                                            height={height-46}
                                            rowCount={items.length}
                                            rowHeight={50}
                                            rowRenderer={rowRenderer}
                                        />
                                    )}
                                </AutoSizer>


*/