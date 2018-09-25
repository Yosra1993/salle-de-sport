import React from 'react';
import { Table, TableBody, TableHead  } from 'mdbreact';
import {Link} from 'react-router-dom'
import {Button} from 'mdbreact';

const PromotionEvent = (props) => {
  return (
     <div className="promotion-eventcontainer">
     <Link to="/Add-Promotion-Event">
    <Button className="pull-right" color="Warning">Add +</Button>
    </Link>
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
          
          <td><Link to="/Edit-Promotion-Event"><Button color="info">Edit</Button></Link>
          <Button color="danger" style={{marginLeft:"2%"}}>Delete</Button></td>
    
        </tr>
        
      </TableBody>
    </Table>
    </div>
  );
}

export default PromotionEvent ;