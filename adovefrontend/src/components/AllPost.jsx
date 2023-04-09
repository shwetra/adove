import { useEffect, useState } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import axios from "axios";


const Allpost = () => {
  const [Data,setDataa]=useState()

  useEffect(()=>{
    async function fetch(){
      const user=await axios.get("https://adove.onrender.com/allpost")
      setDataa(user.data)
    }
    fetch()
    setDataa(Data)
  },[])


  const handleLike = async(id) => {
    await axios.patch(`https://adove.onrender.com/posts/${id}/like`)
    let res = await axios.get("https://adove.onrender.com/allpost");
    setDataa(res.data) 
   
  };

  const handleDislike = async(id) => {
    await axios.patch(`https://adove.onrender.com/posts/${id}/dislike`)
    let res = await axios.get("https://adove.onrender.com/allpost");
    setDataa(res.data)
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
            <Button colorScheme="green" onClick={() => handleLike(item._id)}>
              Like
            </Button>
            <Button>{item.likes}</Button>
            <Button colorScheme="red" onClick={() => handleDislike(item._id)}>
              Dislike 
            </Button>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default Allpost;
