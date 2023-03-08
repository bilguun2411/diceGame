// Toglogchinn eeljiig uurchilj, 1r toglolgchiig 0 , 2r toglogchiig 1 gej temdegley
var activePlayer = 1;

//Toglogchdiin onoo hadgalah huvisagch 
var scores=[0,0];
//Toglogchiin eeljind avch baigaa onoog hadgalah huvisagch
var playerScore = 0;
//Shoonii ali talaaraa buuj bgaag hadgalah huvisagch heregtei 
var dice = Math.floor(Math.random()*6+1);

window.document.querySelector('#score-0').textContent = 0;
window.document.querySelector('#current-0').textCongtent = 0
document.querySelector('#score-1 ').textContent = 0;
document.querySelector('#score-1 ').textContent = 0 
 
document.querySelector('.dice').style.display = 'none';

console.log(dice);