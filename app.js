import{products} from './products.js';

const sectionCenter = document.querySelector('.section-center');

const productList = products.map(
    (product) =>  `
    <article class="product-item">
      <img
        src= "${product.thumbnail}"
        alt= "${product.title}"
        class="photo"
      />
      <div class="item-info">
        <header>
          <h4>${product.title}</h4>
        </header>
        <p class="item-text">An apple mobile which is nothing like apple</p>
        <h4 class="price">$549${product.price}</h4>
      </div>
    </article>
`
);
const categories = products.reduce((acc, product) => {
    if (!acc.includes(product.category)) {
      acc.push(product.category);
    }
    return acc;
  }, []);
sectionCenter.innerHTML = productList.join('');
