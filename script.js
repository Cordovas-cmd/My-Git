function Barry() {

    
    // A class that will represent a repo in terms of explaining and understanding the code behind git.
    
    function Git(name) {
        this.name = name; // Repo name
        this.lastCommitId = -1; // Keep track of last commit id.
        this.HEAD = null; // Reference to last Commit.
    }
    
    
    //   In order to make a repo now we will have to instantiate the Git class but pass it the name of the repository we will be creating.
    
    // var repo = new Git("my-repo");
    
    // In order to do this in the terminal we would type "git init" to initiate the creation of a git repository
    
    /* Next we will be creating a commit. A commit is a like a picture of your projects current contents, the code you had at the time of the commit.
    Each commit will have it's own unique identifier on github should you need to see the state of the code at that current time. 
    These commits together will build on each other and ultimately form the final and most updated version of your project.*/
    
    //    If we were to create a Commit class we would need to include and id to reference it and a change containing the code that has been changed since the last commit. For demonstration purposes we will write the following with no visual "change" update assuming that there will be a change.
    
    // We will also need to include a "message" that will be attached to our commit describing what's been changed. 
    
    function Commit(id, parent, message) {
        this.id = id;
        this.parent = parent;
        this.message = message;
      }
    
    Git.prototype.commit = function (message) {
        var commit = new Commit(++this.lastCommitId, this.HEAD, message);       
        
        // Update HEAD and current branch.
        this.HEAD = commit;
        return commit;
    };

    Git.prototype.log = function () {
		// Start from HEAD
		var commit = this.HEAD,
			history = [];

		while (commit) {
			history.push(commit);
			// Keep following the parent
			commit = commit.parent;
		}
        console.log(history)
		return history;
	};


    window.Git = Git;
};

Barry()

var repo = new Git("test");
repo.commit("Initial commit");
repo.commit("Change 1");

var log = repo.log();
console.log(log.length === 2); // Should have 2 commits.
console.log(!!log[0] && log[0].id === 1); // Commit 1 should be first.
console.log(!!log[1] && log[1].id === 0); // And then Commit 0.
