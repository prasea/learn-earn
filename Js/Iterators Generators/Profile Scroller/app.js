
//Array of Objects
const data = [
    {
        name : 'Gary Wilson',
        age : 23,
        gender : 'male',
        looking_for : 'female',
        location : 'Damak',
        image : 'https://randomuser.me/api/portraits/men/55.jpg'
    },
    {
        name : 'Mary Rose',
        age : 32,
        gender : 'female',
        looking_for : 'male',
        location : 'Titanic',
        image : 'https://randomuser.me/api/portraits/women/55.jpg'
    },
    {
        name : 'Eddy Barnes',
        age : 34,
        gender : 'male',
        looking_for : 'female',
        location : 'Boulevard',
        image : 'https://randomuser.me/api/portraits/men/55.jpg'
    }
];


// Making Iterator function that takes Array of Profiles which Basically is above 'data'
function profileIterator(profiles){
    
    let nextIndex = 0; //Array Begins from 0

    return {
        next : function(){
            return nextIndex < profiles.length ?
            { value : profiles[nextIndex++], done : false} : 
            { done : true }
        }
    };
}

/*
const profiles = profileIterator(data);

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile(){
    const profile = profiles.next().value;
    // console.log(profile);

    document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item"> Name : ${profile.name} </li>
            <li class="list-group-item"> Age : ${profile.age} </li>
            <li class="list-group-item"> Lives in : ${profile.location} </li>
            <li class="list-group-item"> Preference : ${profile.gender} looking for ${profile.looking_for} </li>
        </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${profile.image}">`;

}

WE only have 3 Profiles in data Array. When WE click 'Next' for 3rd time WE get Error Saying
    TypeError: Cannot read property 'name' of undefined
B/c 'profile' Variable inside nextProfile() becomes UNDEFINED. WE can't read Property of undefined.

Solution to this Problem is to Check if Profile === UNDEFINED. If YES, Reload Using "window.location.reload()"

But WE don't have any Profile When Our DOMContentLoaded. nextprofile() is Called Only When 'Click' Event is Triggered.

Let's Call it Manually So it loads the first Profile i.e. nextProfile();

*/

const profiles = profileIterator(data);

nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile(){
    const profile = profiles.next().value;
    // console.log(profile);
    if(profile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item"> Name : ${profile.name} </li>
            <li class="list-group-item"> Age : ${profile.age} </li>
            <li class="list-group-item"> Lives in : ${profile.location} </li>
            <li class="list-group-item"> Preference : ${profile.gender} looking for ${profile.looking_for} </li>
        </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = `<img src="${profile.image}">`;
    } else{
        window.location.reload();
    }  
}

function unique(arr) {
  /* your code */
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));
// alert( unique(values) ); // Hare, Krishna, :-O