let retrieveProduct = JSON.parse(localStorage.getItem("Product"));
document.getElementById("pName").innerHTML = retrieveProduct.productName;
document.getElementById("pPrice").innerHTML = retrieveProduct.productPrice;
document.getElementById("pAvailable").innerHTML = retrieveProduct.productAvailable;
document.getElementById("pDiscount").innerHTML = retrieveProduct.productDiscount;
document.getElementById("gold").innerHTML = retrieveProduct.gold.price;
document.getElementById("pinkgold").innerHTML = retrieveProduct.pinkGold.price;
document.getElementById("silver").innerHTML = retrieveProduct.silver.price;
document.getElementById("phoneImage").setAttribute("src",retrieveProduct.imageUrl);

function getMobileByColor(color:string) {
    if (color === 'gold') {
        document.getElementById("phoneImage").setAttribute("src",retrieveProduct.gold.image);
        document.getElementById("pPrice").innerHTML = retrieveProduct.gold.price;
    } else if (color === 'silver') {
        document.getElementById("phoneImage").setAttribute("src",retrieveProduct.silver.image);
        document.getElementById("pPrice").innerHTML = retrieveProduct.silver.price;
    } else {
        document.getElementById("phoneImage").setAttribute("src",retrieveProduct.pinkgold.image);
        document.getElementById("pPrice").innerHTML = retrieveProduct.gold.price;
    }
    
}