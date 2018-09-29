import React from 'react';
import { Table, TableBody, TableHead  } from 'mdbreact';
import Popup from "reactjs-popup";



const PromotionEventitemForUser = ({eventuser}) => {
  return (
     <div className="promotion-event-container">
    <Table striped>
      <TableHead>
        <tr>
          <th>#</th>
          <th>Type of Promotion/Event</th>
          <th>Promotion/Event</th>
          <th>Date of Promotion/Event</th>
          <th> Reservation</th>
        </tr>
      </TableHead>
      <TableBody>
        <tr>
          <td>1</td>
          <td>{eventuser.typepromo}</td>
          <td>{eventuser.nameSalledeSport}</td>
          <td>{eventuser.date}</td>
          <td><Popup
    trigger={open => (
      <button className="button"> {open ?"valid" :"Waiting for validation"  }</button>
    )}
    position="right center"
    closeOnDocumentClick
  >
    <span> think you for the validation  </span>
     </Popup></td>
    
        </tr>
        
      </TableBody>
    </Table>
    </div>
  );
}

export default PromotionEventitemForUser ;