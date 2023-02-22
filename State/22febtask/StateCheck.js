import React from 'react'

class StateCheck extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            a:3,
            b:5,
            c:6,
        };
    }
     changeA=()=>{
this.setState({a:2,b:this.state.b});
    }
    changeB=()=>{
        this.setState({b:2});
            }
            changeC=()=>{
                this.setState({c:1});
                    }
                    changeAll=()=>{
                        this.setState({a:2,b:4,c:3});
                            }
                            resetAll=()=>{
                                this.setState({a:3,b:5,c:6})
                            }

    render(){
var val=this.state.a;
var val1=this.state.b;
var val2=this.state.c;
var poly=(val*val*val)+(val1*val1*val1)+(val2*val2*val2)+3*((val+val1)*(val1+val2)*(val2+val1))
        return (
<>
<h2>a:{val} b:{val1} c:{val2}</h2>
<h1>(a+b+c)<sup>3</sup> is {poly}</h1>
<button onClick={this.changeA}>a</button> &nbsp;
<button onClick={this.changeB}>b</button> &nbsp;
<button onClick={this.changeC}>c</button> &nbsp;
<button onClick={this.changeAll}>change all values</button> &nbsp;
<button onClick={this.resetAll}>Back to Normal</button>
</>
        );
    }

}

export default StateCheck
