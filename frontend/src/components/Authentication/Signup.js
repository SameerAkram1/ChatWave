import React, { useState } from 'react'
import {
    FormControl, VStack, FormLabel,
    Input,
    Button,
    FormHelperText,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'



const Signup = () => {
    const [show, sethide] = useState(false);
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [confirmpassword, setconfirmpassword] = useState();
    const [pic, setpic] = useState();
    const [pass, setpass] = useState('password');

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
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder='Enter Your Name' />
            </FormControl>
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

            <FormControl id='password' isRequired >
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input
                        type={pass}
                        placeholder='Confirm Your Password' />
                    <InputRightElement marginRight='10px'>
                        <Button colorScheme='none' color='black' variant='solid' onClick={passwordshow}>
                            {show ? "Hide" : "Show"}
                        </Button></InputRightElement>
                </InputGroup>
            </FormControl>


            <FormControl id='pic'>
                <FormLabel>Upload your picture</FormLabel>
                <InputGroup>
                    <Input
                        type='file'
                        accept='image/'
                        placeholder='Confirm Your Password'
                        onChange={(e) => postDetails(e.target.files[0])}
                    />


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

export default Signup
