// Get a reference to the audio element
const menuSound = document.getElementById("menuSound");

// Get a reference to your menu items
const menuItems = document.querySelectorAll(".nav-links ul li");

// Add event listeners to each menu item
menuItems.forEach((menuItem) => {
    menuItem.addEventListener("mouseenter", () => {
        // Play the menu switch sound when a menu item is hovered over
        menuSound.play();
    });
});
function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);


function showStory(index) {
    // Hide all stories
    var stories = document.querySelectorAll('.story');
    stories.forEach(function(story) {
        story.style.display = 'none';
    });

    // Show the selected story
    var selectedStory = document.getElementById('story' + (index + 1));
    if (selectedStory) {
        selectedStory.style.display = 'block';
    }
}


// TIME SELECTION 
function showNewYorkTime() {
  const newYorkTime = new Date();
  newYorkTime.setUTCHours(newYorkTime.getUTCHours() - 4);
  const formattedTime = newYorkTime.toLocaleTimeString('en-US', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  });
  document.getElementById('newYorkTime').innerHTML = formattedTime;
}

function showLondonTime() {
  const londonTime = new Date();
  londonTime.setUTCHours(londonTime.getUTCHours() + 1);
  // ... (similar formatting and element update as in showNewYorkTime)
}

function showHongKongTime() {
  const hongKongTime = new Date();
  hongKongTime.setUTCHours(hongKongTime.getUTCHours() + 8);
  // ...
}

function showJohannesburgTime() {
  const johannesburgTime = new Date();
  johannesburgTime.setUTCHours(johannesburgTime.getUTCHours() + 2);
  // ...
}

function showSaudiArabiaTime() {
  const saudiArabiaTime = new Date();
  saudiArabiaTime.setUTCHours(saudiArabiaTime.getUTCHours() + 3);
  // ...
}

showNewYorkTime();
showLondonTime();
showHongKongTime();
showJohannesburgTime();
showSaudiArabiaTime();

setInterval(showNewYorkTime, 1000);
setInterval(showLondonTime, 1000);
setInterval(showHongKongTime, 1000);
setInterval(showJohannesburgTime, 1000);
setInterval(showSaudiArabiaTime, 1000);



// API NEWS SCRIPT
const container = document.querySelector(".container"); 
const optionsContainer = document.querySelector(".options-container");

// "zam" stands for Zambia
const country = "in";

const options = [
    "general",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
];

// 100 requests per day
let requestURL;

// Create cards from data
const generateUI = (articles) => {
    for (let item of articles) {
        let card = document.createElement("div");
        card.classList.add("news-card");
        card.innerHTML = `
            <div class="news-image-container">
                <img src="${item.urlToImage || "newspaper.jpg"}" alt=""/>
            </div>
            <div class="news-content">
                <div class="news-title">${item.title}</div>
                <div class="news-description">
                    ${item.description || item.content || ""}
                </div>
                <a href="${item.url}" target="_blank" class="view-button">Read More</a>
            </div>`;
        container.appendChild(card);
    }
}; 

// News API Call
const getNews = async () => {
    container.innerHTML = "";
    let response = await fetch(requestURL);
    if (!response.ok) {
        alert("Data unavailable at the moment. Please try again later.");
        return false;
    }
    let data = await response.json();
    generateUI(data.articles);
};

const createOptions = () => {
    for (let option of options) {
        let button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => {
            requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${option}&apikey=${apikey}`;
            getNews();
        });
        optionsContainer.appendChild(button);
    }
};

const init = () => {
    optionsContainer.innerHTML = "";
    getNews();
    createOptions();
};

window.onload = () => {
    requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apikey=${apikey}`;
    init();
};
const speedText = document.querySelector('.speed-text');
const baseSpeed = Math.floor(1674.4); // Extract whole number part of speed

function updateSpeed() {
  const randomDigits = Math.floor(Math.random() * 900) + 100; // Generate random 3-digit number
  const lastThreeDigits = randomDigits.toString().padStart(3, '0'); // Ensure 3 digits with leading zeros
  speedText.textContent = `Earth's Rotation Speed: ${baseSpeed}.${lastThreeDigits} km/h`;
}

updateSpeed(); // Initial display
setInterval(updateSpeed, 1000); // Update every second (adjust as needed)
