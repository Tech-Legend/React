import React from "react";
class Square extends React.Component{
    render(){
        var a=9;
        return(<h1>Perimeter of Square is {a*a}</h1>);
    }
   
}
class Triangle extends React.Component{
    render(){
        var a=3;
        var b=4;
        var c=5;
        var peri=a+b+c;
        return (<h1>Perimeter of Triangle is {peri}</h1>)
    }
}
class Semicircle extends React.Component{
    render(){
        var r=3;
        var peri=3.14*r+2*r;
        return (<h1>Perimeter of Semicircle is {peri}</h1>);
    }
}
class Parallelogram extends React.Component{
    render(){
        var a=3;
        var b=4;
        return(<h1>Perimeter of Parallelogram is {2*(a+b)}</h1>);
    }
}
class Circle extends React.Component{
    render(){
        var r=5;
        const peri=2*3.14*r;
        return(<h1>Perimeter of circle is {peri}</h1>);
    }
}

export {Square,Triangle,Circle,Semicircle,Parallelogram};