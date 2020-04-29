import React, {Component,useState} from 'react'



const AddTodo = (addTodo: (arg0: string) => void) => {

        const [user, setUser] = useState("")

    

    /*function handleChange (e: { target: { value: any; }; }) {
        content=e.target.value
    }*/

    function handleSubmit  (e: { preventDefault: () => void; }) {
        e.preventDefault(); 
        addTodo(user);
    }


   
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Add new todo</label>
                    <input value={user} onChange={e => setUser(e.target.value)} required/>
                </form>
            </div>    
        )
}

export default AddTodo; 


/*
<input type="text" onChange={handleChange} value={content}/>
*/