import React from 'react';
import {Grid} from './styles';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ChanelData from '../ChannelData';

const Layout: React.FC = () =>{
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo/>
            <ChannelList/>
            <UserInfo />
            <ChanelData />
            <UserList />

        </Grid>
        
    )
};

export default Layout;