pixlarcol = [];
pixlarcol2 = [];
var canvas = document.getElementById("canvas").getContext("2d");

function Pixelmap(){
    for(y = 0; y < 40; y++){
        for(x = 0; x < 40; x++){
            r = Math.floor(Math.random()*256);
            g = Math.floor(Math.random()*256);
            b = Math.floor(Math.random()*256);
            canvas.fillStyle = `rgb(${r},${g},${b})`;
            canvas.fillRect(x-1, y-1, 10, 10);
            pos = [x,y];
            pixlarcol[pos] = [r,g,b];         
        }        
    }
}

function clear(r,g,b){
    canvas.fillStyle = `rgb(${r},${g},${b})`;
    canvas.fillRect(0,0,400,400);
}

function fadeOut(){
    var r = 1;
    var g = 1;
    var b = 1;
    z = 0;
    for(y = 0; y < 40; y++){
        for(x = 0; x < 40; x++){
            r += 255/(40-x);
            g += 255/(40-x);
            b += 255/(40-x);
            canvas.fillStyle = `rgb(${r},${g},${b})`;
            canvas.fillRect(10*x, 10*y, 10, 10);
            pos = [x,y];
            pixlarcol[pos] = [r,g,b];
            pixlarcol2.push([r,g,b]);
        }              
        r = 1;
        g = 1;
        b = 1;              
    }   
}

function scrollLeft(gånger){
    for(y = 0; y < 40; y++){
        for(x = 0; x < gånger; x++){
            r = 0;
            g = 0;
            b = 0;
            canvas.fillStyle = `rgb(${r},${g},${b})`;
            canvas.fillRect(10*x, 10*y, 10, 10);
        }          
    }
}

function scrollRight(gånger){
    for(y = 0; y < 40; y++){
        for(x = 0; x < 40-gånger; x++){
            pos = [x,y];
            r = pixlarcol[pos][0];
            g = pixlarcol[pos][1];
            b = pixlarcol[pos][2];
            canvas.fillStyle = `rgb(${r},${g},${b})`;
            canvas.fillRect(10*x, 10*y, 10, 10);
        }
        for(x = 40-gånger; x < 40; x++){
            r = 0;               
            g = 0;
            b = 0;
            canvas.fillStyle = `rgb(${r},${g},${b})`;
            canvas.fillRect(10*x, 10*y, 10, 10);
        }
    }
}

function PutPixel(x,y,r,g,b){
    canvas.fillStyle = `rgb(${r},${g},${b})`;
    canvas.fillRect(x, y, 10, 10);
}

function line(x1,y1,x2,y2){
    if(x1 < x2 && y1 < y2){
        for(x1 = x1; x1 <= x2; x1 +=10){
            canvas.fillStyle = `rgb(${0},${0},${0})`;
            canvas.fillRect(x1, y1, 10, 10); 
            y1 += 10;
        }
    }
    else if(x1 > x2 && y1 < y2){
        for(y1 = y1; y1 <= y2; y1 += 10){
            canvas.fillStyle = `rgb(${0},${0},${0})`;
            canvas.fillRect(x1, y1, 10, 10); 
            x1 -= 10;
        }
    }
    else if(x1 < x2 && y1 > y2){
        for(x1 = x1; x1 <= x2; x1 +=10){
            canvas.fillStyle = `rgb(${0},${0},${0})`;
            canvas.fillRect(x1, y1, 10, 10); 
            y1 -= 10;
        }
    }
    else
    for(x1 = x1; x1 >= x2; x1 -=10){
        canvas.fillStyle = `rgb(${0},${0},${0})`;
        canvas.fillRect(x1, y1, 10, 10); 
        y1 += 10;
    }
}

function Circle(x,y,rad,r,g,b){
    canvas.beginPath();
    canvas.arc(x, y, rad, 0, 2 * Math.PI);
    canvas.strokeStyle = `rgb(${r},${g},${b})`;
    canvas.stroke();
}

function StairsPattern(){
    for(y = 0; y < 40; y++){
        for(x = 0; x < 40; x++){
            r = pixlarcol2[x+y][0];
            g = pixlarcol2[x+y][1];
            b = pixlarcol2[x+y][2];
            canvas.fillStyle = `rgb(${r},${g},${b})`;
            canvas.fillRect(10*x,10*y, 10, 10);
        }
    }
}

function CirclePattern(){
    for(y = 0; y < 40; y++){
        for(x = 0; x < 40; x++){
            r = pixlarcol2[x*y+x+y][0];
            g = pixlarcol2[x*y+x+y][1];
            b = pixlarcol2[x*y+x+y][2];
            canvas.fillStyle = `rgb(${r},${g},${b})`;
            canvas.fillRect(10*x,10*y, 10, 10);
        }
    }
}

fadeOut();
CirclePattern();
console.log(pixlarcol);