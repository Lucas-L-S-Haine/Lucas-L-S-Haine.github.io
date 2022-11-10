const bar = document.createElement("nav");
const home = document.createElement("a");
const projects = document.createElement("a");
const about = document.createElement("a");
const contact = document.createElement("a");

home.href = "../index.html";
projects.href = "projects.html";
about.href = "about.html";
contact.href = "contact.html";

home.innerText = "Home";
projects.innerText = "Projects";
about.innerText = "About Me";
contact.innerText = "Contact Me";

bar.appendChild(home);
bar.appendChild(projects);
bar.appendChild(about);
bar.appendChild(contact);

document.body.insertBefore(bar, document.body.children[0]);
