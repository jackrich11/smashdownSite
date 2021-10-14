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

echoFighterBox.addEventListener("click", function() {
    
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

            //console.log(reAddEchoArray);
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

    
})

//Echo fighters: 
// Samus/DarkSamus (done)
// Peach/Daisy
// Simon/Richter
// Marth/Lucina
// Roy/Chrom
// Pit/Dark Pit (done)
// Ken/Ryu