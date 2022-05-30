// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "https://m.media-amazon.com/images/I/710mqhd9mCL._UL1500_.jpg");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";


// }



const data = [
    {   
        "name":"tshirt",
        "image":"https://m.media-amazon.com/images/I/710mqhd9mCL._UL1500_.jpg"
    },   {
        "name":"tshirt",
        "image":"https://m.media-amazon.com/images/I/710mqhd9mCL._UL1500_.jpg"
    },   {
        "name":"tshirt",
        "image":"https://m.media-amazon.com/images/I/710mqhd9mCL._UL1500_.jpg"
    },   {
        "name":"tshirt",
        "image":"https://m.media-amazon.com/images/I/710mqhd9mCL._UL1500_.jpg"
    },   {
        "name":"tshirt",
        "image":"https://m.media-amazon.com/images/I/710mqhd9mCL._UL1500_.jpg"
    },   {
        "name":"tshirt",
        "image":"https://m.media-amazon.com/images/I/710mqhd9mCL._UL1500_.jpg"
    },   {
        "name":"tshirt",
        "image":"https://m.media-amazon.com/images/I/710mqhd9mCL._UL1500_.jpg"
    }
]
// getProducts();
function getProducts() {
  let parent = document.getElementById('store');
  for (let i = 0; i < data.length; i++){
    let productDiv = getProduct(data[i]);
    parent.appendChild(productDiv);
  }
}
function getProduct(product) {
  let productDiv = document.createElement('div');
  let img = document.createElement('img');
  let childDiv = document.createElement('div');
  let span1 = document.createElement('span');
  let span2 = document.createElement('span');
  let button = document.createElement('button');
  let spanText = document.createTextNode(product.name)
  let btnText = document.createTextNode('Add to cart')
  
  span2.appendChild(button);
  span1.appendChild(spanText);
  button.appendChild(btnText);
  childDiv.appendChild(span1);
  childDiv.appendChild(span2);

  img.src = product.image;
  img.width = 300;
  productDiv.appendChild(img)
  productDiv.appendChild(childDiv)

  return productDiv;
 
  
  
}



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}





