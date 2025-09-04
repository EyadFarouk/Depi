let data = [];

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    data.forEach(e => {
      body.innerHTML += `
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <img src="${e.image}" class="card-img-top" alt="${e.title}">
              <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${e.title}</h5>
                  <p class="card-text text-muted">${e.description}</p>
                  <p class="card-text">Category:${e.category}</p>
                  <p class="card-text">Rating:${e.rating.rate}</p>
                  <p class="card-text">No. of ratings:${e.rating.count}</p>
                  <p class="card-text">Price:${e.price}</p>
                <button class="btn btn-primary mt-auto">Add to Cart</button>
              </div>
            </div>
          </div>
        `;
      }
    );
  }
);

let body = document.getElementsByClassName("row")[0];




{/* <div class="card col-md-4 mb-4" id="card" style="width: 18rem;">
            <img class="card-img-top" src="${e.image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${e.title}</h5>
                <p class="card-text">${e.description}</p>
                <p class="card-text">Category:${e.category}</p>
                <p class="card-text">Rating:${e.rating.rate}</p>
                <p class="card-text">No. of ratings:${e.rating.count}</p>
                <p class="card-text">Price:${e.price}</p>
                <a href="#" class="btn btn-primary">Buy</a>
            </div>
        </div> */}