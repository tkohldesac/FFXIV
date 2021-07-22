//Set the URL up. userKey will eventually be provided by a person. Using my own character for testing.//
const url = "https://xivapi.com/character/";
// var userKey = "1814929";
var userKey = prompt("Bouch - 6693414 Sev - 1585713 Pacl - 5004548 Crux - 12450522 Gristle - 1814929 Zan - 9245936", "1814929");

var api_url = url + userKey;

if (userKey === null) {
    console.log("error")
} else {
    getCharacter();
}

console.log(api_url)

//This calls the function below to access the API//

//This is the function that gets access to the API. //
async function getCharacter() {
    const response = await fetch(api_url);
    const character = await response.json();
    //This line gets and sets the character image in the JSON file
    document.getElementById('userKey')

    document.getElementById('portrait').style.backgroundImage = "url(" + character.Character.Portrait + ")";
    //
    //Create elements for each job

    //Set icons to job icons
    //Add Acronym above job icons
    //Add levels next to job icons
    // document.getElementById('jobs')
    var jobs = character.Character.ClassJobs;

    //Create elements for inside the Jobs div
    for (i = 0; i < jobs.length; i++) {
        //Set jobName to the current iteration's UnlockedState.Name value
        let jobName = jobs[i].UnlockedState.Name;
        let jobLevel = jobs[i].Level;

        //Set the Character Name text above the portrait
        document.getElementById('userName').innerText = `Character Name: ${character.Character.Name}`;
        //set the Character ID text above the portrait
        document.getElementById('userKey').innerText = `Character ID: ${character.Character.ID}`;
        //Creates a new div that...
        let newElement = document.createElement('div');
        //...has the id of the job's name...
        newElement.setAttribute('id', `${jobName}`);

        //...And the string of the job's name and the job's level...
        newElement.innerText = `${jobName} - ${jobLevel}`;
        //... And the class of 'backgroundCover' to make sure background-size is 'cover'...

        newElement.className = "backgroundCover portrait jobDiv";
        //document.getElementById selects the 'jobs' div, then appends the 'newElement' to the end. The result is that a div is created with all of the above attributes.
        document.getElementById('jobs').appendChild(newElement);
        console.log(jobs[i].UnlockedState.Name);

        createImage();

        //This creates the icon image and prepends it to the job name
        async function createImage() {

            var img = document.createElement('img');
            var jobLower = jobs[i].UnlockedState.Name.toLowerCase().replace(/ /g, "")
            var jobImg = `/images/${jobLower}.png`
            img.src = `${jobImg}`;
            console.log(jobImg);

            img.className = "icon";

            if (jobName == "Paladin" || jobName == "Warrior" || jobName == "Gunbreaker" || jobName == "Dark Knight" || jobName == "Gladiator" || jobName == "Marauder") {
                img.className = "icon tankIcon";
            } else if (jobName == "White Mage" || jobName == "Astrologian" || jobName == "Scholar" || jobName == "Conjurer") {
                img.className = "icon healIcon";
            } else if (jobName == "Pugilist" || jobName == "Monk" || jobName == "Lancer" || jobName == "Dragoon" || jobName == "Rogue" || jobName == "Ninja" || jobName == "Samurai") {
                img.className = "icon dpsIcon meleeIcon";
            } else if (jobName == "Archer" || jobName == "Bard" || jobName == "Machinist" || jobName == "Dancer") {
                img.className = "icon dpsIcon rangedIcon";
            } else if (jobName == "Red Mage" || jobName == "Thaumaturge" || jobName == "Black Mage" || jobName == "Arcanist" || jobName == "Summoner" || jobName == "Blue Mage (Limited Job)") {
                img.className = "icon dpsIcon magicIcon";
            }
            document.getElementById(jobName).prepend(img);

        }
    }
    //Convert job names to job acronyms
    //Create Elements for each job

    //function to create divs
    // function addElement() {

    //     
    // }


    //This logs all the names of the jobs. Need to convert to the in-game acronyms



}