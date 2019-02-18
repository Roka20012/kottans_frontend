"use strict";

const getUsers = () => {
    const url = new URL("https://randomuser.me/api/?results=6");
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        let users = JSON.parse(xhr.responseText).results;
        return users;
    }
};

let users = getUsers();
let container = document.querySelector(".container");

const addUsers = (users, container) => {
    let fragments = document.createDocumentFragment();

    let usersContainer = document.createElement("div");
    usersContainer.classList.add("users-container");

    users.forEach((el, i, array) => {
        let vstavka = `<img class="photo" src="${el.picture.large}"><span class="fullName">${el.name.first[0].toUpperCase() + el.name.first.slice(1, el.name.first.length)} ${el.name.last[0].toUpperCase() + el.name.last.slice(1, el.name.last.length)}</span><span class="gender">${el.gender}</span><span class="age">${el.dob.age}</span><span class="phone">${el.phone}</span>`;
        let user = document.createElement("div");
        // let gender = document.createElement("span");
        // let age = document.createElement("span");
        // let phone = document.createElement("span");
        // let firstName = el.name.first[0].toUpperCase() + el.name.first.slice(1, el.name.first.length);
        // let lastName = el.name.last[0].toUpperCase() + el.name.last.slice(1, el.name.last.length);
        // let fullName = document.createElement("span");
        // let img = new Image();

        // gender.textContent = el.gender;
        // age.textContent = el.dob.age;
        // phone.textContent = el.phone;
        // fullName.textContent = firstName + " " + lastName;

        // img.setAttribute("class", "photo");
        // img.src = el.picture.large;
        // gender.setAttribute("class", "gender");
        // age.setAttribute("class", "age");
        // phone.setAttribute("class", "phone");
        // fullName.setAttribute("class", "fullName");
        user.classList.add("user");
        user.classList.add(el.gender);
        user.innerHTML = vstavka;
        // user.append(img, fullName, gender, age, phone);
        usersContainer.appendChild(user);
    });

    fragments.appendChild(usersContainer);
    container.appendChild(fragments);
};

const showAllUsers = (users) => {
    let hideUsers = users || [...document.querySelectorAll(".hide")];

    hideUsers.forEach((el) => {
        el.classList.remove("hide");
    });
};

const getSelectedUsers = () => {
    if (showFemale.checked) {
        visibleUsers = [...document.querySelectorAll("div.female")];
        visibleUsersNames = [...document.querySelectorAll(".female .fullName")];
    } else if (showMale.checked) {
        visibleUsers = [...document.querySelectorAll("div.male")];;
        visibleUsersNames = [...document.querySelectorAll(".male .fullName")];
    } else {
        visibleUsers = [...document.querySelectorAll("div.user")];
        visibleUsersNames = [...document.querySelectorAll(".user .fullName")];
    }

    usersFirstName = visibleUsersNames.map((el) => {
        return el.textContent.split(" ")[0];
    });
};

const checkByGender = ({ target }) => {
    if (target === showMale) {
        female.forEach((el) => {
            el.classList.add("hide");
        });
        searchByName();

    } else if (target === showFemale) {
        male.forEach((el) => {
            el.classList.add("hide");
        });
        searchByName();
    } else if (target === showAll) {
        searchByName();
    }
};

addUsers(users, container);
let menu = document.getElementsByClassName("menu")[0];
let female = [...document.querySelectorAll("div.female")];
let male = [...document.querySelectorAll("div.male")];
let allUsers = document.querySelectorAll(".user");

const sortNameByIncrease = document.querySelector(".name-up");
const sortNameByDecrease = document.querySelector(".name-down");
const sortAgeByIncrease = document.querySelector(".age-up");
const sortAgeByDecrease = document.querySelector(".age-down");
const reset = document.querySelector(".reset");
const searchByNameInput = document.querySelector(".search-by-name");
const showFemale = document.querySelector(".female");
const showMale = document.querySelector(".male");
const showAll = document.querySelector(".all");


let visibleUsers;
let visibleUsersNames;
let usersFirstName;

let usersContainer = document.querySelector(".users-container");

menu.addEventListener("click", checkByGender);

const resetUsers = () => {
    let buttons = [...document.querySelectorAll("input[type='radio']")];
    let checkForEguality = false;
    buttons.forEach((el) => {
        if (el === buttons[buttons.length - 1]) el.checked = true;
        else if (el.checked) {
            el.checked = false;
            checkForEguality = true;
        }
    });

    searchByNameInput.value = "";
    searchByName();

    if (checkForEguality) {
        usersContainer.innerHTML = "";
        allUsers.forEach((el) => {
            usersContainer.appendChild(el);
        });

        showAllUsers();
    }
};

reset.addEventListener("click", resetUsers);

const sortByAge = ({ target }) => {
    if (target === sortAgeByIncrease || target === sortAgeByDecrease) {
        let allUsers = [...document.querySelectorAll(".user")];

        if (sortNameByDecrease.checked || sortNameByIncrease.checked) {
            if (sortNameByDecrease.checked) sortNameByDecrease.checked = false;
            else sortNameByIncrease.checked = false
        }

        let sortedUsers = allUsers.sort((a, b) => {
            let nameA = +a.childNodes[3].textContent;
            let nameB = +b.childNodes[3].textContent;

            return nameA - nameB;
        });

        usersContainer.innerHTML = "";

        if (target === sortAgeByDecrease) sortedUsers.reverse();

        sortedUsers.forEach((el) => {
            usersContainer.appendChild(el);
        });
    }
};

menu.addEventListener("click", sortByAge);

const sortByName = ({ target }) => {
    if (target === sortNameByIncrease || target === sortNameByDecrease) {
        let allUsers = [...document.querySelectorAll(".user")];

        if (sortAgeByDecrease.checked || sortAgeByIncrease.checked) {
            if (sortAgeByDecrease.checked) sortAgeByDecrease.checked = false;
            else sortAgeByIncrease.checked = false
        }

        let sortedUsers = allUsers.sort((a, b) => {
            let nameA = a.childNodes[1].textContent.split(" ")[0];
            let nameB = b.childNodes[1].textContent.split(" ")[0];

            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;

            return 0;
        });

        usersContainer.innerHTML = "";

        if (target === sortNameByDecrease) sortedUsers.reverse();

        sortedUsers.forEach((el) => {
            usersContainer.appendChild(el);
        });
    }
};

menu.addEventListener("click", sortByName);

function searchByName() {
    setTimeout(() => {
        let inputText = searchByNameInput.value;

        getSelectedUsers();

        if (!inputText) {
            showAllUsers(visibleUsers);
        } else {
            visibleUsersNames.forEach((el, i) => {
                if (!inputText) {} else if (inputText !== usersFirstName[i].slice(0, inputText.length)) {
                    visibleUsers[i].classList.add("hide");
                } else {
                    if (visibleUsers[i].classList.contains("hide")) {
                        visibleUsers[i].classList.remove("hide");
                    }
                }
            });
        }
    }, 0);
}

searchByNameInput.addEventListener("keydown", searchByName);