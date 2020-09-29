const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// IMAGES -------------

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

let mainContentImg = document.getElementById("middle-img");
mainContentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// NAV ----------------

let headerLinks = document.querySelectorAll("nav a");
headerLinks[0].textContent = siteContent.nav["nav-item-1"]
headerLinks[1].textContent = siteContent.nav["nav-item-2"]
headerLinks[2].textContent = siteContent.nav["nav-item-3"]
headerLinks[3].textContent = siteContent.nav["nav-item-4"]
headerLinks[4].textContent = siteContent.nav["nav-item-5"]
headerLinks[5].textContent = siteContent.nav["nav-item-6"]

headerLinks[0].style.color = "green";
headerLinks[1].style.color = "green";
headerLinks[2].style.color = "green";
headerLinks[3].style.color = "green";
headerLinks[4].style.color = "green";
headerLinks[5].style.color = "green";

let parent = document.querySelector("nav")
let newLink1 = document.createElement("a");
newLink1.textContent = "Blog";
newLink1.href = "#";
let newLink2 = document.createElement("a");
newLink2.textContent = "Team";
newLink2.href = "#";
parent.appendChild(newLink1);
parent.prepend(newLink2);

newLink1.style.color = "green";
newLink2.style.color = "green";

// CTA ----------------
// Header

let mainHeader = document.querySelector(".cta-text h1");
mainHeader.textContent = siteContent.cta.h1;

mainHeader.innerHTML = "DOM<br> Is<br> Awesome";

// Button

let mainButton = document.querySelector(".cta-text button");
mainButton.textContent = siteContent.cta.button;

// Main-Content --------
// Top Headers 

let mainTopHeaders = document.querySelectorAll(".top-content .text-content h4");
mainTopHeaders[0].textContent = siteContent["main-content"]["features-h4"];
mainTopHeaders[1].textContent = siteContent["main-content"]["about-h4"];

// Bottom Headers 

let mainBotHeaders = document.querySelectorAll(".bottom-content .text-content h4");
mainBotHeaders[0].textContent = siteContent["main-content"]["services-h4"];
mainBotHeaders[1].textContent = siteContent["main-content"]["product-h4"];
mainBotHeaders[2].textContent = siteContent["main-content"]["vision-h4"];

// Top Paragraphs

let mainTopParas = document.querySelectorAll(".top-content .text-content p");
mainTopParas[0].textContent = siteContent["main-content"]["features-content"];
mainTopParas[1].textContent = siteContent["main-content"]["about-content"];

// Bottom Paragraphs

let mainBotParas = document.querySelectorAll(".bottom-content .text-content p");
mainBotParas[0].textContent = siteContent["main-content"]["services-content"];
mainBotParas[1].textContent = siteContent["main-content"]["product-content"];
mainBotParas[2].textContent = siteContent["main-content"]["vision-content"];

// Contact ------------
// Header

const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];

// Paragraphs

const contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent.contact["address"];
contactInfo[1].textContent = siteContent.contact["phone"];
contactInfo[2].textContent = siteContent.contact["email"];

contactInfo[0].innerHTML = "123 Way 456 Street<br> Somewhere, USA"

// Copyright ----------

const footerCopyright = document.querySelector("footer p");
footerCopyright.textContent = siteContent.footer["copyright"];

// I'm so proud of myself, it's silly. I had help in the beginning but everything else, I figured out on my own!!!
