import React from 'react';

import { DashbordWrapper, DashbordTitle, DashbordContent } from './style'
const Dashbord = () => {
    return (
        <DashbordWrapper>
            <DashbordTitle>
                Digital Slide Archive
            </DashbordTitle>
            <DashbordContent>
                <h6>Bioinformatics Platform</h6>
                <p>Welcome to the Digital Slide Archive.<br />
                    Developers who want to use the Girder REST API should check out the interactive web API docs.<br />
                    The HistomicsUI application is enabled.</p>
            </DashbordContent>
        </DashbordWrapper>
    )
}
    
export default Dashbord