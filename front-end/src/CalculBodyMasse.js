import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import './css/calcul.css';
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
               <Image className='image-calcul-body'
                 style={background} responsive
                 src="http://globetrendermagazine.com/wp-content/uploads/2015/08/Workout-woman-1400x600.jpg">


               </Image>
               <div style={textStyle}>
          <center><h2 className="calculetittle">Calculate You Body Masse</h2> </center>

                    <div style={{display:"flex"}}  >
                   <p className="height-title-tocalcul"> Height(cm): </p>
                   <p className="weight-title-tocalcul" > Weight(kg):</p>
                      </div>

         <div className="calcule input">
        <input className="imputheight" type="text" name='height' value={this.state.value} onChange={this.handleChange} />
        <input className="imputwidth"  type="text" name='weight'style={{marginLeft:"220px"}} value={this.state.value} onChange={this.handleChange} />
              </div>

        <button className='button-calcul' onClick={()=>this.calculateBmi()} >Resulat</button>

                   <h3 className="resultat-calcul"> {this.state.result}</h3>
               </div>
           </div>

       );
   }
}
export default CalculBodyMasse ;