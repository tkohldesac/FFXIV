//Set the URL up. userKey will eventually be provided by a person. Using my own character for testing.//
const url = "https://xivapi.com/character/";
// var userKey = "1814929";

var userKey = prompt("Darken - 7319592 Suki - 21317276 Pacl1 - 5004548 Pacl 2 - 35037559 Topher - 1814929 Zan - 9245936", "1814929");



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
        // newElement will create a new div.

        document.getElementById('userName').innerText = `Character Name: ${character.Character.Name}`;
        document.getElementById('userKey').innerText = `Character ID: ${character.Character.ID}`;
        //Set the 'id' to the jobName.
        let newElement = document.createElement('div');
        newElement.setAttribute('id', `${jobName}`);
        newElement.innerText = `${jobName} ${jobLevel}`;
        //This (currently not working). Supposed to set the backgroundImage to the icon for each job.
        // newElement.style.backgroundImage = ;
        //Set classes. Kinda messing around with that backgroundCover. It isn't working so I'll probably completely forget this is here and not remove it. 
        newElement.setAttribute('class', 'backgroundCover')
            //document.getElementById selects the 'jobs' div, then appends the 'newElement' to the end. The result is that a div is created with all of the above attributes.
        document.getElementById('jobs').appendChild(newElement);
        console.log(jobs[i].UnlockedState.Name);

        createImage();

        //This creates the icon image and prepends it to the job name
        async function createImage() {

            var img = document.createElement('img');
            var jobLower = jobs[i].UnlockedState.Name.toLowerCase().replace(/ /g, "")
            var jobImg = `pages/images/${jobLower}.png`
            img.src = `${jobImg}`;
            console.log(jobImg);

            img.className = "icon";

            if (jobName == "Paladin" || jobName == "Warrior" || jobName == "Gunbreaker" || jobName == "Dark Knight") {
                img.className = "icon tankIcon";
            } else if (jobName == "White Mage" || jobName == "Astrologian" || jobName == "Scholar") {
                img.className = "icon healIcon";
            } else if (jobName == "Monk" || jobName == "Dragoon" || jobName == "Ninja" || jobName == "Samurai") {
                img.className = "icon dpsIcon meleeIcon";
            } else if (jobName == "Bard" || jobName == "Machinist" || jobName == "Dancer") {
                img.className = "icon dpsIcon rangedIcon";
            } else if (jobName == "Red Mage" || jobName == "Black Mage" || jobName == "Summoner" || jobName == "Blue Mage (Limited Job)") {
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