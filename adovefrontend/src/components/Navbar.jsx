import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const nav=useNavigate()
    const handle=()=>{
        nav("/create")
    }
    const handles=()=>{
        nav("/")
    }
    const handlea=()=>{
        nav("/UserAnalytics")
    }
    const handleb=()=>{
        nav("/PostAnalytics")
    }
    const hand=()=>{
        nav("/post")
    }
    const han=()=>{
        nav("/allpost")
    }
    const handaa=()=>{
        nav("/alluser")
    }
  return (
    <>
    <Box h="60px" bgColor="teal.100"  display="flex" justifyContent="space-around" pt="10px" >
        <Button onClick={handles}>Home</Button>
        <Button onClick={handle}>Create user</Button>
        <Button onClick={handlea} >UserAnalytics:</Button>
        <Button onClick={handleb} >PostAnalytics:</Button>
    </Box>
    <Box h="60px" bgColor="teal.100" mb="10px" display="flex" justifyContent="space-around" pt="10px" >
    <Button onClick={han}>All Post List</Button>
    <Button onClick={handaa}>All Users</Button>
    <Button onClick={hand}>Post Content</Button>
</Box>
</>
  )
}
