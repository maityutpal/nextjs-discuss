'use client'
import { useSession } from "next-auth/react"

export default function Profile(){

    const session=useSession();

        if(session.data?.user){
            return<div>{JSON.stringify(session.data.user)}</div>
        }
        else{
             return<div>user is signed out from client</div>
        }
    

}