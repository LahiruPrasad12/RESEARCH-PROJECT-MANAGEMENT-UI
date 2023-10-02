import Routers from './Router'
import { AuthContextProvider } from "./context/AuthContext";


import React from "react"

function App() {
    const apiKey = 'mySecretApiKey';
    return (
        <AuthContextProvider>
            <Routers />
        </AuthContextProvider>

    )
}

export default App;
