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
  } from '@chakra-ui/react'
export default function View({ name, email,bio,updatedAt }) {
   

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>View</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>View Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Text lineHeight={2} >
                            <span style={{ fontWeight: "bold" }}>NAME : </span>   {name}
                        </Text>
                        <Text lineHeight={2}>
                            <span style={{ fontWeight: "bold" }}>EMAIL : </span>  {email}
                        </Text>
                        <Text lineHeight={2}>
                            <span style={{ fontWeight: "bold" }}>BIO : </span>{bio}
                        </Text>
                        <Text lineHeight={2}>
                            <span style={{ fontWeight: "bold" }}>updatedAt : </span> {updatedAt}
                        </Text>       
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                View
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }