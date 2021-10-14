let pkmnSeperated = false;

const POKEMON_ARRAY = ["charizard", "ivysaur", "squirtle"];

const pkmnBox = document.getElementById("pkmn-box");
const pkmnBoxImage = document.querySelector("#pkmn-box > img");
const uncheckBoxLink = "https://img.icons8.com/ios/150/000000/unchecked-checkbox.png";
const checkboxLink = "https://img.icons8.com/ios/150/000000/checked-2--v1.png";

const pkmnTd = document.getElementById("pkmn-trainer").parentElement;
const pkmnRow = pkmnTd.parentElement;

function editPkmn() {
        pkmnSeperated = !pkmnSeperated;
    
        for(let pkmn of POKEMON_ARRAY)
        {
            if(pkmnSeperated)
            {
                
                //Create new img for pkmn
                let pkmnImage = document.createElement("img");
                pkmnImage.src = "../../icons/pkmn/" + pkmn + ".png";
                pkmnImage.id = pkmn;
                pkmnImage.className = "icon";
    
                //Create new table cell w/ img and add to row
                let pkmnCell = document.createElement("div");
                pkmnCell.className = "td";
                pkmnCell.appendChild(pkmnImage);
    
                
                pkmnTd.insertAdjacentElement("afterend", pkmnCell);
    
                if(pkmn === "squirtle")
                {
                    pkmnRow.removeChild(pkmnTd);
                }
                    
    
                pkmnBoxImage.src = checkboxLink;
            }
            else
            {
                
    
                let deleteTd = document.getElementById(pkmn).parentElement;
                let priorElement = deleteTd.previousElementSibling;
    
                if(pkmn === "squirtle")
                {
                    deleteTd.insertAdjacentElement("beforebegin", pkmnTd);
                }
    
                pkmnRow.removeChild(deleteTd);
    
                //Figure out how to add back in the normal pkmn trainer
    
    
    
                pkmnBoxImage.src = uncheckBoxLink;
            } 
        }
        
    }

pkmnBox.addEventListener("click", editPkmn);

///////////////////////////////

const ECHOFIGHTER_ARRAY = [
    {   
        main: "samus",
        echo: "dark-samus", 
        combined: "SamusDarkSamus"
    },
    {
        main: "pit",
        echo: "dark-pit",
        combined: "PitDarkPit"
    },
    {
        main: "peach",
        echo: "daisy",
        combined: "PeachDaisy"
    },
    {
        main: "marth",
        echo: "lucina",
        combined: "MarthLucina"
    },
    {
        main: "roy",
        echo: "chrom",
        combined: "RoyChrom"
    },
    {
        main: "ryu",
        echo: "ken",
        combined: "RyuKen"
    },
    {
        main: "simon",
        echo: "richter",
        combined: "SimonRichter"
    }
]


let echoFightersCombined = false;

const fighterTable = document.getElementsByClassName("character-table")[0];
const echoFighterBox = document.getElementById("echo-box");
const echoFighterBoxImage = document.querySelector("#echo-box > img");

//const uncheckBoxLink = "https://img.icons8.com/ios/150/000000/unchecked-checkbox.png";
//const checkboxLink = "https://img.icons8.com/ios/150/000000/checked-2--v1.png";

function editEchoFighters() {

    echoFightersCombined = !echoFightersCombined;

    for(let echoPair of ECHOFIGHTER_ARRAY)
    {
        let pairRow = document.getElementById(echoPair.main).parentElement.parentElement;
        let mainCell = document.getElementById(echoPair.main).parentElement;

        if(echoFightersCombined)
        {
            //Get char to erase
            let echoCell = document.getElementById(echoPair.echo).parentElement;

            //Add to array to re-add later and remove fighter
            echoPair.readd = echoCell;
            pairRow.removeChild(echoCell);

            //Change to combined pic
            mainCell.firstChild.src = "../icons/combinedechos/" + echoPair.combined + ".png";

            //Update checkbox
            echoFighterBoxImage.src = checkboxLink;

        }
        else
        {
            //Re-add the echo fighter that was erased
            mainCell.insertAdjacentElement("afterend", echoPair.readd);
            
            //Change pic back to single original fighter
            mainCell.firstChild.src = "../icons/" + echoPair.main + ".png";

            //Change check box pic back 
            echoFighterBoxImage.src = uncheckBoxLink;

        }
    }

    
}

echoFighterBox.addEventListener("click", editEchoFighters);


///////////////

let miiFightersSeperated = false;

const MII_ARRAY = ["mii-gunner", "mii-swordsman", "mii-brawler"];
const miiBox = document.getElementById("mii-box");
const miiBoxImage = document.querySelector("#mii-box > img");

function editMiiFighters() {
    miiFightersSeperated = !miiFightersSeperated;

    for(let mii of MII_ARRAY)
    {
        if(miiFightersSeperated) //combine them
        {
            let currentMii = document.getElementById(mii).parentElement;
            //Add a new single image and delete the three individuals
            if(mii == "mii-brawler")
            {
                let newMiiImg = document.createElement("img");
                newMiiImg.src = "../icons/mii.png";
                newMiiImg.class = "icon";
                newMiiImg.id = "mii";

                let newMiiDiv = document.createElement("div");
                newMiiDiv.className = "td";

                newMiiDiv.appendChild(newMiiImg);
                document.getElementById(mii).parentElement.insertAdjacentElement("beforebegin", newMiiDiv);
            }
            
            fighterTable.removeChild(currentMii);
            

            //Change image to checked box
            miiBoxImage.src = checkboxLink;
        }
        else //seperate them
        {
            //Single mii fighter div
            let singleMii = document.getElementById("mii").parentElement;

            //create an image for each mii, add it to respective div
            let newMiiImg = document.createElement("img");
            newMiiImg.src = "../icons/miiicons/" + mii + ".png";
            newMiiImg.class = "icon";
            newMiiImg.id = mii;

            //New div to add mii image to
            let newMiiDiv = document.createElement("div");
            newMiiDiv.className = "td";

            //append to the new div
            newMiiDiv.appendChild(newMiiImg);

            //insert new fighter after the single mii
            singleMii.insertAdjacentElement("afterend", newMiiDiv);

            //once all the individual fighters are added, remove the single mii div
            if(mii === "mii-brawler")
            {
                fighterTable.removeChild(singleMii);
            }

            //Change image to unchecked box
            miiBoxImage.src = uncheckBoxLink;
        }
    }
}

miiBox.addEventListener("click", editMiiFighters);

//////////////

const resetBox = document.getElementById("reset-box");

function resetFighterTable()
{
    if(echoFightersCombined)
    {
        editEchoFighters();
    }
    if(miiFightersSeperated)
    {
        editMiiFighters();
    }
    if(pkmnSeperated)
    {
        editPkmn();
    }
}

resetBox.addEventListener("click", resetFighterTable);




