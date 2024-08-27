import React, { useState } from 'react'
import {
    FormControl, VStack, FormLabel,
    Input,
    Button,
    FormHelperText,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'



const Login = () => { 
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [pass, setpass] = useState('password');
    const [show, sethide] = useState(false);

    function passwordshow(e) {
        e.preventDefault();
        if (pass === 'password') {
            setpass('Text');
            sethide(true);
        } else {
            setpass('password');
            sethide(false);
        }
    }

    const postDetails = (pic) => {

    }
    return (
        <VStack spacing='4px' >
    
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder='Enter Your email' />
            </FormControl>

            <FormControl id='password' isRequired >
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={pass}
                        placeholder='Enter Your password' />
                    <InputRightElement marginRight='10px'>
                        <Button colorScheme='none' color='black' variant='solid' onClick={passwordshow}>
                            {show ? "Hide" : "Show"}
                        </Button></InputRightElement>
                </InputGroup>
            </FormControl>

            <Button
               maxW='100%'
                marginTop='20px'
                colorScheme='blue'
            >
                Submit
            </Button>
        </VStack>
    )
}

export default Login
