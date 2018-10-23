let productList: any[] = [
    {
     pId:231,
     productName:"Samsung Galaxy Note 7",
     productPrice:"59000/-",
     productAvailable:true,
     imageUrl:"images/samsung-galaxy-note-7_gold.jpg",
     productDiscount: "15%",
     gold: {
         price: "60000",
         image: "images/SamsungGalaxy_Gold.jpg"
     },
     pinkGold: {
         price: "58000",
         image: "images/SamsungGalaxy_Pink.jpg"
     },
     silver: {
         price: "58500",
         image: "images/samsung-galaxy-note-7_silver.jpg"
     }
    },
    {
     pId:131,
     productName:"Samsung Galaxy S6 Edge",
     productPrice:"53499/-",
     productAvailable:true,
     imageUrl:"images/samsung_edge_silver.jpg",
     productDiscount: "25%",
     gold: {
        price: "55000",
        image: "images/samsung_edge_gold.jpg"
    },
    pinkGold: {
        price: "54000",
        image: "images/samsung_edge_black.jpg"
    },
    silver: {
        price: "53499",
        image: "images/samsung_edge_silver.jpg"
    }
    },
    {
     pId:875,
     productName:"Nokia Lumia 640XL",
     productPrice:"14990/-",
     productAvailable:false,
     imageUrl:"images/lumia_640xl.jpg",
     productDiscount: "5%",
     gold: {
        price: "16200",
        image: "images/lumia_640xl.jpg"
    },
    pinkGold: {
        price: "15000",
        image: "images/nokialumia_pink.jpg"
    },
    silver: {
        price: "14990",
        image: "images/lumia_silver.jpg"
    }
    }
 ]

function getMobileDetails(productName:string, productId:number) {
    let filteredList = productList.filter((productList)=>(productList.pId === productId));
    localStorage.setItem("Product",JSON.stringify(filteredList[0]));
    window.open("productdetail.html");
}


