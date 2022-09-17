// ITERATION 1

function updateSubtotal(products, total) {
  let totalDOM = 0;

  products.map((product) => {
    const price = product.querySelector('.price span').innerHTML;
    const quantity = product.querySelector('.quantity input').value;
    const subtotal = price * quantity;
    product.querySelector('.subtotal span').innerHTML = subtotal;
    totalDOM += subtotal;
    return (total.innerHTML = totalDOM);
  });
}

function calculateAll() {
  const products = Array.from(document.getElementsByClassName('product'));
  const total = document.querySelector('#total-value span');
  updateSubtotal(products, total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const dad = target.parentNode.parentNode.parentNode;
  console.log(dad);
  const priceToRemove = dad.querySelector('.subtotal span').innerHTML;
  const total = document.querySelector('#total-value span');
  total.innerHTML -= priceToRemove;
  dad.removeChild(target.parentNode.parentNode);

  console.log('The target in remove is:', target);

  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const inputName = document.getElementById('create-name');
  const inputPrice = document.getElementById('create-num');
  const newProduct = document.querySelector('tbody');
  newProduct.innerHTML += `
  </tr>
        <tr class="product">
          <td class="name">
            <span>${inputName.value}</span>
          </td>
          <td class="price">$<span>${inputPrice.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('btn btn-remove');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
});

window.addEventListener('load', () => {
  const removeItemBtn = document.getElementsByClassName('btn btn-remove');
  Array.from(removeItemBtn).map((element) => {
    element.addEventListener('click', removeProduct);
  });
});

window.addEventListener('load', () => {
  const addItemBtn = document.getElementById('create');
  addItemBtn.addEventListener('click', createProduct);
  //... your code goes here
});
