const CHAR_ARRAY = ["Mario", "Donkey Kong", "Link", "Samus", "Dark Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Luigi",
"Ness", "Captain Falcon", "Jigglypuff", "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik",
"Zelda", "Dr Mario", "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo",
"Roy", "Chrom", "Mr Game & Watch", "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario",
"Snake", "Ike", "Pokémon Trainer", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario",
"ROB", "Toon Link", "Wolf", "Villager", "Mega Man", "Rosalina", "Wii Fit Trainer", "Litle Mac",
"Greninja", "Palutena", "Pac-Man", "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud",
"Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K Rool", "Incineroar", 
"Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "MinMin", "Steve", "Sephiroth",
"Pyra Mythra", "Kazuya", "Mii Brawler", "Mii Swordsman", "Mii Gunner" ]

const OBJ_ARRAY = [
    { 
        name: "Mario",
        head: "00000000"
    },
    { 
        name: "Donkey Kong",
        head: "00080000"
    },
    { 
        name: "Link",
        head: "01000000"
    },
    { 
        name: "Samus",
        head: "05C00000"
    },
    { 
        name: "Dark Samus",
        head: "05C30000"
    },
    { 
        name: "Yoshi",
        head: "00030000"
    },
    { 
        name: "Kirby",
        head: "1F000000"
    },
    { 
        name: "Fox",
        head: "05800000"
    },
    { 
        name: "Pikachu",
        head: "19190000"
    },
    { 
        name: "Luigi",
        head: "00010000"
    },
    { 
        name: "Ness",
        head: "22800000"
    },
    { 
        name: "Captain Falcon",
        head: "06000000"
    },
    { 
        name: "Jigglypuff",
        head: "19270000"
    },
    { 
        name: "Peach",
        head: ""
    },
    { 
        name: "Daisy",
        head: ""
    },
    { 
        name: "Bowser",
        head: ""
    },
    { 
        name: "Ice Climbers",
        head: ""
    },
    { 
        name: "Sheik",
        head: ""
    },
    { 
        name: "Zelda",
        head: ""
    },
    { 
        name: "Dr Mario",
        head: ""
    },
    { 
        name: "Pichu",
        head: ""
    },
    { 
        name: "Falco",
        head: ""
    },
    { 
        name: "Marth",
        head: ""
    },
    { 
        name: "Lucina",
        head: ""
    },
    { 
        name: "Young Link",
        head: ""
    },
    { 
        name: "Ganondorf",
        head: ""
    },
    { 
        name: "Mewtwo",
        head: ""
    },
    { 
        name: "Roy",
        head: ""
    },
    { 
        name: "Chrom",
        head: ""
    },
    { 
        name: "Mr Game & Watch",
        head: ""
    },
    { 
        name: "Meta Knight",
        head: ""
    },
    { 
        name: "Pit",
        head: ""
    },
    { 
        name: "Dark Pit",
        head: ""
    },
    { 
        name: "Zero Suit Samus",
        head: ""
    },
    { 
        name: "Wario",
        head: ""
    },
    { 
        name: "Snake",
        head: ""
    },
    { 
        name: "Ike",
        head: ""
    },
    { 
        name: "Pokémon Trainer",
        head: ""
    },
    { 
        name: "Diddy Kong",
        head: ""
    },
    { 
        name: "Lucas",
        head: ""
    },
    { 
        name: "Sonic",
        head: ""
    },
    { 
        name: "King Dedede",
        head: ""
    },
    { 
        name: "Olimar",
        head: ""
    },
    { 
        name: "Lucario",
        head: ""
    },
    { 
        name: "ROB",
        head: ""
    },
    { 
        name: "Toon Link",
        head: ""
    },
    { 
        name: "Wolf",
        head: ""
    },
    { 
        name: "Villager",
        head: ""
    },
    { 
        name: "Mega Man",
        head: ""
    },
    { 
        name: "Rosalina",
        head: ""
    },
    { 
        name: "Wii Fit Trainer",
        head: ""
    },
    { 
        name: "Little Mac",
        head: ""
    },
    { 
        name: "Greninja",
        head: ""
    },
    { 
        name: "Palutena",
        head: ""
    },
    { 
        name: "Pac-Man",
        head: ""
    },
    { 
        name: "Robin",
        head: ""
    },
    { 
        name: "Shulk",
        head: ""
    },
    { 
        name: "Bowser Jr",
        head: ""
    },
    { 
        name: "Duck Hunt",
        head: ""
    },
    { 
        name: "Ryu",
        head: ""
    },
    { 
        name: "Ken",
        head: ""
    },
    { 
        name: "Cloud",
        head: ""
    },
    { 
        name: "Corrin",
        head: ""
    },
    { 
        name: "Bayonetta",
        head: ""
    },
    { 
        name: "Inkling",
        head: ""
    },
    { 
        name: "Ridley",
        head: ""
    },
    { 
        name: "Simon",
        head: ""
    },
    { 
        name: "Richter",
        head: ""
    },
    { 
        name: "King K Rool",
        head: ""
    },
    { 
        name: "Incineroar",
        head: ""
    },
    { 
        name: "Piranha Plant",
        head: ""
    },
    { 
        name: "Joker",
        head: ""
    },
    { 
        name: "Hero",
        head: ""
    },
    { 
        name: "Banjo & Kazooie",
        head: ""
    },
    { 
        name: "Terry",
        head: ""
    },
    { 
        name: "Byleth",
        head: ""
    },
    { 
        name: "MinMin",
        head: ""
    },
    { 
        name: "Steve",
        head: ""
    },
    { 
        name: "Sephiroth",
        head: ""
    },
    { 
        name: "Pyra Mythra",
        head: ""
    },
    { 
        name: "Kazuya",
        head: ""
    },
    { 
        name: "Mii Brawler",
        head: ""
    },
    { 
        name: "Mii Swordsman",
        head: ""
    },
    { 
        name: "Mii Gunner",
        head: ""
    },




]

const NUM_ARRAY = ["00000000", "00080000"]
/*


*/
const selectBox = document.getElementById("char-options");

for(let character of CHAR_ARRAY)
{
    let newOption = document.createElement("option");
    newOption.value = character;
    newOption.innerText = character;

    selectBox.appendChild(newOption);
}

document.getElementById("get-button").addEventListener("click", function() {
    //console.log(selectBox.value);
    document.querySelector("#amiibo-box h2").innerText = selectBox.value;
})


let url = "https://www.amiiboapi.com/api/amiibo/?character=zelda";

fetch(url)
.then(function(response) {
    return response.json();
}).then(function(json) {
    console.log(json);
})