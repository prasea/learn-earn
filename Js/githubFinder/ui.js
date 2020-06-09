class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }
//Display profile in UI
    showProfile(user){
        // console.log(user);
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
				<div class="row">
				  <div class="col-md-3">
					<img class="img-fluid mb-2" src="${user.avatar_url}">
					<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View ${user.login} Profile</a>
				  </div>
				  <div class="col-md-9">
					<span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
					<span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
					<span class="badge badge-success">Followers: ${user.followers}</span>
					<span class="badge badge-info">Following: ${user.following}</span>
					<br><br>
					<ul class="list-group">
					  <li class="list-group-item">Company: ${user.company}</li>
					  <li class="list-group-item">Website/Blog: ${user.blog}</li>
					  <li class="list-group-item">Location: ${user.location}</li>
					  <li class="list-group-item">Member Since: ${user.created_at}</li>
					</ul>
				  </div>
				</div>
			</div>
			<h3 class="page-heading mb-3">Latest Repos</h3>
			<div id="repos"></div>
        `;
    }

    showRepos(repos){
        // console.log(repos); //Array of 5 repos
        let output = '';

        repos.forEach( repo =>{
            output += `
                <div class="card card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers : ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        document.getElementById('repos').innerHTML = output;
    }
// Show alert message if Profile Not Found
    showAlert(msg, className){

        this.clearAlerts();

        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));

        //Grab Parent
        const container = document.querySelector('.searchContainer');
        //Grab element before which You want to insert alert message
        const card = document.querySelector('.search');
        
        container.insertBefore(div,card);

        setTimeout( () =>{
            this.clearAlerts();
        } , 2000);
        
    }

// WE get multiple "User Not Found" Notification, if we continued entering invalid username. SOLUTION  is to Clear the alert, Before WE actually output it.
    clearAlerts(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }
}