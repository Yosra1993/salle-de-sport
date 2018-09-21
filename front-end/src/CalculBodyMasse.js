import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Background from './images/CalculBodyMasse1.jpg';
class  CalculBodyMasse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height:"",
            weight:"",
            result:"",
            finalBmi:""
          };
          this.handleChange = this.handleChange.bind(this);
          this.calculateBmi = this.calculateBmi.bind(this);
    }
    
    handleChange=(event)=> {
        this.setState({[event.target.name]: event.target.value});
      }
      
calculateBmi=()=> {
var weight = this.state.weight
var height = this.state.height
var result=""
var finalBmi=""
if(weight > 0 && height > 0)
{
finalBmi = weight/(height/100*height/100)

if(finalBmi < 18.5)
 result ="You are too thin."

else if(finalBmi > 18.5 && finalBmi < 25)
    result = "You are healthy."

else if(finalBmi > 25)
    result = "You have overweight."
}
else
alert("Please Fill in everything correctly")
this.setState({result: result});  
this.setState({finalBmi: Math.round(finalBmi)});   
}

   render() {
        var background = {backgroundSize : 'cover',width:"100%"};
        var textStyle = {
          position: 'absolute', marginTop: "-23%",
          marginLeft: "20%",
        };


        return (
            <div>
                <Image 
                  style={background} responsive 
                  src="https://themighty.com/wp-content/uploads/2017/07/ThinkstockPhotos-670381928-1-640x213.jpg?v=1499898014">
                </Image>
                <div style={textStyle}>
                <h2>Calculate You Body Masse</h2>
                <p>You love having a second home but the mortgage</p>
                
                     <div>
                     <label>
                     Your Height(cm):
          
                      <input type="text" name='height' value={this.state.value} onChange={this.handleChange} />
                       </label>
                       <label>
                        Your Weight(kg):
                        <input type="text" name='weight' value={this.state.value} onChange={this.handleChange} />
                       </label>
                      
                       <input value="Calcul Your BMI" onClick={()=>this.calculateBmi()} />
                      
                    </div>
                    
                     <h2>{this.state.finalBmi}</h2>
                    <h3>{this.state.result}</h3>
                </div>
            </div>
        );
    }
}
export default CalculBodyMasse ;