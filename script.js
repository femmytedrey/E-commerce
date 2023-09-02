const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".closemenu");
const menu = document.querySelector("ul")
const overlay = document.querySelector(".ulcontainer");
const carousel = document.querySelector(".lefttop");
const slides = document.querySelectorAll(".lefttop .product");
const previous = document.querySelector(".mobilearrowleft");
const next = document.querySelector(".mobilearrowright");
const pageoverlay = document.querySelector(".pageoverlay");
const overlayprevious = document.querySelector(".leftcircle");
const overlaynext = document.querySelector(".rightcircle");
const overelayslide = document.querySelectorAll(".pageoverlay .product");
const closeoverlay = document.getElementById("close");
const thumbnailoverlay = document.querySelectorAll('.pageoverlay .overlay')
const thumbnail1 = document.querySelectorAll('.leftbottom .overlay');
const lefttopProducts = document.querySelectorAll('.lefttop .product');

// const thmbnail2 = document.querySelector('.thumbnail2');
// const thmbnail3 = document.querySelector('.thumbnail3');
// const thmbnail4 = document.querySelector('.thumbnail4');


hamburger.addEventListener('click', () => {
    if (window.innerWidth <= 1000) { // Check if screen width is 1000px or less
        hamburger.style.display = 'none';
        close.style.display = 'block';
        menu.style.display = 'block';
        overlay.style.display = 'block';
        previous.style.display = 'none';
        cartbox.style.display = 'none';
    }
});

close.addEventListener('click', () => {
    if (window.innerWidth <= 1000) { // Check if screen width is 1000px or less
        hamburger.style.display = 'block';
        close.style.display = 'none';
        menu.style.display = 'none';
        overlay.style.display = 'none';
        previous.style.display = 'block';
    }
});


if (window.innerWidth <= 1000){

let currentIndex = 0;

previous.addEventListener('click', () =>{
    if(currentIndex > 0){
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;
    }
    updateCarousel();
});

next.addEventListener('click', () =>{
    if(currentIndex < slides.length - 1){
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});


const updateCarousel = (() => {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });

});

updateCarousel();

}

if (window.innerWidth >= 1000){
    slides.forEach((slide) => {
        
        slide.addEventListener('click', () => {
            pageoverlay.style.display = 'block';
        });
    });
    closeoverlay.addEventListener('click', () =>{
        pageoverlay.style.display = 'none';
    })
    let currentIndex1 = 0;
    overlayprevious.addEventListener('click', () =>{
        if (currentIndex1 > 0) {
            currentIndex1--;
        } else {
            currentIndex1 = overelayslide.length - 1;
        }
        updateCarousel1();
    });

    overlaynext.addEventListener('click', () => {
        if(currentIndex1 < overelayslide.length - 1){
            currentIndex1++;
        } else {
            currentIndex1 = 0;
        }
        updateCarousel1();
    })

    thumbnail1.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
          // Hide all product images in the lefttop section
          thumbnail1.forEach((outline) =>{
            outline.style.border = 'none';
          });

          thumbnail.style.border = '3px solid #FF7D1B';


          lefttopProducts.forEach((product) => {
            product.style.display = 'none';
          });
      
          // Display the corresponding product image based on the clicked thumbnail's index
          lefttopProducts[index].style.display = 'block';
        });
      });
        

    thumbnailoverlay.forEach((thumbnailoverlays, index) => {
        thumbnailoverlays.setAttribute('data-product-index', index);
        thumbnailoverlays.addEventListener('click', () => {
            const productIndex = thumbnailoverlays.getAttribute('data-product-index');
            displayProductOverlayInOverlay(productIndex);
            thumbnailoverlay.forEach((outline) =>{
                outline.style.border = 'none';
            })
            thumbnailoverlays.style.border = '3px solid #FF7D1B';
        });
    });

    function displayProductOverlayInOverlay(productIndex) {
    currentIndex1 = parseInt(productIndex);
    updateCarousel1();
    }


    

   
    



    const updateCarousel1 = (() => {
        overelayslide.forEach((slide, index) => {
            if (index === currentIndex1) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    
    });
    updateCarousel1();
}
    

const cartbox = document.querySelector(".cartview");
const cartIcon = document.querySelector(".svgnav");
const decrement = document.querySelector(".minus-btn");
const increment = document.querySelector(".plus-btn");
const inputBox = document.getElementById("quantity");
const addToCart = document.querySelector(".AddToCart");
const cartnum = document.querySelector(".cartnum");
const num = document.querySelector('.num');
const emptyCart = document.querySelector(".emptycart");
const middleCart = document.querySelector(".cartviewmiddleouter");
const bottomCart = document.querySelector(".cartviewbottom");
const quantityNumber = document.querySelector(".numOfQuantity");
const quantityPrice = document.querySelector(".quantityprice");
const deleteCart = document.querySelector(".delete");
const checkout = document.querySelector(".checkout");

let isCartVisible = false;
let quantity = 1;

cartIcon.addEventListener('click', () => {
    if (!isCartVisible) {
        cartbox.style.display = 'block';
        previous.style.display = 'none';
        isCartVisible = true;
    } else {
        cartbox.style.display = 'none';
        previous.style.display = 'block';
        isCartVisible = false;
    }

    if (window.getComputedStyle(cartnum).getPropertyValue('display') === 'block') {
        emptyCart.style.display = 'none';
        middleCart.style.display = 'block';
        bottomCart.style.display = 'block';
        
        
    }
    
});


decrement.addEventListener('click', () =>{
    if(quantity > 1){
        quantity--;
        inputBox.value = quantity;
    }
});

increment.addEventListener('click', () =>{
    quantity++;
    inputBox.value = quantity;
    
});

const price = 125;

addToCart.addEventListener('click', () =>{
    
    const inputValue = inputBox.value;
    const quantity = parseFloat(inputValue)

    if(!isNaN(quantity)){
        num.textContent = quantity;
        quantityNumber.textContent = quantity;
        const total = price * quantity;
        const formattedTotal = total.toFixed(2);
        quantityPrice.textContent = formattedTotal;
        cartnum.style.display = 'block';
    }else{
        console.error("Invalid input for quantity");
    }
});

deleteCart.addEventListener('click', () =>{
    emptyCart.style.display = 'flex';
    middleCart.style.display = 'none';
    bottomCart.style.display = 'none';
    cartnum.style.display = 'none';
});

checkout.addEventListener('click', () =>{
    alert("Coming soon!!! check back later");
});