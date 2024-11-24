const profile = {
    username: "Jacob",
    playTime: 300,
    
    // Method to change username
    changeUsername(newName) {
      this.username = newName;
    },
  
    // Method to update playtime
    updatePlayTime(hours) {
      this.playTime += hours;
    },
  
    // Method to get profile information
    getInfo() {
      return `${this.username} has ${this.playTime} active hours!`;
    }
  };
  
  // Display the initial info in the HTML
  document.getElementById("task-3-results").innerHTML = `<p>${profile.getInfo()}</p>`;
  
  // Change username and display updated info
  profile.changeUsername("Marco");
  document.getElementById("task-3-results").innerHTML += `<p>${profile.getInfo()}</p>`;
  
  // Update playtime and display final info
  profile.updatePlayTime(20);
  document.getElementById("task-3-results").innerHTML += `<p>${profile.getInfo()}</p>`;
  