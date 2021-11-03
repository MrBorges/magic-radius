import React, { Component } from 'react';
import './box-style.css'
import './RadiusInput'
import RadiusInput from './RadiusInput';

class BorderBox extends Component  {
    constructor(props){
        super(props)
        this.state={
            //borderRadius: 0,
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomRightRadius:0,
            borderTopRightRadius:0
        }
    }

    onClickMe = () => {
        this.setState({borderRadius : this.state.borderRadius + 40});
        console.log(`Clicked border: ${this.state.borderRadius}`)
    }

    setRadius = ( {target }) =>  {
        this.setState({ borderRadius: parseInt(target.value) })
        console.log('Target value: ' +  target.value + '| State: ' + this.state.borderRadius)
    }

    changeRadius = ( {target }) =>{
        this.setState({[target.name]: parseInt(target.value)})
        console.log(target.name + '  value: '+ target.value)
        console.log('Got here!'
        )
    }

    render(){        

        return(
            <div className="border-box" style={{borderBottomLeftRadius: this.state.borderBottomLeftRadius,
                                                borderTopLeftRadius: this.state.borderTopLeftRadius,
                                                borderBottomRightRadius: this.state.borderBottomRightRadius,
                                                borderTopRightRadius: this.state.borderTopRightRadius}}>
                <div className="inputContainer">
                    <RadiusInput name={'borderTopLeftRadius'} changeRadius={this.changeRadius}/>
                    <RadiusInput name={'borderBottomLeftRadius'} changeRadius={this.changeRadius}/>
                </div>
                <div className="text-container" onClick={this.onClickMe}></div>                
                <div className="inputContainer">
                    <RadiusInput name={'borderTopRightRadius'} changeRadius={this.changeRadius}/>
                    <RadiusInput name={'borderBottomRightRadius'} changeRadius={this.changeRadius}/>
                </div>
            </div>
        )
    }   
}

export default BorderBox;