import { Box, Button, Flex, Heading, Table, Tbody, Td, Th, Thead, Tr,} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import View from "./View";
import Update from "./UpdateUser";
import Allpost from "./AllPost";

const UserList = () => {
  const [Data,setData]=useState()

  useEffect(()=>{
    async function fetch(){
      const user=await axios.get("http://localhost:8000/allusers")
      setData(user.data)
    }
    fetch()
    setData(Data)
  },[])

  const handleDelete = (_id) => {
    axios.delete(`http://localhost:8000/users/${_id}`)
    .then((res) => {
      console.log(res);
      alert("user has been delete")
      
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const handleUpdate = (_id, updatedData) => {
    axios.put(`http://localhost:8000/users/${_id}`, updatedData)
      .then((res) => {
        console.log(res);
        alert("User has been updated!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  return (
    <>
    <Flex justifyContent="center" alignItems="center">
      <Box overflowX="auto" w={{ base: "100%", md: "80%", xl: "60%" }} border="3px solid black" borderRadius="15px">
        <Table size="md" variant="simple">
          <Thead bgColor="teal.100">
            <Tr>
              <Th>Name</Th>
              <Th>EMAIL</Th>
              <Th>VIEW</Th>
              <Th>DELETE</Th>
              <Th>UPDATE</Th>
            </Tr>
          </Thead>
          <Tbody bgColor="yellow.100">
            {Data && Data.map((user) => (
              <Tr key={user.id} border="2px solid black">
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>
                 <View name={user.name} email={user.email} bio={user.bio} updatedAt={user.updatedAt}/>
                  </Td>
                  <Td>
                  <Button colorScheme="red" size="sm" onClick={() => handleDelete(user._id)}>
                    Delete
                  </Button>
                  </Td>
                  <Td>
                  <Update id={user._id}/>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
    <Heading>ALL Content</Heading>
    <Allpost/>
    </>
  );
};

export default UserList;
