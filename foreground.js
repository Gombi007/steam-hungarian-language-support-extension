if (document.getElementById("magyarositas") === null) {
  let gameTitle = document.getElementById("appHubAppName").innerHTML;
  gameTitle = gameTitle.replaceAll("™", "");

  //create a container
  let container = document.createElement("a");
  container.setAttribute("id", "magyaritas");
  container.setAttribute(
    "href",
    "https://magyaritasok.hu/games/search?search=" + gameTitle
  );
  container.classList.add("btnv6_blue_hoverfade");

  //add my own magyarositasok link
  let element = document.createElement("p");
  let elementTXT = document.createTextNode("Magyarítás");
  element.appendChild(elementTXT);  
  element.classList.add("language-support-link");
  container.appendChild(element);
  
  //add check icon to steam
  let iconCheck = document.createElement("i");
  iconCheck.classList.add("gg-search");
  container.appendChild(iconCheck);  
  
  document
  .getElementsByClassName("apphub_OtherSiteInfo")[0]
  .prepend(container);
}

// just test for API
function communicatingWithMagyarositasokHU() {
  fetch("https://magyaritasok.hu/games/search?search=cyberpunk-2077", {
    headers: { "Access-Control-Allow-Origin": "*" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
      console.error(error);
    });
}
