const products = [
    {
        id:1,
        title:'iphone 9',
        description:'An apple mobile which is nothing like apple',
        price: 549,
        thumbnail:'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
    },
    {
        id:1,
        title:'iphone 9',
        description:'An apple mobile which is nothing like apple',
        price: 549,
        thumbnail:'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
    }
    
];
const sectionCenter = document.querySelector('.section-center');

const productList = products.map((product) => {
  return `
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
`;
});

sectionCenter.innerHTML = productList.join('');
