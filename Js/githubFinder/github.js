class Github{
    constructor(){
        this.client_id = '329bbc977f7bec67c3e5';
        this.client_secret = '08f18dfc9395ad0440f493f400e9c66cc0f08f95';
        this.repos_count = 5;
        this.repos_sort = 'created : asc';
    }
    async getUsers(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }

    }
}