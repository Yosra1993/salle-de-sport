import React from 'react'
import { Icon, Input } from 'semantic-ui-react'
import './css/Search.css';

const InputExampleIconElement = () => (
  <Input icon={<Icon name='search' inverted circular link />} placeholder='Search...'
  style={{height:"45px",marginLeft:"-101%",width: "89%"}}/>


  
)

export default InputExampleIconElement
