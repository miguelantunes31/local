import * as React from "react";
import { TextField, Button, Box, Typography, Grid } from "@material-ui/core";

export interface TodoItem {
    title: string;
}

const Teste = () => {

    const [items, setItems] = React.useState<TodoItem[]>([]);
    const [newTodo, setNewTodo] = React.useState("");

    const addTodo = (title: string) => {
        setItems([...items, { title }]);
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
            <Grid>
                <TextField value={newTodo} onChange={handleChange} />
                <Button onClick={handleSubmit}>Add Todo</Button>
            </Grid>
            <Grid>
                {items.map((item, index) => (
                    <Box key={`${item.title}-${index}`}>
                        {console.log(items)}
                        <Typography>
                            {item.title}
                        </Typography>
                    </Box>
                ))}
            </Grid>
        </Grid>
    );
};

export default Teste;