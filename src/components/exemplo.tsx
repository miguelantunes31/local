import React, { useState, useEffect } from 'react';








function Example() {
  const [user, setUser] = useState("")
  
    return<>
      <div>
          <input value={user} onChange={e => setUser(e.target.value)} required/>
          
        <div>{user}</div>
        
      </div>
  </>
  }

export default Example;