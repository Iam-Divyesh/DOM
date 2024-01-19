let requestUrl = 'https://api.github.com/users/';
let username;

const card = document.querySelector(".card");

let gitUserName = document.querySelector('#gitusername');
let search = document.querySelector('#search');

search.addEventListener('click', function () {
    if (gitUserName.value !== "") {
        // Reset requestUrl to the original value before appending the username
        requestUrl = 'https://api.github.com/users/';
        requestUrl += gitUserName.value;

        // Reset the input field for the next search
        gitUserName.value = "";

        // Add the "show" class to the card
        card.classList.add("show");

        // Make the API request
        makeRequest(requestUrl);
    } else {
        alert('PLEASE ENTER A USERNAME FIRST');
    }
});

function makeRequest(url) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // Parse the JSON response
                let data = JSON.parse(this.responseText);

                // Update the DOM elements with the fetched data
                updateProfile(data);
            } else {
                alert('User not found. Please enter a valid GitHub username.');
            }
        }
    };
    xhr.send();
}

function updateProfile(data) {
    const image = document.querySelector("#image");
    const name = document.querySelector("#name");
    const bio = document.querySelector("#bio");
    const followers = document.querySelector("#followers");

    console.log(data)
    // Update DOM elements with fetched data
    image.src = data.avatar_url;
    name.innerHTML = data.name || "No Name";
    bio.innerHTML = data.bio || "No Bio";
    followers.innerHTML = data.followers || "0";
}
