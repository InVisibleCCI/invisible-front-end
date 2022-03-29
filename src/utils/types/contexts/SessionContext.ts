import { User } from "classes/User";
import { createContext, useContext } from "react";

export type SessionContextType = {
   lastSearch:string; 
   setLastSearch:(c:string) => void; 
   currentUser?:User; 
   setCurrentUser:(c:User) => void; 
}

export const SessionContext = createContext<SessionContextType>({
    lastSearch: "", 
    setLastSearch: () => {}, 
    currentUser:undefined,
    setCurrentUser: () => {}


})

export const useSessionContext = () => useContext(SessionContext); 
