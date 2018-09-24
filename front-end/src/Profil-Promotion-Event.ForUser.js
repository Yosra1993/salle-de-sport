import React from 'react';
import { Table, TableBody, TableHead  } from 'mdbreact';
import {Button} from 'mdbreact';

const PromotionEventForUser = (props) => {
  return (
     <div className="promotion-event-container">
    <Table striped>
      <TableHead>
        <tr>
          <th>#</th>
          <th>nom Promotion/Event</th>
          <th>Promotion/Event</th>
          <th>Edit/Delete</th>
        </tr>
      </TableHead>
      <TableBody>
        <tr>
          <td>1</td>
          <td>Musculation</td>
          <td>Promotion</td>
          <td><Button color="info">Valide</Button><Button color="danger" style={{marginLeft:"2%"}}>Delete</Button></td>
    
        </tr>
        
      </TableBody>
    </Table>
    </div>
  );
}

export default PromotionEventForUser ;