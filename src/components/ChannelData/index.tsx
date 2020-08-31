import React, {useRef, useEffect} from 'react';
import {Container, Messages, InputWrapper, Input, InputIcon} from './styles';
import ChannelMessage, {Mention} from '../ChannelMessage';


const ChannelData: React.FC = () =>{
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messageRef.current;
        if(div){
            div.scrollTop = div.scrollHeight;
        }
    }, [messageRef]);
    return (
        <Container>
           <Messages ref={messageRef}>
               {Array.from(Array(15).keys()).map((n) =>(
               <ChannelMessage 
                key={n}
                author="Felipe Ribeiro"
                date="31/08/2020"
                content="Hoje temos um novo projeto"
               />
                ))}

               <ChannelMessage 
                author="Mestre Yoda"
                date="31/08/2020"
                content={
                    <>
                    <Mention>@Felipe Ribeiro</Mention>, me envia os detalhes do Projeto?

                    </>
                }
                hasMention
                isBot
               />
           </Messages>

           <InputWrapper>
              <Input type="text" placeholder="Conversar em #chat-livre"/>
              <InputIcon />
           </InputWrapper> 
        </Container>
    )
};

export default ChannelData;