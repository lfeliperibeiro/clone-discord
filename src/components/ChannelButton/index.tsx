import React from 'react';
import {Container} from './styles';


const ChannelButton: React.FC = () =>{
    return (
        <Container>
           <div>
               <HashtagIcon />
               <span>chat-livre</span>
           </div>

           <div>
               <InviteIcon />
               <SettingsIcon />
           </div>


        </Container>
    )
};

export default ChannelButton;