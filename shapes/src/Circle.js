// import {Triangle,Square,Semicircle,Parallelogram} from './Other';
import {Triangle,Square,Semicircle,Parallelogram} from "./Other";
function Circle(){
    var r=5;
   const peri=2*3.14*r;
    return(
       <div>
    <h1>The perimeter of circle is {peri}</h1>
        <h1>The perimeter of Triangle is <Triangle/></h1>
        <h1>The perimeter of Square is <Square /></h1>
        <h1>The perimeter of Semircircle is <Semicircle/></h1>
       <h1>The Perimeter of Parallelogram is <Parallelogram /></h1>
       </div>
    );
}

export default Circle;