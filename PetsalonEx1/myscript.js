//object literal as it's one salon

const salon = {
    name:"The Fashion Pets",
    phone:"5567893",
    address:{
        street:"Boughton Rd",
        number:"135-A"
    },
    workingHours:{
        days:"Mon - Fri",
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[],
    count:function(){
        alert("We have: "  + salon.pets.length + " pets registered.");
    }
}

//object destructuring

let {name,phone,address:{street,number},workingHours:{days,open,close}}=salon;

document.getElementById("col1").innerHTML=`<h2 class="display-4"> ${name}</h2> <p class="lead">Phone Number: ${phone} </p>`;

document.getElementById("col2").innerHTML=`<p class="lead"> Address Information</p> <p class="lead"> Street: ${street} ${number}</p>`;

document.getElementById("col3").innerHTML=`<p class="lead"> It is open ${days} from ${open} to ${close}.</p>`;


//object constructor
class Pet{
    constructor(name,age,breed,gender,service,ownerName,phoneContact){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.phoneContact=phoneContact;  
        this.hunger=10;
        this.happiness=5;      
    }
    ownerInfo = function(){
        console.log("Owner Name: " + this.ownerName + "\n" + "Contact Phone: " + this.phoneContact);
        
    }
    feed = function(){
        this.hunger-=10;
        this.happiness+=10;
        console.log("Feeding ...");        
    }
    status = function(){
        console.log("Hunger: " + this.hunger + "\n" + "Happiness: " + this.happiness);
    }
    
}

const pet1 = new Pet("Shaggy",2,"Boxer","Male","Shower","Sandie","32968");
const pet2 = new Pet("Sadie",3,"Chihuahua","Female","Clipping","Debbie","971238");
const pet3 = new Pet("Toby",8,"Lab","Female","Spa","Lois","399911"); 

console.log(salon);

//linking the salon and pets
salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

console.log(salon);
console.table(salon.pets);

salon.count();

//print in a division the information of the pets (use loop for)
var text = " ";
for(var i=0;i<salon.pets.length;i++){

   text += '<p> Name: ${salon.pets[i].name}<br> Age: ${salon.pets[i].age} <br> Breed: ${salon.pets[i].breed} <br> Gender: ${salon.pets[i].gender} <br> Service: ${salon.pets[i].service} <br> Owner: ${salon.pets[i].ownerName} <br> Phone Number: ${salon.pets[i].phoneContact} </p>';

}

document.getElementById("content").innerHTML=text;