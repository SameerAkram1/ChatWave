import React from 'react'

import { Box, Container } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';

const Homepage = () => {
    return (
        <Container maxW="xl" centerContent >
            <Box
                display="flex"  
                p={3}
                bg="white"
                w="100%"
                m="10px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
                color="black"
                alignItems="center"
                justifyContent="center"
                textAlign="center"  
            >
                Chat - Wave
            </Box>

            <Box d="flex"
                justifyContent="center"
                p={3}
                bg="white"
                w="100%"
                m="10px 0 15px 0"
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
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>


        </Container>

    )
}

export default Homepage
