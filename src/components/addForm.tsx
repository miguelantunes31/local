import React, {Component,useState} from 'react'



const AddTodo: React.FC <{addTodo : any}> = () => {

        const [user, setUser] = useState("")

    

    

    function handleSubmit  (e: { preventDefault: () => void; }) {
        e.preventDefault(); 

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


