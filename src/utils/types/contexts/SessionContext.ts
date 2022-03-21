import { createContext, useContext } from "react";

export type SessionContextType = {
   lastSearch:string; 
   setLastSearch:(c:string) => void; 
}

export const SessionContext = createContext<SessionContextType>({
    lastSearch: "", 
    setLastSearch: () => {}
})

export const useSessionContext = () => useContext(SessionContext); 
