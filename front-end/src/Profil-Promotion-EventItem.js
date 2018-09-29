import React from 'react';
import { Table, TableBody, TableHead  } from 'mdbreact';
import {Button} from 'mdbreact';
import {Link} from 'react-router-dom'

const PromotionEventItem = ({value}) => {
  return (
     <div className="promotion-eventcontainer">
    <Table striped>
      <TableHead>
        <tr>
          <th>#</th>
          <th>nom Promotion/Event</th>
          <th>nom GYM</th>
          <th>Date</th>
          <th>Edit/Delete</th>
        </tr>
      </TableHead>
      <TableBody>
        <tr>
          <td>+</td>
          <td>{value.typepromo}</td>
          <td>{value.nameSalledeSport}</td>
          <td>{value.date}</td>

          
          <td><Link to={`/Edit-Promotion-Event/${value.typepromo}`}>
                     <Button color="info">Edit</Button>
              </Link>
          <Button color="danger" style={{marginLeft:"2%"}}>Delete</Button></td>
    
        </tr>
        
      </TableBody>
    </Table>
    </div>
  );
}

export default PromotionEventItem ;