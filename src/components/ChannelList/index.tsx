import React from 'react';
import {Container, Category, AddCategoryIcon, ChannelButton} from './styles';


const ChannelList: React.FC = () =>{
    return (
        <Container>
          <Category>
              <span>Canais de Texto</span>
              <AddCategoryIcon />
          </Category>

          <ChannelButton channelName="chat-livre"/>
          <ChannelButton channelName="trabalho"/>
          <ChannelButton channelName="code"/>
          <ChannelButton channelName="cursos"/>
        </Container>
    )
};

export default ChannelList;