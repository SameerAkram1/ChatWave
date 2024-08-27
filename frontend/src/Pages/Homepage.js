import React from 'react'
import { Box, Container } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


const Homepage = () => {
    return (
        <Container maxW="xl" centerContent>
            <Box d="flex"
                justifyContent="center"
                p={3}
                bg="white"
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
                color="black">
                This is the Box
            </Box>

            <Box d="flex"
                justifyContent="center"
                p={3}
                bg="white"
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
                color="black">
                <Tabs variant='enclosed'>
                    <TabList>
                        <Tab>Login</Tab>
                        <Tab>SignUp</Tab>
                    </TabList>
                    <TabPanels> 
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>


        </Container>

    )
}

export default Homepage
