// Toglogchinn eeljiig uurchilj, 1r toglolgchiig 0 , 2r toglogchiig 1 gej temdegley
var activePlayer = 0;

//Toglogchdiin onoo hadgalah huvisagch 
var scores=[0,0];
//Toglogchiin eeljind avch baigaa onoog hadgalah huvisagch
var roundScore = 0;
//Shoonii ali talaaraa buuj bgaag hadgalah huvisagch heregtei 

//Program ehlehed beltgeh
window.document.getElementById('score-0').textContent = 0;
window.document.getElementById('current-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-1').textContent = 0;

//ehelhees umnu shoonii zurag arilgah
var diceDom = document.querySelector('.dice');
diceDom.style.display='none';


//shoog shideh event listener
document.querySelector('.btn-roll').addEventListener('click',function(){
    //1-6 dotor sanamsargui too gargaj avah
    var dice = Math.floor(Math.random()*6+1);

    //shoonii surgiig gargaj ireh
    diceDom.style.display = 'block';

    //buusan toond hargalzah zurgiig web deer gargaj ireh
    diceDom.src= 'dice-'+ dice+'.png';

    //buusan too ni 1s ylgaatai bol active player Toglogchiin eeljiin onoog uurchlunu
    if(dice !==1){
        //1s ylgaatai too buulaa buusan toog toglogchid nemj ugnu 
        roundScore = roundScore + dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else{  
        //1buusan toglogchiin eeljiig end solij ugnu 
        switchToNextPlayer();

    }
});

//hold tovchnii eventListener
document.querySelector('.btn-hold').addEventListener('click',function(){
    //ug toglogchiin tsugluulsan onoog global onoo deer nemne
    scores[activePlayer] = scores[activePlayer] + roundScore;

    //delgets deer onoog uutchilne 
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    //eeljiin onooog 0 bolgono  
    roundScore=0
    document.getElementById('current-'+activePlayer).textContent =0;
    //ug toglogch hojson esehiigshalgah
    if(scores[activePlayer]>=20){
        //ylahgch gsen text g nernii orond gargana
        document.getElementById('name-'+ activePlayer).textContent='Ylagch !!!!'
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');   
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');   
    } else {
        switchToNextPlayer();
    };
    //toglogchiin eeljiig solino
    // switchToNextPlayer();
});

// daraagiin toglogch ruu shljuuleh
function switchToNextPlayer(){
    roundScore=0
    document.getElementById('current-'+activePlayer).textContent = 0;

    
    //herev idhivte tologch iin too 1 buuval active player g uurchlu
    //ugui bol 0 bolgono
    
    activePlayer===0 ? (activePlayer=1) : (activePlayer = 0);
    
    //ulaan tseg shljuuleh
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    //shoog tur alga bolgoh
    diceDom.style.display='none'

};


