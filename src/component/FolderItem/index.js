import React from 'react';
import logo from '../../assets/images/logo.png'

import { ListHeader, ListTable, HeaderList } from './style'
const FolderItem = () => {
    return (
        <ListHeader>
            <ListTable id="balanceTable0" class="respTable">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Unique ID
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Created
                        </th>
                        <th>
                            Last updated
                        </th>
                        <th>
                            Total Size
                        </th>
                        <th>
                            Contains
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src='https://wsi.test.pantheon.qritive.com/api/v1/item/60de911050bc94e2dc47821d/tiles/thumbnail?width=160&height=100' /></td>
                        <td>60de90fe50bc94e2dc47821a</td>
                        <td><b>Description</b>Out-of-Network Deductible</td>
                        <td>2021-07-02T04:07:26.716000+00:00</td>
                        <td>2022-06-18T12:52:25.775000+00:00</td>
                        <td>3572523.452</td>
                        <td>13 Subfolders</td>
                    </tr>
                </tbody>
            </ListTable>
        </ListHeader>
        )
}
    
export default FolderItem