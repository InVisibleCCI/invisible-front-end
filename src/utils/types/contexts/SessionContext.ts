import { User } from "classes/User";
import { createContext, useContext } from "react";

export interface IGeolocation{
    latitude:number, 
    longitude:number, 
}

export type SessionContextType = {
   lastSearch:string; 
   setLastSearch:(c:string) => void; 
   currentUser?:User; 
   setCurrentUser:(c:User) => void;
   currentGeolocation?:IGeolocation; 
   setCurrentGeolocation:(c:IGeolocation) =>void; 
   lastLocation:string; 
   setLastLocation:(c:string) =>void;
}

export const SessionContext = createContext<SessionContextType>({
    lastSearch: "", 
    setLastSearch: () => {}, 
    currentUser:undefined,
    setCurrentUser: () => {}, 
    currentGeolocation:undefined, 
    setCurrentGeolocation: () =>{},
    lastLocation:"", 
    setLastLocation: () => {}
})

export const useSessionContext = () => useContext(SessionContext); 
