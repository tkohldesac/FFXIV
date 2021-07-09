//Set the URL up. userKey will eventually be provided by a person. Using my own character for testing.//
const url = "https://xivapi.com/character/";
var userKey = "1814929";
var api_url = url + userKey;



console.log(api_url)

//This calls the function below to access the API//
getCharacter();
//This is the function that gets access to the API. //
async function getCharacter() {
    const response = await fetch(api_url);
    const character = await response.json();
    //This line gets and sets the character image in the JSON file
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
        // newElement will create a new div.
        let newElement = document.createElement('div');
        //Initialize the job acronym variable 
        let jobAcron;

        //Switch Case to set jobAcron = correct 3 letter Acronym

        //Set the 'id' to the jobName.
        newElement.setAttribute('id', `${jobName},${[i]}`);
        //Set the innerText to the jobName. This was to test ${jobName} but will eventually be changed to the ${jobAcron}.
        newElement.innerText = `${jobName}`;
        //This (currently not working). Supposed to set the backgroundImage to the icon for each job.
        newElement.style.backgroundImage = ".pages/images/Paladin.png";
        //Set classes. Kinda messing around with that backgroundCover. It isn't working so I'll probably completely forget this is here and not remove it. 
        newElement.setAttribute('class', 'backgroundCover')
            //document.getElementById selects the 'jobs' div, then appends the 'newElement' to the end. The result is that a div is created with all of the above attributes.
        document.getElementById('jobs').appendChild(newElement);

    }
    //Convert job names to job acronyms
    //Create Elements for each job

    //function to create divs
    // function addElement() {

    //     console.log(jobs[i].UnlockedState.Name);
    // }


    //This logs all the names of the jobs. Need to convert to the in-game acronyms



}