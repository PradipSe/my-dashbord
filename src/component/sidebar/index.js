import React from 'react';

import { SidebarMenu, List } from './style'
const SideBar = () => {
    return (
        <SidebarMenu>
            <List>My Dashboard</List>
            <List>Collections</List>
            <List>Users</List>
            <List>Group</List>
        </SidebarMenu>
        )
}
    
export default SideBar