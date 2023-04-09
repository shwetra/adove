import { Box, Button, Flex, Table, Tbody, Td, Th, Thead, Tr,} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import PostView from "./PostView";
import UpdatePost from "./UpdatePostcontent";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const [Data,setData]=useState()
  const nav=useNavigate()

  useEffect(()=>{
    async function fetch(){
      const user=await axios.get("https://adove.onrender.com/allpost")
      setData(user.data)
    }
    fetch()
    setData(Data)
  },[])

  const handleDelete = (_id) => {
    axios.delete(`https://adove.onrender.com/posts/${_id}`)
    .then((res) => {
      console.log(res);
      alert("Post has been delete")
      nav("/PostAnalytics")
      
    })
    .catch((err) => {
      console.log(err);
    });
  };

  

  return (
    <Flex justifyContent="center" alignItems="center">
      <Box overflowX="auto" w={{ base: "100%", md: "80%", xl: "60%" }} border="3px solid black" borderRadius="15px">
        <Table size="md" variant="simple">
          <Thead bgColor="teal.100">
            <Tr>
              <Th>EMAIL</Th>
              <Th>VIEW</Th>
              <Th>DELETE</Th>
              <Th>UPDATE</Th>
            </Tr>
          </Thead>
          <Tbody bgColor="yellow.100">
            {Data && Data.map((user) => (
              <Tr key={user.id} border="2px solid black">
                <Td>{user.email}</Td>
                <Td>
                 <PostView content={user.content} email={user.email}  updatedAt={user.updatedAt}/>
                  </Td>
                  <Td>
                  <Button colorScheme="red" size="sm" onClick={() => handleDelete(user._id)}>
                    Delete
                  </Button>
                  </Td>
                  <Td>
                  <UpdatePost id={user._id}/>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default PostList;
