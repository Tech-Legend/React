function Triangle(){
    var a=3;
    var b=4;
    var c=5;
    var peri=a+b+c;
return (
   peri
);
   
}

function Square(){
    var a=9;
    return(4*a);
}


function Semicircle(){
    var r=3;
    var peri=3.14*r+2*r;
    return(peri);
}
function Parallelogram(){
    var a=3;
    var b=4;
   
    return(2*(a+b));
}

// export {Square,Triangle,Semicircle,Parallelogram};
export {Triangle,Square,Semicircle,Parallelogram};