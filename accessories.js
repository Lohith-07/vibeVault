let containerAccessories = document.getElementById("containerAccessories");

function createBox(ob) {
    let boxDiv = document.createElement("div");
    boxDiv.id = "box";

    let link = document.createElement("a");
    link.href = "/contentDetails.html?" + ob.id;

    let img = document.createElement("img");
    img.src = ob.preview;

    let details = document.createElement("div");
    details.id = "details";

    let h3 = document.createElement("h3");
    h3.innerHTML = ob.name;

    let h4 = document.createElement("h4");
    h4.innerHTML = ob.brand;

    let h2 = document.createElement("h2");
    h2.innerHTML = "Rs " + ob.price;

    boxDiv.appendChild(link);
    link.appendChild(img);
    link.appendChild(details);
    details.appendChild(h3);
    details.appendChild(h4);
    details.appendChild(h2);

    return boxDiv;
}

let http = new XMLHttpRequest();
http.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let products = JSON.parse(this.responseText);

        for (let i = 0; i < products.length; i++) {
            if (products[i].isAccessory) {
                containerAccessories.appendChild(createBox(products[i]));
            }
        }
    }
};

http.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/product", true);
http.send();
