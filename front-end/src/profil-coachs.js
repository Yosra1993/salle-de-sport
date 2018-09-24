import React from 'react';
import { Table, TableBody, TableHead  } from 'mdbreact';
import {Button} from 'mdbreact';

const Profilcoach = (props) => {
  return (
     <div className="promotion-eventcontainer">
    <Button className="pull-right" color="Warning">Add +</Button>
    <Table striped>
      <TableHead>
        <tr>
          <th>#</th>
          <th>nom coach</th>
          <th>role</th>
          <th>Edit/Delete</th>
        </tr>
      </TableHead>
      <TableBody>
        <tr>
          <td>1</td>
          <td>john</td>
          <td>Musculation</td>
          <td><Button color="info">Edit</Button><Button color="danger" style={{marginLeft:"2%"}}>Delete</Button></td>
    
        </tr>
        
      </TableBody>
    </Table>
    </div>
  );
}

export default Profilcoach ;