import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../Store/authSlice'
import authservice from '../../Appwrite/Auth'
import { Button, buttonVariants } from '../ui/button'
import { LogOut, LogOutIcon } from 'lucide-react'

function Logoutbtn() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const logoutHandler = () => {
        setLoading(true)
        authservice.logout().then(() => {
            dispatch(logout())
        })
        setLoading(false)

    }
    return (

        <button onClick={logoutHandler} className='bg-red-500 hover:bg-red-700  font-bold py-2 px-4 rounded' >{loading ? "logging out" : "logout"}</button>
    )
}

export default Logoutbtn