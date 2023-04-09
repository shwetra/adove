import { Box, Button, Flex, Heading, Table, Tbody, Td, Text, Th, Thead, Tr,} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PostAnalytics = () => {
    const nav=useNavigate()
  const [allData,setallData]=useState()

  useEffect(()=>{
    async function fetchall(){
      const user=await axios.get("http://localhost:8000/analytics/posts")
      setallData(user.data.total_post)
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
          <Th display="flex" justifyContent="center">Total POSTS on web page</Th>
        </Tr>
      </Thead>
      <Tbody bgColor="yellow.100">
          <Tr border="2px solid black">
            <Td>Total Post</Td>
            <Td>{allData}</Td>
          </Tr>
      </Tbody>
    </Table>
  </Box>

  {/* //top 5 liked post */}

    <Button onClick={Handle} mt="20px">Go Back</Button>
    </>
  );
};

export default PostAnalytics;
