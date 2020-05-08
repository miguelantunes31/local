import React, {Component,useState} from 'react'



const AddTodo: React.FC <{addTodo : any}> = () => {

        const [user, setUser] = useState("")

    

    /*function handleChange (e: { target: { value: any; }; }) {
        content=e.target.value
    }*/

    function handleSubmit  (e: { preventDefault: () => void; }) {
        e.preventDefault(); 
        //addTodo(user);
    }


   
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Add new todo</label>
                    <input value={user} onChange={e => setUser(e.target.value)} required/><br/>
                    {user}
                </form>
            </div>    
        )
}

export default AddTodo; 



/*
<input type="text" onChange={handleChange} value={content}/>

*/