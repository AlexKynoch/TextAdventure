
// Define Object

let state = true;

class Room {
    constructor(name, description) {
        this._name = name;
        this._description = description;
        this._linkedRooms = {};
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }

    //   create describe method
    describe() {
        return "You are in the " + this._name + " where " + this._description;
    }

    // add link room method 
    linkRoom(direction, roomToLink) {
        this._linkedRooms[direction] = roomToLink;
    }

    move(direction) {
        console.log(direction in this._linkedRooms);
        if (direction in this._linkedRooms) {
            return this._linkedRooms[direction];
        } else {
            alert("You can't go that way");
            return this;
        }
    }



    //   all getters and setters and all methods that refer 
    //   to the class needs to be inside the class i.e. ones that use this.
    //   if you get error of method name is not a function fuction is prob in wrong place.
}

class Character {
    constructor(name, description) {
        this._name = name;
        this._description = description;
        this._conversation = {};

    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }

    //   create describe method

    talk() {
        return "You can see someone his name is " + this._name + " and " + this._description;
    }
}

class Item {
    constructor(name, description, state) {
        this._name = name;
        this._description = description;
        //this._conversation = {};
        this.state = state;

    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }

    set description(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._description = value;
    }
    //   create describe method

    describe() {
        return "You can see a " + this._name + " and " + this._description;
    }


}

console.log(Item.state);
// Enemy inherits everything from Character
class Enemy extends Character {
    constructor(name, description, conversation, weakness) {
        super(name, description, conversation);
        this._weakness = weakness;  // add unique property to enemy class
    }

    fight(item) {
        if (item = this._weakness) {
            return true;
        } else {
            return false;
        }
    }
    describe() {
        return "You can see a " + this._name + " and " + this._description;
    }

}


function displayRoomInfo(room) {  // this method is outside the class as is freestanding 
    textContent = room.describe();
    document.getElementById("textarea").innerHTML = room.describe();
    // document.getElementById("textarea").innerHTML = item.describe();
    // displayItemInfo();
    switch (currentRoom) {
        case Kitchen:
            document.getElementById("textarea2").innerHTML = Key.describe();
            let firstOptionKitchen = document.getElementById("option1").innerHTML = "1. take the key";
            let secondOptionKitchen=document.getElementById("option2").innerHTML = "";
            let thirdOptionKitchen=document.getElementById("option3").innerHTML = "";

            break;
        case Garden:
            document.getElementById("textarea2").innerHTML = Cricket.describe();
            let firstOptionGarden = document.getElementById("option1").innerHTML = "1. take the cricket";
            let secondOptionGarden=document.getElementById("option2").innerHTML = "";
            let thirdOptionGarden=document.getElementById("option3").innerHTML = "";

            break;
        case Ballroom:
            document.getElementById("textarea2").innerHTML = Net.describe();
            let firstOptionBallroom = document.getElementById("option1").innerHTML = "1. have a dance";
            let secondOptionBallroom=document.getElementById("option2").innerHTML = "2. take the net";
            let thirdOptionBallroom=document.getElementById("option3").innerHTML = "";
            break;
        case Office:
            document.getElementById("textarea2").innerHTML = Safe.describe() + " " + Pete.talk();
            let firstOptionOffice = document.getElementById("option1").innerHTML = "1. talk to pete";
            let secondOptionOffice=document.getElementById("option2").innerHTML = "2. fight with pete";
            let thirdOptionOffice=document.getElementById("option3").innerHTML = "";
            break;
        case Bathroom:
            document.getElementById("textarea2").innerHTML = Spider.describe();
            let firstOptionBathroom = document.getElementById("option1").innerHTML = "1. pick up the cute tarantula";
            let secondOptionBathroom = document.getElementById("option2").innerHTML = "";
            let thirdOptionBathroom = document.getElementById("option3").innerHTML = "";
            break;
        case Library:
            document.getElementById("textarea2").innerHTML = Flyer.describe();
            let firstOptionLibrary = document.getElementById("option1").innerHTML = "1. take the flyer and read it";
            let secondOptionLibrary=document.getElementById("option2").innerHTML = "";
            let thirdOptionibrary=document.getElementById("option3").innerHTML = "";
            break;
        case Entrance:
            document.getElementById("textarea2").innerHTML = Note.describe();
            let firstOptionEntrance = document.getElementById("option1").innerHTML = "1. take note";
            // if (firstOptionEntrance ="1. take note"){
            //     let hide = getElementById("option2");
            //     hide.style.display ="none";
            // }else{
            //     hide.style.display ="block";
            // }
            break;
        case Hall:
            document.getElementById("textarea2").innerHTML = FloorPlan.describe() + " " + Brian.talk();
            let firstOptionHall = document.getElementById("option1").innerHTML = "1. look at floor plan";
            let secondOptionHall = document.getElementById("option2").innerHTML = "2. Punch Brian";
            let thirdOptionHall = document.getElementById("option2").innerHTML = "2. talk to Brian";
            break;
        case DiningRoom:
            document.getElementById("textarea2").innerHTML = CandleStick.describe() + " " + SuitOfArmour.describe();
            let firstOptionDining = document.getElementById("option1").innerHTML = "1. look at candlestick";
            let secondOptionDining = document.getElementById("option2").innerHTML = "2. take candlestick";
            let thirdOptionDining = document.getElementById("option3").innerHTML = "1. whack suit of armour with candlestick";
            break;
        default:
            // code block
            document.getElementById("textarea2").innerHTML = "" + Brian.fight();
    }
    document.getElementById("usertext").focus();
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        command = document.getElementById("usertext").value;
        const directions = ["north", "south", "east", "west"]
        if (directions.includes(command.toLowerCase())) {
            currentRoom = currentRoom.move(command)
            displayRoomInfo(currentRoom);
            // return(currentRoom);
            // }else if{
            //     command = document.getElementById("").value;
            // const options = ["1", "2"]

            //     currentOption = currentOption.move(command)
            //     displayRoomInfo(currentRoom);
        } else {
            document.getElementById("usertext").value = ""
            alert("Thats is not a valid command please try again")
        }
    }
});


// Create instances of Room object

const Kitchen = new Room("Kitchen", "there is a sink, a small table and some chairs!");
const DiningRoom = new Room("Dining Room", "there is a large table, and an open fire!");
const Hall = new Room("Hall", "there are 4 doors, you can go north, south, east or west!");
const Ballroom = new Room("Ballroom", "You can see a dance floor and a big fish tank with no fish in it!");
const Library = new Room("Library", "there are lots of books!");
const Garden = new Room("Garden", "tall weeds cover the ground and there is a broken greenhouse!");
const Office = new Room("Office", "you feel like someone is watching you!");
const Bathroom = new Room("Bathroom", "you can see three empty cubicles a sink and a bath!");
const Entrance = new Room("Entrance", "there are stone steps that lead up to the huge Mansion, there is a carved wooden door that is open. GOAL..... your goal is to rob the safe and get away!!!");

// create instances of character object
const Pete = new Character("Pete", "Pete is a security guard!");
const Brian = new Character("Brian", "Brian is on Reception!")

// create instances of enemy object
const SuitOfArmour = new Enemy("suit of armour", "out the corner of your eye you see the armour move slightly towards you!");

// create instances of item object
const Key = new Item("key", "it is big and silver coloured - and looks like it might open a safe!");
const Flyer = new Item("flyer", "is a5 size and something is written on it");
const Spider = new Item("spider", "its a fluffy tarantula");
const Cricket = new Item("cricket", "looks like it is sunbathing on a rock!");
const Net = new Item("net", "the net has a fine mesh for catching fish!");
const Safe = new Item("safe", "the safe is locked! ");
const Note = new Item("note", "its a twenty pound note, just laying on the steps unnoticed!");
const FloorPlan = new Item("floor plan", "pictures that are framed on the wall")
const CandleStick = new Item("candle stick", "it looks heavy");

//link item to room

Kitchen.Item = Key;
Library.Item = Flyer;
Bathroom.Item = Spider;
Garden.Item = Cricket;
Ballroom.Item = Net;
Office.Item = Safe;
Entrance.Item = Note;
Hall.Item = FloorPlan;
DiningRoom.item = CandleStick;


//link Character to room

Office.Character = Pete;
Hall.Character = Brian;

//link Enemy to room;
DiningRoom.Enemy = SuitOfArmour;

console.log(Kitchen.Item);
console.log(Library.Item);
console.log(Bathroom.Item);
console.log(Garden.Item);
console.log(Ballroom.Item);
console.log(Office.Item);

// Aggregation object contains an instance of another object (embedded objects)

Hall.linkRoom("north", Kitchen);
Hall.linkRoom("east", Library);
Hall.linkRoom("south",Entrance);
Hall.linkRoom("west", Ballroom);

Kitchen.linkRoom("east", DiningRoom);
Kitchen.linkRoom("south", Hall);
Kitchen.linkRoom("west", Garden);

Garden.linkRoom("east", Kitchen);
Garden.linkRoom("south", Ballroom);

Ballroom.linkRoom("north", Garden);
Ballroom.linkRoom("east", Hall);
Ballroom.linkRoom("south", Office);

Office.linkRoom("north", Ballroom);
// Office.linkCharacter("Dave",Office);

Library.linkRoom("north", DiningRoom);
Library.linkRoom("south", Bathroom);
Library.linkRoom("west", Hall);

DiningRoom.linkRoom("south", Library);
DiningRoom.linkRoom("west", Kitchen);

Bathroom.linkRoom("north", Library);

Entrance.linkRoom("north", Hall);



// Lobby.linkRoom("south", Kitchen);
// console.log(Kitchen._linkedRooms);

// console.log(Kitchen.move("east"));
// console.log(Lobby.move("south"));

function startGame() {
    currentRoom = Entrance;
    displayRoomInfo(currentRoom);
    console.log(currentRoom);

}

function reply_click(clicked_id) {
    alert(clicked_id);
}


// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   }

//   function myFunction2() {
//     document.getElementById("demo2").innerHTML = "Hello World";
//   }
// document.getElementById("demo").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }


// console.log(Flyer.describe);
// document.getElementById("textarea2").innerHTML = Key.describe();
//console.log(currentRoom);

//  console.log(Dave.talk());
// console.log(Vase.describe());
// Kitchen.name = "Scullery";  // change the name of kitchen to scullery
// console.log(Kitchen.name);  // print new name to console

// console.log(Kitchen.describe()); // run describe method on Kitchen

// call describe method on kitchen and put content into the textarea

// document.getElementById("textarea").innerHTML = Kitchen.describe();

// switch(currentRoom) {
//     case Kitchen:
//         document.getElementById("textarea2").innerHTML = Key.describe();
//       break;
//     // case y:
//     //   // code block
//     //   break;
//     default:
//       // code block
//   document.getElementById("textarea2").innerHTML = "well that didnt work";
// }
// if (currentRoom === Kitchen){
//     document.getElementById("textarea2").innerHTML = Key.describe();
//     }
// // Display properties in console

// console.log(Kitchen._name);
// console.log(Kitchen._description);

// console.log(DiningRoom._name);
// console.log(DiningRoom._description);

// console.log(Hall._name);
// console.log(Hall._description);

// console.log(Ballroom._name);
// console.log(Ballroom._description);

// console.log(Lobby._name);
// console.log(Lobby._description);

startGame();  //calls the start game function.



