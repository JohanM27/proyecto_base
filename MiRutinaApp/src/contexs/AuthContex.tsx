import { createContext, useState } from "react";

type User = {
    id: string;
    email: string;
    name: string;
};

const AuthContex = createContext <{
    user: User,
    isAllowed: boolean,
    login: (email:string) => void,
    logout: (null);
}
export const Authprovider =({children: React.ReactNode})=>{
    const [user,setUser]=useState<User>(null);
    const [isAllowed,setIsAllowed]=useState<boolean>(false);


}

export const useAuth = () => {
    
};