function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  cartItemsContainer.innerHTML = "";

  let totalPrice = 0;

  cartItems.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
    itemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>Prix: €${item.price}</p>
            <div>
                <button onclick="updateQuantity('${item.name}', -1)">-</button>
                <span id="quantity-${item.name}">${item.quantity}</span>
                <button onclick="updateQuantity('${item.name}', 1)">+</button>
            </div>
        `;
    cartItemsContainer.appendChild(itemElement);
    totalPrice += item.price * item.quantity;
  });

  totalPriceElement.textContent = `Total: €${totalPrice.toFixed(2)}`;
}

function updateQuantity(productName, change) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cartItems.find((item) => item.name === productName);

  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      const index = cartItems.indexOf(item);
      cartItems.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    displayCartItems();
  }
}

document.addEventListener("DOMContentLoaded", displayCartItems);
