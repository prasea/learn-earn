const github = new Github();
const ui = new UI;

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', e =>{
    const userText = e.target.value;
    if(userText !== ''){
        // Make HTTP Call to github, done through github.js
        github.getUsers(userText)
            // .then( data => console.log(data));
            .then( data => {
                if(data.profile.message === "Not Found"){
                    //Show Alert
                    ui.showAlert('User Not Found', 'alert alert-danger');
                    ui.clearProfile();
                } else{
                    //Show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
       
    } else{ //When Backspce is entered to clear the Input Field, Clear Profile.
        ui.clearProfile();
    }
})