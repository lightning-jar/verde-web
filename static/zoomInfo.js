
// check if user is from the EU
function checkUserIP() {
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      console.log("Country:", data.country_name);

      // Check if user is from the US
      if (data.country_code === "US") {
        console.log(
          "This user is from the US. The ZoomInfo tracker will be loaded.",
        );
      }
      // Check if the country code is in the list of EU countries
      else {
        console.log(
          "This user is not from the US. The ZoomInfo tracker will not be loaded.",
        );
        return;
      }
    })
    .catch((error) => {
      console.error("Error fetching IP data:", error);
      return;
    });
}

// Call the function when the script loads
console.log("loading ZoomInfo tracker...	");
checkUserIP();

// project key
const key = "399e3ae76d1705076706";
window["ZIProjectKey"] = key;

// tracking script element
const zi = document.createElement("script");
zi.type = "text/javascript";
zi.async = true;
zi.src = "https://js.zi-scripts.com/zi-tag.js";

// append to body
if (document.readyState === "complete") {
  document.body.appendChild(zi);
} else {
  window.addEventListener("load", function () {
    document.body.appendChild(zi);
  });
}
