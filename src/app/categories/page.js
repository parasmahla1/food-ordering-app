'use client'
import UserTabs from "../../components/layout/UserTabs"
import { useEffect, useState } from "react";
export default function CategoriesPage() {
    const [isAdmin,setIsAdmin] = useState(false)
    useEffect(() => {
        fetch("/api/profile").then(response => {
            response.json().then(data => {
                setIsAdmin(data.admin)
            }) 
        })
    },[])

    if(!isAdmin) {
        return  'Not an admin'
    }

  return <div className="mt-8 max-w-lg mx-auto">
    <UserTabs isAdmin={isAdmin}/>
    Categories
    </div>;
}
