import { useEffect, useState } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import axios from "axios";


const Allpost = () => {
  const [Data,setDataa]=useState()

  useEffect(()=>{
    async function fetch(){
      const user=await axios.get("http://localhost:8000/allpost")
      setDataa(user.data)
    }
    fetch()
    setDataa(Data)
  },[])


  const handleLike = (id) => {
   
  };

  const handleDislike = (id) => {
   
  };

  return (
    <Flex flexWrap="wrap" justifyContent="space-between">
      {Data && Data.map((item) => (

        <Box
          key={item.id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p="4"
          m="4"
          flex="0 0 30%"
        >
          <Text bgColor="yellow.100" fontSize="md" fontWeight="bold">
          User  : {item.email}
          </Text>
          <Text bgColor="teal.100" fontWeight="bold" mb="4">Content</Text>
          <Text align="start" fontWeight='500' fontSize="14px" mb="4">{item.content}</Text>
          <Flex justify="space-between">
            <Button colorScheme="green" onClick={() => handleLike(item.id)}>
              Like
            </Button>
            <Button colorScheme="red" onClick={() => handleDislike(item.id)}>
              Dislike 
            </Button>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default Allpost;
