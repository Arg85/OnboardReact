import React from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    InputLeftAddon,
  
    InputGroup,
    
} from '@chakra-ui/react'
import {CheckIcon  } from '@chakra-ui/icons'
import profile from "../Img/profile.jpg"
import group from "../Img/group.jpg"
import Card from './Card'
function Screen({ screenNo }) {
    return (
        <>
            {screenNo === 0 && <>
             <div className='ScreenHeader'>
             <h1>Welcome! First Things First...</h1>
                <p>You can always change them later</p>
             </div>
                <div className='form'>
                    <FormControl>
                        <FormLabel>Full Name</FormLabel>
                        <Input type='fullname' placeholder='Steve Jobs' />
                        <FormLabel pt={5}>Display Name</FormLabel>
                        <Input type='displayname' placeholder='Steve ' />
                    </FormControl>
                </div>
            </>}
            {screenNo === 1 && <>
            <div  className='ScreenHeader'>

                <h1>Lets set up a home for all your work</h1>
                <p>You can always create another workspace later</p>
            </div>
            <div className='form'>
                    <FormControl>
                        <FormLabel>Workspace Name</FormLabel>
                        <Input type='workspacename' placeholder='Steve Jobs' />
                        <FormLabel pt={5}>Workspace url <span style={{"color":"#8f98aa"}}>(optional)</span> </FormLabel>
                        <InputGroup size='md'>
                        <InputLeftAddon children='www.eden.com/' />
                        <Input placeholder='Example' />
                        </InputGroup>
                    </FormControl>
                </div>
            </>}
            {screenNo === 2 && <>
            <div  className='ScreenHeader'>

                <h1>How are you planning to use Eden?</h1>
                <p>We'll streamline your setup experience accordingly.</p>
            </div>
            <div className='Cards'>
                  <Card val={profile} content={ "Write Better. Think more clearly.Stay Oraganized."}  Heading={"For Myself"}  ></Card>
                    <Card val={group}  content={"Wikis, docs, tasks & projects, all in one place."}  Heading={"With my team"}></Card>
                </div>
            </>}
            {screenNo === 3 && <>
            <div  className='ScreenHeader'>
<div class="circle active">
<CheckIcon w={4} h={4}/>
</div>
                <h1>Congratulations, Eren!</h1>
                <p>You have completed onboarding, you can start using Eden!</p>
            </div>
            </>}
        </>
    )
}

export default Screen