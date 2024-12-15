
    class Guerrier{ 
        constructor(attack,precision,vie,nom) 
        {
            this.attack = attack; /*Creation d'argument qui vont se placer au niveau du parametre attack lors de la creation d'objets */
            this.precision = precision; 
            this.vie = vie; 
            this.nom = nom;
        }  
    // getPrecision(){
    // const luck= Math.random        je n'ai pas fait de deuxiem fonction pour la precision car sa ne sert a rien 
    // return luck < this.precision}  mais si il y en avais une elle aurait ressembler a ca renvoyent true ou false 

    getAttack(ennemie){ 
        const luck= Math.random();
     if (luck<this.precision) { /* si le math random est inferieur a la precision donné au personnage le personnage attaque */
     ennemie.vie-= this.attack;/*enleve attaque au paramettre vie de l'ennemie*/
     console.log (`${this.nom} a reussie son attaque sur ${ennemie.nom}pv lui infligent ${this.attack} point de degat`) ;
     console.log ( ` il reste ${ennemie.vie} a ${ennemie.nom}`);
    }  
    else /*sinon le personnage rate son attaque */
    console.log (`${this.nom} a raté son attaque il reste ${ennemie.vie}pv a ${ennemie.nom} `);
    } 
}
var Leonard = new Guerrier(10,0.8,100,"Leonard"); /* Creation d'objets donc de combattants avec leur stats et nom mis a l'aide du constructor */
var Stuart = new Guerrier(20,0.4,100,"Stuart");

while (Leonard.vie >0 && Stuart.vie >0) { /*tant que les deux on encore de la vie le combat continue */
    console.log("=================new turn=====================")
Leonard.getAttack(Stuart); /* Leonard attaque Stuart (Stuart prends donc la place de ennemie dans la fonction GetAttack) */
Stuart.getAttack(Leonard);
console.log("==========================================")
}

if  (Leonard.vie <=0 && Stuart.vie <=0){ /*Egalité */
    console.log("======================================")
    console.log (`LES DEUX COMBATTANT SONT MORT`);
    console.log("======================================")
}
else if (Leonard.vie <= 0){ /* Leonard a plus de vie */
    console.log("======================================")
    console.log (`Stuart A GAGNER SON COMBAT `);
    console.log("======================================")
}   
else{ /*les autres condition sont fausse donc stuart gagne */
    console.log("======================================")
    console.log (`Leonard A GAGNER SON COMBAT `);
    console.log("======================================")
}

/*code pour exercice tabs*/
let contenuList=document.querySelectorAll(".contenu")/*Je crée une Nodelist avec contenu1,2et3 de mon html*/
let tabs=document.querySelectorAll(".tab")/*Je crée une Nodelist avec tab1,2et3 de mon html*/
let tab1=document.querySelector(".tab1") /*Je crée une variable prenant seulement mon tab1 de mon html*/
let tab2=document.querySelector(".tab2")/*Je crée une variable prenant seulement mon tab2 de mon html*/
let tab3=document.querySelector(".tab3")/*Je crée une variable prenant seulement mon tab3 de mon html*/
let contenu1=document.querySelector(".contenu1")/*Je crée une variable prenant seulement mon contenu1 de mon html*/
let contenu2=document.querySelector(".contenu2")/*Je crée une variable prenant seulement mon contenu2 de mon html*/
let contenu3=document.querySelector(".contenu3")/*Je crée une variable prenant seulement mon contenu3 de mon html*/

    tab1.addEventListener ("click",function(){ /*ajout d'evenement lorsque mon menu 1 est cliquer */
        tabs.forEach(function(tab){ /* réitère la function pour chaque element de ma Nodelist tabs */
            tab.classList.remove('active') /*retire tout les menus --> retire la class active au tabs */
        });
        tab1.classList.add('active')/*ajoute la class active au tab1 */
        contenuList.forEach(function(contenu){
            contenu.classList.remove('contenu-active')/*retire tout contenu grace a un display none dans le css --> retire la class contenu-active aux contenu */
        });
        contenu1.classList.add('contenu-active');/*Affiche le menu 1 grace a un display block dans le css de contenu-active */
       });


       tab2.addEventListener ("click",function(){ /*ajout d'evenement lorsque mon menu 2 est cliquer */
        tabs.forEach(function(tab){/* réitère la fonction pour chaque element de ma Nodelist tabs */
            tab.classList.remove('active')/*retire tout les menus --> retire la class active au tabs */
        });
        tab2.classList.add('active') /*ajoute la class active au tab2 */
        contenuList.forEach(function(contenu){/* réitère la function pour chaque element de ma Nodelist tabs */
            contenu.classList.remove('contenu-active')/*retire tout contenu grace a un display none dans le css --> retire la class contenu-active aux contenu */
        });
        contenu2.classList.add('contenu-active')/*Affiche le menu 2 grace a un display block dans le css de contenu-active */

       });

       tab3.addEventListener ("click",function(){/*ajout d'evenement lorsque mon menu 3 est cliquer */
        tabs.forEach(function(tab){ /* réitère la function pour chaque element de ma Nodelist tabs */
            tab.classList.remove('active')/*retire tout les menus --> retire la class active au tabs */
        });
        tab3.classList.add('active')/*ajoute la class active au tab3 */
        contenuList.forEach(function(contenu){ /* réitère la function pour chaque element de ma Nodelist contenuList */
            contenu.classList.remove('contenu-active'); /*retire tout contenu grace a un display none dans le css --> retire la class contenu-active aux contenu */
        });
        contenu3.classList.add('contenu-active')/*Affiche le menu 3 grace a un display block dans le css de contenu-active */
       });
