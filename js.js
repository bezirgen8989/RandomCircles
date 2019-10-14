let body = document.getElementById ('body');
let rannArr = [];

function randomColor () {
   const colors= [ 
    '#0923FB',
    '#04117B',
    '#FB454F',
    '#FFD418',
    '#23E1C7',
];
return colors [Math.floor(Math.random()*colors.length)];
}

function distance (x1, y1, x2, y2) {
    const xDist = x2-x1;
    const yDist = y2-y1;

   return Math.sqrt (Math.pow (xDist, 2) +Math.pow (yDist, 2));
}


function ranCir (){

    for (rannArr.length;rannArr.length<100;){
        let circle = document.createElement ('div');
        circle.id= 'circle';
        rannArr.push (circle);
        body.append (circle);

        var randomX = Math.floor(Math.random()*97);
        var randomY = Math.floor(Math.random()*92);
        
        circle.style.backgroundColor = randomColor ();
        circle.style.left = distance();
        circle.style.top = distance();
        // if (rannArr.indexOf(randomX && randomY) ==-1){
        //     rannArr.push(randomX && randomY)

        // }
        // requestAnimationFrame(ranCir);
    }
    
}
ranCir ();