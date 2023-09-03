import React from "react"
import {Component} from "react"
import Display from "./Display";
import "./Style.css";


class FormClass extends Component{
 constructor(){
    super();
    this.state={
        Name:'',
        clicked:true,
        Department:'',
        Rating:'',
        EmpData:[]
    }
}
    changeHandle=(event)=>{
        this.setState({[event.target.name]:event.target.value})
        console.log(this.state.Rating)
    }
    toogleFunction=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    clickHandle=()=>{
        const newObj={
            name:this.state.Name,
            Department:this.state.Department,
            rate:this.state.Rating
        }
        this.state.EmpData.push(newObj);
        this.setState({
            EmpData:this.state.EmpData,
            Name:" " ,
            Department: " ",
            Rating:" ",
            clicked:false
        })
        console.log(this.state.EmpData)
    }
    render(){
        return(
            <> 
            {this.state.clicked
            ?
            <div>
           <h1>EMPLOYEE FEEDBACK FORM</h1>
            <form>
            <label htmlFor='name'>Name:</label>
            <input id='name' type="'text" name='Name'value={this.state.Name}onChange={this.changeHandle}></input><br/><br/><br/>
            <label htmlFor='department'>Department:</label>
            <input id='department' type="'text" name='Department'value={this.state.Department}onChange={this.changeHandle}></input><br/><br/><br/>
            <label htmlFor='rate'>Rating:</label>
            <input id='rate' type="'text" name='Rating'value={this.state.Rating}onChange={this.changeHandle}></input><br/><br/><br/>
             <br/><br/><br/><br/>
            <button type='button'onClick={this.clickHandle}>Submit</button>
            </form>
            </div>
           
            :
          <Display value={this.state.EmpData} toggleFunc={this.toogleFunction}/>
          
    }
    
        
            </>
        )
    }
}
export default FormClass;