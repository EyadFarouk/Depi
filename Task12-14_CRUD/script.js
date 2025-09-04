let name = document.getElementById("name");
let price = document.getElementById("price");
let tax = document.getElementById("tax");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let count = document.getElementById("count");
let category = document.getElementById("category");

let tbody = document.querySelector("tbody");

let submit = document.querySelector("button");
console.log(submit);

let time = document.getElementById("time");
setInterval(() => {
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString() + " " + date.toLocaleDateString();
}, 1000);

let products;

let currentIndex;

if (localStorage.products != null) {
    products = JSON.parse(localStorage.products)
    showData();
} else {
    products = [];
}

submit.onclick = function () {
    if (name.value != "" && price.value != "" && category.value != "" && count.value < 100) {
        if (submit.innerHTML == "Create") {
            createProduct();
        } else {
            products[currentIndex].name = name.value;
            products[currentIndex].price = price.value;
            products[currentIndex].tax = tax.value;
            products[currentIndex].ads = ads.value;
            products[currentIndex].discount = discount.value;
            products[currentIndex].total = (+price.value + +tax.value + +ads.value) - +discount.value;
            products[currentIndex].count = count.value;
            products[currentIndex].category = category.value;
            products[currentIndex].dateUpdated = new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString();
            localStorage.setItem("products", JSON.stringify(products));
            clearData();
            showData();
            submit.innerHTML = "Create";
        }
    } else {
        alert("Please fill in all required fields");
    }
}

function createProduct() {
    let product = {
        name: name.value,
        price: price.value,
        tax: tax.value,
        ads: ads.value,
        discount: discount.value,
        total: (+price.value + +tax.value + +ads.value) - +discount.value,
        count: count.value,
        category: category.value,
        dateAdded : new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString(),
        dateUpdated : new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString()
    }
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    clearData();
    showData();
}
function clearData() {
    name.value = "";
    price.value = "";
    tax.value = "";
    ads.value = "";
    discount.value = "";
    count.value = "";
    category.value = "";
}
function showData() {
    let table = "";
    for (let i = 0; i < products.length; i++) {
        table += `
        <tr>
            <td>${i + 1}</td>
            <td>${products[i].name}</td>
            <td>${products[i].price}</td>
            <td>${products[i].tax}</td>
            <td>${products[i].total}</td>
            <td>${products[i].category}</td>
            <td>${products[i].dateAdded}</td>
            <td>${products[i].dateUpdated}</td>
            <td><button onclick="updateData(${i})" class="btn btn-warning">Update</button></td>
            <td><button onclick="deleteData(${i})" class="btn btn-danger">Delete</button></td>
        </tr>
        `
    }
    tbody.innerHTML = table;
}
function deleteData(i) {
    products.splice(i, 1);
    localStorage.products = JSON.stringify(products);
    showData();
}
function updateData(i) {
    name.value = products[i].name;
    price.value = products[i].price;
    tax.value = products[i].tax;
    ads.value = products[i].ads;
    discount.value = products[i].discount;
    count.value = products[i].count;
    category.value = products[i].category;
    submit.innerHTML = "Update";
    currentIndex = i;
}