import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Text,
    useColorModeValue,
    Image,
    Textarea,
    Heading,
  } from "@chakra-ui/react";
  import axios from "axios";
  import React, { useEffect, useState } from "react"
  import { useNavigate } from "react-router-dom";
  
  
  const PostCreate = () => {
    const [formData,setformDate]=useState({});
    const nav=useNavigate()
  
    const handleChange=(e)=>{
      const {value,name}=e.target;
      setformDate({
        ...formData,
        [name]:value,
      });
  
    };
  
    
        const handlecreate = async (e) => {
          e.preventDefault();
          console.log(formData);
          axios.post("http://localhost:8000/posts", formData)
            .then((res) => {
              console.log(res);
              alert("content has been created");
              nav("/allpost");
            })
            .catch((err) => {
                alert("You are not a user please creat user")
                nav("/create")
              console.log(err);
            });
        };
      
      
  
      
    return (
      <div>
  <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <Stack align={"center"}>
              <Heading>Post content</Heading>
              </Stack>
              <FormControl id="email" isRequired>
                <Input
                  fontSize={"md"}
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                />
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Textarea
                  
                    name="content"
                    onChange={handleChange}
                    placeholder="content"
                  />
                </InputGroup>
              </FormControl>
  
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handlecreate}
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Create User
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
    )
  }
  
  export default PostCreate