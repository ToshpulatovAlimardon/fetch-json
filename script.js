fetch("http://localhost:3000/data")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    let out = "";
    for (let product of products) {
      out += `
        <div class="product">
          <img src="${product.image}" alt="${product.description}">
          <p class="title">${product.title}</p>
          <p class="description">${product.description}</p>
          <p class="price">
            <span>${product.price}</span>
            <span>€</span>
          </p>
          <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
        </div>
      `;
    }

    document.querySelector(".products").innerHTML = out;
  });
