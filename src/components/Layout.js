import React from 'react'
import Navbar from './Navbar'


const Layout = ({childen}) => {
    return (
        <>
            <Navbar/>
            {childen}   
        </>
    )
}

export default Layout