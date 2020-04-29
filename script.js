let x = 0;

let setStart = 0;

let [miliSeconds, seconds, minutes, hours]= [0, 0, 0, 0];
let [miliSecondsEnd, secondsEnd, minutesEnd, hoursEnd]= [0, 0, 0, 0];

let lap = document.getElementById('lap');

let saveBtn = document.querySelector('#save');
let removeBtn = document.querySelector('#remove');

/* function deleteToDo(){

}; */
function loadToDo(){
    if(localStorage.getItem('Our_circle'));
    lap.innerHTML = localStorage.getItem('Our_circle');
    /* deleteToDo(); */
};
function startAndstop(){
    setStart =setStart+1;
    if(setStart === 1){
        document.getElementById('start_stop').innerHTML = 'Stop';
        start();
    } else if(setStart === 2){
        document.getElementById('start_stop').innerHTML = 'Start';
        setStart = 0;
        stop();
    }
};

document.getElementById('start_stop').addEventListener('click', startAndstop);


function start(){ x = setInterval(time, 10) };
function stop(){ clearInterval(x) };

function time(){

    miliSecondsEnd = otschet(miliSeconds);
    secondsEnd = otschet(seconds);
    minutesEnd = otschet(minutes);
    hoursEnd = otschet(hours); 
    miliSeconds = ++miliSeconds;


    if(miliSeconds === 100){
        miliSeconds = 0;
        seconds = ++seconds;
    }

    if(seconds === 60){
        minutes = ++minutes;
        seconds = 0;
        
    }

    if(minutes === 60){
        minutes = 0;
        hours = ++hours;

    }

    document.getElementById('mili_seconds').innerHTML = miliSecondsEnd;
    document.getElementById('seconds').innerHTML = secondsEnd;
    document.getElementById('minutes').innerHTML = minutesEnd;
    document.getElementById('hours').innerHTML = hoursEnd;

};




function otschet(n){
    if(n<10){
        n = '0' + n;
    } 
    return n;
};

function clear(){

    [miliSeconds, seconds, minutes, hours]= [0, 0, 0, 0];
   
    document.getElementById('mili_seconds').innerHTML = '00';
    document.getElementById('seconds').innerHTML = '00';
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('hours').innerHTML = '00';
};

document.getElementById('clear').addEventListener('click', clear);

let  i = 1;
function circle(){
    
    let span = document.createElement('span');
    span.className = 'number_lap';
    span.innerHTML = 'Круг номер: ' + i + ' Время круга: ' + hoursEnd + ':' + minutesEnd + ':' + secondsEnd + ':' + miliSecondsEnd + 's';
    document.getElementById('lap').append(span);
    
    i++;
    /* span.replaceWith(span); */
}

document.getElementById('circle').addEventListener('click', circle);

saveBtn.addEventListener('click', function(){
    localStorage.setItem('Our_circle', lap.innerHTML);
})

removeBtn.addEventListener('click', function(){
    lap.innerHTML = '';
    localStorage.setItem('Our_circle',lap.innerHTML);
})
loadToDo();