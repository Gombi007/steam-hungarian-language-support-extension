let element = document.createElement("a");
let elementTXT = document.createTextNode("Magyarosítás");
element.setAttribute('href', "http://google.com");
element.appendChild(elementTXT);
element.classList.add('btnv6_blue_hoverfade');
element.classList.add('language-support-link');

console.log(document.getElementsByClassName('apphub_OtherSiteInfo')[0].appendChild(element));
console.log(document.getElementsByClassName('apphub_OtherSiteInfo')[0]);
