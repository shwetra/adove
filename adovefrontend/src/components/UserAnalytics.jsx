import { Box, Button, Flex, Heading, Table, Tbody, Td, Text, Th, Thead, Tr,} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserAnalytics = () => {
    const nav=useNavigate()
  const [Data,setData]=useState()
  const [allData,setallData]=useState()


  useEffect(()=>{
    async function fetch(){
      const user=await axios.get("http://localhost:8000/analytics/users/top-active")
      setData(user.data.topUsers)
    }
    fetch()
  },[])


  useEffect(()=>{
    async function fetchall(){
      const user=await axios.get("http://localhost:8000/analytics/users")
      setallData(user.data.total_users)
    }
    fetchall()
  },[])

  const Handle=()=>{
    nav("/")
  }


  

  return (
    <>
    <Box m="auto" mb="20px" overflowX="auto" w={{ base: "100%", md: "80%", xl: "60%" }} border="3px solid black" borderRadius="15px">
    
    <Table size="md" variant="simple">
      <Thead bgColor="teal.100">
        <Tr>
          <Th display="flex" justifyContent="center">Total Number of user</Th>
        </Tr>
      </Thead>
      <Tbody bgColor="yellow.100">
          <Tr border="2px solid black">
            <Td>Total user</Td>
            <Td>{allData}</Td>
          </Tr>
      </Tbody>
    </Table>
  </Box>
    <Flex justifyContent="center" alignItems="center">
      <Box overflowX="auto" w={{ base: "100%", md: "80%", xl: "60%" }} border="3px solid black" borderRadius="15px">
    
        <Table size="md" variant="simple">
          <Thead bgColor="teal.100">
            <Tr>
              <Th>EMAIL</Th>
              <Th>Total Post</Th>
            </Tr>
          </Thead>
          <Tbody bgColor="yellow.100">
            {Data && Data.map((user) => (
              <Tr key={user.id} border="2px solid black">
                <Td>{user._id}</Td>
                <Td>{user.count}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>

    <Button onClick={Handle} mt="20px">Go Back</Button>
    </>
  );
};

export default UserAnalytics;
