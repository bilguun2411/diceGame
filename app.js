// Toglogchinn eeljiig uurchilj, 1r toglolgchiig 0 , 2r toglogchiig 1 gej temdegley
var activePlayer = 1;

//Toglogchdiin onoo hadgalah huvisagch 
var scores=[0,0];
//Toglogchiin eeljind avch baigaa onoog hadgalah huvisagch
var playerScore = 0;
//Shoonii ali talaaraa buuj bgaag hadgalah huvisagch heregtei 

//Program ehlehed beltgeh
window.document.getElementById('score-0').textContent = 0;
window.document.getElementById('current-0').textContent = 1000;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-1').textContent = 0;

var diceDom = document.querySelector('.dice');
diceDom.style.display='none';

document.querySelector('.btn-roll').addEventListener('click',function(){
    var dice = Math.floor(Math.random()*6+1);
    diceDom.style.display = 'block';
    diceDom.src= 'dice-'+ dice+'.png';
    // alert('shoo ' + dice+ ' talaaraa buulaa');
});


