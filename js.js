let body = document.getElementById ('body');
let rannArr = [];

function randomColor () {
    const colors= [ 
        '#0923FB',
        '#04117B',
        '#FB454F',
        '#FFD418',
        '#23E1C7'
    ];
    return colors [Math.floor(Math.random()*colors.length)];
}

function ranCir (){

    for (rannArr.length; rannArr.length<50;){
        let circle = document.createElement ('div');
        circle.id= 'circle';
        rannArr.push (circle);
        body.append (circle);

        var randomX = Math.floor(Math.random()*97);
        var randomY = Math.floor(Math.random()*92);
        
        circle.style.left = randomX + '%';
        circle.style.top = randomY + '%';
        circle.style.backgroundColor = randomColor ();

    }
    
}
ranCir ();