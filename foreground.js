if (document.getElementById("magyarositas") === null) {
  let element = document.createElement("a");
  let elementTXT = document.createTextNode("Magyarosítás");
  element.setAttribute("id", "magyarositas");
  element.setAttribute(
    "href",
    "https://magyaritasok.hu/games/search?search=" +
      document.getElementById("appHubAppName").innerHTML
  );
  element.appendChild(elementTXT);
  element.classList.add("btnv6_blue_hoverfade");
  element.classList.add("language-support-link");
  document.getElementsByClassName("apphub_OtherSiteInfo")[0].prepend(element);
}

//add check icon to steam
/*
let iconCheck = document.createElement("i")
iconCheck.classList.add("gg-check")
document.getElementsByClassName("language-support-link")[0].appendChild(iconCheck)
*/

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
/*
let contentDiv = document.createElement("div");
contentDiv.setAttribute('id','content-00');
contentDiv.classList.add("btnv6_blue_hoverfade");
contentDiv.classList.add("content");
document.getElementsByClassName("apphub_OtherSiteInfo")[0].prepend(contentDiv);
*/
//add my own element to steam page
