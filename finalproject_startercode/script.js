function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("recommendation_form_input");
  if (recommendation == null || recommendation.value == null || recommendation.value.trim() === "") {
    console.log("No recommendation provided");
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
    errorMessage.innerText = "Please enter a recommendation before submitting.";
    const recommendationForm = document.getElementById("recommendation-form_input");
    recommendationForm.style.border = "1px solid red";
  }
  // if the user has left a recommendation, display a pop-up and create a new recommendation element
  const recommendationForm = document.getElementById("recommendation_form_input");
  // Create a new recommendation element
  const newRecommendation = document.createElement("div");
  newRecommendation.className = "recommendation";
  newRecommendation.innerText = recommendation.value;
  // Append the new recommendation to the recommendations section
  const recommendationsSection = document.getElementById("recommendations");
  const allRecommendations = document.getElementById("all_recommendations");
  allRecommendations.appendChild(newRecommendation);
  recommendationsSection.appendChild(newRecommendation);
  // Show the popup
  showPopup(true);
  // Hide the popup after 3 seconds
  setTimeout(() => {
    showPopup(false);
  }, 3000);
  // Log the recommendation to the console
  console.log("New recommendation added:", recommendation.value);
  // Clear the input field
  recommendation.value = "";
  // Reset the border style of the input field
  recommendationForm.style.border = "1px solid #ccc";
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

//show div with class icon button only when the user scroll more than 100vh down the page

window.onscroll = function () {
  const iconButton = document.querySelector('.icon-button');
  if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
    iconButton.style.display = 'flex';
  } else {
    iconButton.style.display = 'none';
  }
}

//if screen is less than 768px show hamburger menu and after click on it show nav and resume on whole page

window.onresize = function () {
  if (screen.width < 768) {

  }
}


function smoothScrollToSections(section) {

  if (section === "home"){
    const homeSection = document.getElementById("home");
    homeSection.scrollIntoView({ behavior: "smooth" });
  }
  if (section === "about"){
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
  if (section === "contact"){
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
  if (section === "recommendations"){
    const recommendationsSection = document.getElementById("recommendations");
    recommendationsSection.scrollIntoView({ behavior: "smooth" });
  }
  if (section === "skills"){
    const skillSection = document.getElementById("skills");
    skillSection.scrollIntoView({ behavior: "smooth" });
  }
  if (section === "projects"){
    const projectSection = document.getElementById("projects");
    projectSection.scrollIntoView({ behavior: "smooth" });
  }
}

//function to open new tab and pdf file there

function openPdfFile(resumeUrl = 'resume.pdf'){
  try{
    const newTab = window.open(resumeUrl, '_blank', 'noopener,noreferrer');
    if(newTab){
      newTab.opener = null;
      newTab.focus();
      return;
    }
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    // Append to DOM, click, then remove
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (err) {
    console.error('Could not open resume:', err);
    alert('Unable to open résumé. You can download it from the site.');
  }
}
//add hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('hamburgerBtn');
  const menu = document.getElementById('navMenu');

  function toggleMenu() {
    const isOpen = btn.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(isOpen));
    //menu je open
    menu.classList.toggle('open', isOpen);
    menu.setAttribute('aria-hidden', String(!isOpen));
    //set

    if (isOpen) {
      const firstLink = menu.querySelector('button');
      if (firstLink) firstLink.focus();
    } else {
      btn.focus();
    }
  }

  btn.addEventListener('click', toggleMenu);

  btn.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggleMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.classList.contains('is-open')) {
      toggleMenu();
    }
  });

  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target) && btn.classList.contains('is-open')) {
      toggleMenu();
    }
  });
});







