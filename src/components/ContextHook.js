import React, {createContext} from 'react'


const AppContext = createContext(null);



const ContextHook = () => {
    const [username, setUsername] = useState("");
  return (
    <AppContext.Provider>
        
    </AppContext.Provider>
  )
}

export default ContextHook