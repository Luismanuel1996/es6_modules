import Wishlist from "./wishlist";

const submitForm = document.querySelector("#submitForm");

const makeInput = document.querySelector("#makeInput");
const modelInput = document.querySelector("#modelInput");
const yearInput = document.querySelector("#yearInput");

const carMake = document.querySelector("#car-make");
const carModel = document.querySelector("#car-model");
const carYear = document.querySelector("#car-year");

const removeButton = document.querySelector(".removeBtn");
const unorderedList = document.querySelector("ul");

submitForm.addEventListener("submit", addCar);
removeButton.addEventListener("click", removeCar)

const wishlist = new Wishlist();


function showCarDetails(car) {
    carMake.textcontent = car.make ;
    carModel.textContent = car.model ;
    carYear.textContent = car.year ;
    removeButton.disabled = false ;
    removeButton.setAttribute("data-carId", car.Id);
}

function updateDOMList(){
    unorderedList.innerHTML = "";
    wishlist.list.forEach((car) => {
        const li = document.createElement("li");
        li.textContent = `${car.make} ${car.model} ${car.year} `;
        li.addEventListener("click", () => {
        showCarDetails(car)
    });
        unorderedList.appendChild(li);    
});
}

function addCar (event){
    event.preventDefault();
    wishlist.add(makeInput.value, modelInput.value, yearInput.value);
    updateDOMList();
}

function removeCar(){
    let carId = Number(removeButton.getAttribute("data-carId"));
    wishlist.remove(carId);
    updateDOMList();
    carMake.textcontent = "";
    carModel.textContent = "";
    carYear.textContent = "";
    removeButton.disabled = true;
}

