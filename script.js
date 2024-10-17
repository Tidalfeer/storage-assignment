document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById("username");
    const saveBtn = document.getElementById("save-btn");
    const clearBtn = document.getElementById("clear-btn");
    const displayName = document.getElementById("display-name");

    function loadUsername () {
        const savedName = localStorage.getItem("username");
        if (savedName) {
            displayName.textContent = savedName;
        }
        else {
            displayName.textContent = "No Saved Usernames.";
        }
    }

    saveBtn.addEventListener("click", function(){
        localStorage.setItem("username", username);
        displayName.textContent = username;
    }
)
    clearBtn.addEventListener("click", function() {
        localStorage.removeItem("username");
        displayName.textContent = "No Saved Usernames.";
    }
)

    loadUsername();
});