class Product {
    constructor(id, name, description, imgsrc) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imgsrc = imgsrc;
    }
}

let products = [];

products.push(1, "Home kit", "Inspired by the home kits of the 1960s and a time when our fans cheered on legends such as George Best, Sir Bobby Charlton and Denis Law.", "");
products.push(2, "Away kit", "This jersey quite literally puts the ‘M’ in Manchester United. If you take a closer peek, you can see an ‘M’ has been woven into the pattern of the shirt.");
products.push(3, "Third kit", "This season’s third shirt pays homage to the away shirt from the 1993/94 season when United completed the club's first-ever Double.");
products.push(4, "Knitted hat", "Top off your winter look. Suitable for winter walks, this stylish hat made in 100% wool is a must-have for all supporters.");
products.push(5, "Face coverings", "Proudly displaying team branding and colours, the stretchable elastic ear straps along with the soft and breathable fabric made for comfortable wearing.");
products.push(6, "Logo Hoodie", "Suitable for matchdays and beyond, this sweatshirt is a must-have for supporters. Stylish and comfortable, it also features official club branding.", "img/manutd-hoodie.jpeg");

function modalProduct() {
    products.forEach(product => {
        document.write(`<div class="col-lg-4 col-md-6 mt-3"></div>`);
        document.write(`<div class="card">`);
        document.write(`<img class="card-img-top" src="${product.imgsrc}" alt="${product.name}">`);
        document.write(`<div class="card-body">`);
        document.write(`<h4 class="card-title">${product.name}</h4>`);
        document.write(`<p class="card-text">${product.description}</p>`);
        document.write(`<a href="#" class="btn btn-outline-dark ml-auto mr-1" data-bs-toggle="modal" data-bs-target="#myModal">Buy</a>`);
        document.write(`</div>`);
        document.write(`</div>`);
        document.write(`</div>`);
    });
}