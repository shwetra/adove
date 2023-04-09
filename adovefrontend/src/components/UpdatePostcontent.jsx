


import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
    Flex,
    Stack,
    FormControl,
    Heading,
    Box,
    useColorModeValue,
    Input,
    InputGroup,
    Textarea,
  } from '@chakra-ui/react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdatePost({id}) {
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
          console.log(id)  
         await axios.put(`https://adove.onrender.com/posts/${id}`, formData)
            .then((res) => {
              console.log(res);
              alert("contant has been updated");
              nav("/")
            })
            .catch((err) => {
              console.log(err);
            });
        };
      
   

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Update</Button>
  
        <Modal  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Post Content</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <div>
  <Flex
        minH={"40vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <Stack align={"center"}>
              <Heading>Update Post</Heading>
              </Stack>
            
             
  
            
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
                  Update Post
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                CLOSE
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }