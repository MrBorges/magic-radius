import React, { Component } from 'react';

class RadiusInput extends Component {
    constructor(props){
        super(props)
        this.state={
            cornerVal: 0
        }
    }

    onInputChange = (event) =>{
        const {target: value} = event
        this.setState({cornerVal: value})
    }

    render (){
        return(
            <div>
                <input type="text" name={this.props.name} className="radiusInputText" onChange={(target) => this.props.changeRadius(target)}></input> 
            </div>
        )
    }
}

export default RadiusInput;
