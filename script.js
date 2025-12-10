
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("welcomeModal");
  const closeBtn = document.getElementById("closeWelcome");
  const enterBtn = document.getElementById("enterSite");

  if (!modal) return;

  if (!sessionStorage.getItem("olayinka_welcome_shown")) {
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
  }

  function closeModal() {
    modal.style.display = "none";
    sessionStorage.setItem("olayinka_welcome_shown", "true");
  }

  closeBtn.addEventListener("click", closeModal);
  enterBtn.addEventListener("click", closeModal);

  if (typeof gtag === "function") {
    gtag("event", "welcome_popup_viewed", {
      event_category: "engagement",
      event_label: "OlayinkaSocial Welcome Popup",
    });
  }
});



//.......................................Animation......................................................................
	console.log(gsap);

gsap.set(".animation .box", {
  borderRadius: 0,
});

gsap.to(".animation .box", {
  borderRadius: 100,
  duration: 1,
  y: -100,
  ease: "power1",
  yoyo: true,
  repeat: -1,
  stagger: {
    amount: 4, // total number of time in second
    each: 0.5, // amount of time in second between each sub tween start time
    from: 0, //from is the position in the array from each stagger element
  },
});


let date = new Date();
document
  .querySelectorAll(".todays")
  .forEach((span) => (span.innerHTML = date.toLocaleString()));

let clickUserProfile = document.querySelector(".nav-user-icon");

let hiddenToggleDetails = document.querySelector(".settings-menu");
clickUserProfile.addEventListener("click", (e) => {
  e.stopPropagation();
  hiddenToggleDetails.classList.toggle("settings-menu-height");
});

document.body.addEventListener("click", (e) => {
  if (!hiddenToggleDetails.contains(e.target)) {
    hiddenToggleDetails.classList.remove("settings-menu-height");
  }
});

let darkBtn = document.querySelector("#dark-btn");

darkBtn.addEventListener("click", () => {
  darkBtn.classList.toggle("on");

  document.body.classList.toggle("dark-mode");

  if (localStorage.getItem("mode") == "light") {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

document.body.addEventListener("mousedown", () => {
  hiddenToggleDetails.classList.add("hidden");
});

// this will be executed without clicking a button

if (localStorage.getItem("mode") == "light") {
  darkBtn.classList.remove("on");
  document.body.classList.remove("dark-mode");
} else if (localStorage.getItem("mode") == "dark") {
  darkBtn.classList.add("on");
  document.body.classList.add("dark-mode");
}
// this will be executed whenever people visit the website for the first time
else {
  localStorage.setItem("mode", "light");
}

// we use this concept to store the dark-mode or light-mode on our browser
//name   value
// localStorage.setItem('mode', 'dark')
//localStorage.getItem('mode') // we use to get value store  in the localstorage call mode

let deepBtn = document.querySelector("#deep-btn");
deepBtn.addEventListener("click", () => {
  deepBtn.classList.toggle("grey-is-on");
  document.body.classList.toggle("deep-mode");
});


