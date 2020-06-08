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

    function renderRow({ key, index }: ListRowProps) {
        return (
            <Draggable draggableId={key} index={index}>
                {(provided, ) => (
                    <Paper className={classes.box} {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>
                        {items[index].title}<Button onClick={() => eleminate(index, 1)}>Eliminar</Button>
                    </Paper>
                )}
            </Draggable>
        );
    }


    function mostraIndex (index:number) {
        return index
    }


    const onDragEnd = (result:DropResult):void => {
        const { destination, source, draggableId } = result;


        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        let index:string="";

                for(let i=0;i<=draggableId.length;i++){
                    if(draggableId[i]===" "){
                        index=draggableId.slice(i+1,draggableId.length)
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
        }else if(source.droppableId==="droppable2"){
            if (destination.droppableId === "droppable") {
                const newItems2 = [...items2]

                setItems([...items, newItems2[parseInt(index)]]);
                newItems2.splice(parseInt(index), 1)
                setItems2(newItems2)
            }else{
                return;
            }
        }else{
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
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (

                            <Paper innerRef={provided.innerRef} {...provided.droppableProps} className={classes.paper}
                                ref={provided.innerRef}
                            >
                                {items.map((item, index) => (
                                    <Draggable draggableId={item.title+" "+index} index={0+index} key={index * Math.random()}>
                                        {(provided) => (
                                            
                                            <Paper key={item.id} className={classes.box} {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>

                                                <Typography key={item.id} >
                                                    {item.title}<Button onClick={() => eleminate(index, 1)}>Eliminar</Button>
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
                                {items2.map((item2, index2) =>
                                    <Draggable draggableId={item2.title+" "+index2} index={index2} key={index2}>
                                        {(provided) => (
                                            <Paper key={item2.id} className={classes.box} {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>

                                                <Typography key={item2.id} >
                                                    {item2.title}<Button onClick={() => eleminate(index2, 2)}>Eliminar</Button>
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