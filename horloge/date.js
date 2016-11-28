// Initialise la fonction rafraichir qui a pour but de rafraichier la date toutes les secondes
var i = 0;
var minutes = 0;
var str_min;
var heures = 0;
var str_heures;
var jours = 1;
var str_jours;
var text;
var interval = setInterval( increment, 1000);

function increment(){
    i = i % 360 + 1;
    minutes = i;
    
    if (minutes >59)
    {
        i -= 60;
        minutes = 0;
        heures++;
    }
    str_min = minutes;
    if (minutes <= 9)
    {
        str_min = '0' + minutes;
    }
    if (heures >23)
    {
        heures -= 24;
        jours++;
    }
    str_heures = heures;
    if (heures <=9)
    {
        str_heures = '0' + heures;
    }
    
    text = 'Jour : ' + jours + '<br/>';
    text+= str_heures + ':' + str_min;
    document.getElementById("monDiv").innerHTML = text;
    
}