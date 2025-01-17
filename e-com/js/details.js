let itemList = [];

document.getElementById("add-to-cart").addEventListener("click", function () {
  let productId = this.getAttribute("data-product-id");
  let productName = this.getAttribute("data-product-name");
  let productPrice = this.getAttribute("data-product-price");

  let newProduct = {
    id: productId,
    name: productName,
    price: productPrice,
  };

  if (itemList.find((item) => item.id === newProduct.id)) {
    alert("Produit déjà ajouté au panier");
  } else {
    itemList.push(newProduct);
    alert(`${productName} a été ajouté au panier`);
  }
});
