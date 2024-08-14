const main = document.querySelector("main");
const cartContainer = document.getElementById("cartContainer");
const closeCartBtn = document.getElementById("closeCart");
const cartNavbar = document.querySelector(".fa-cart-shopping");
const clearCartBtn = document.querySelector(".clear-cart-btn");
const checkoutBtn = document.querySelector(".checkout-btn");
const checkoutItemTotal = document.querySelector(".checkout-items-total");

let cartItems = [];

const fetchData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    data.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "itemDiv";

      const itemImg = document.createElement("img");
      itemImg.className = "itemImg";
      itemImg.src = item.image;

      const itemTitle = document.createElement("p");
      itemTitle.className = "itemTitle";
      itemTitle.textContent = `${
        item.title.length > 20 ? `${item.title.slice(0, 20)}..` : item.title
      }`;

      const itemPrice = document.createElement("p");
      itemPrice.className = "itemPrice";
      itemPrice.textContent = `$${item.price.toFixed(2)}`;

      const itemDesc = document.createElement("p");
      itemDesc.className = "itemDesc";
      itemDesc.textContent = `${
        item.description.length > 50
          ? `${item.description.slice(0, 50)}...`
          : item.description
      }`;

      const addToCartBtn = document.createElement("button");
      addToCartBtn.className = "addToCartBtn";
      addToCartBtn.innerText = "Add to cart";

      itemDiv.appendChild(itemImg);
      itemDiv.appendChild(itemTitle);
      itemDiv.appendChild(itemPrice);
      itemDiv.appendChild(itemDesc);
      itemDiv.appendChild(addToCartBtn);
      main.appendChild(itemDiv);

      addToCartBtn.addEventListener("click", () => {
        showCart();
        addItemToCart(item);
      });
    });
  } catch (error) {
    console.log("Error fetching data");
  }
};

// Close button event listener
closeCartBtn.addEventListener("click", hideCart);

//Open cart from navbar
cartNavbar.addEventListener("click", () => {
  showCart();
});

//Empty the cart
clearCartBtn.addEventListener("click", clearCart);

// Function to show cart
function showCart() {
  cartContainer.classList.add("show");
  updateCartTotal();
}

// Function to hide cart
function hideCart() {
  cartContainer.classList.remove("show");
}

function addItemToCart(item) {
  const existingItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === item.id
  );
  if (existingItemIndex !== -1) {
    cartItems[existingItemIndex].quantity++;
  } else {
    cartItems.push({ ...item, quantity: 1 });
  }
  renderCartItems();
}

function renderCartItems() {
  const cartItemsContainer = document.querySelector(".cart-items");
  cartItemsContainer.innerHTML = "";

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = "<p>Cart is empty</p>";
    return;
  }

  cartItems.forEach((item) => {
    // Create item element
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="cart-item-details">
        <p class="cart-item-title">${
          item.title.length > 20 ? `${item.title.slice(0, 20)}..` : item.title
        }</p>
        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
        <div class="quantity-controls">
          <button class="quantity-btn" data-action="decrease">-</button>
          <input type="number" class="quantity-input" value="${
            item.quantity
          }" min="1" readonly/>
          <button class="quantity-btn" data-action="increase">+</button>
        </div>
      </div>
      <button class="remove-btn">Remove</button>
    `;

    cartItemsContainer.appendChild(cartItem);

    cartItem.querySelectorAll(".quantity-btn").forEach((button) => {
      button.addEventListener("click", (event) => {
        const action = event.target.getAttribute("data-action");
        const quantityInput = cartItem.querySelector(".quantity-input");
        let quantity = parseInt(quantityInput.value, 10);

        if (action === "increase") {
          quantity++;
        } else if (action === "decrease" && quantity > 1) {
          quantity--;
        }
        quantityInput.value = quantity;
        updateCartItemQuantity(item.id, quantity);
      });
    });
    cartItem.querySelector(".remove-btn").addEventListener("click", () => {
      removeCartItem(item.id);
      updateCartTotal();
    });
  });
  updateCartTotal();
}

function updateCartItemQuantity(id, quantity) {
  const item = cartItems.find((cartItem) => cartItem.id === id);
  if (item) {
    item.quantity = quantity;
    updateCartTotal();
  }
}

function removeCartItem(id) {
  const index = cartItems.findIndex((cartItem) => cartItem.id === id);
  if (index !== -1) {
    cartItems.splice(index, 1);
    renderCartItems();
  }
}

function updateCartTotal() {
  const totalElement = document.querySelector(".cart-total");
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  localStorage.setItem("total", total);
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function clearCart() {
  cartItems = [];
  renderCartItems();
  updateCartTotal();
}

fetchData();
