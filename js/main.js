let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let changableImage = document.getElementById("changableImage");
let project1 = document.getElementById("project1");
let project2 = document.getElementById("project2");
let project3 = document.getElementById("project3");
let pheading1 = document.getElementById("pheading1");
let pdescriptiion1 = document.getElementById("pdescriptiion1");
let pheading2 = document.getElementById("pheading2");
let pdescriptiion2 = document.getElementById("pdescriptiion2");
let pheading3 = document.getElementById("pheading3");
let pdescriptiion3 = document.getElementById("pdescriptiion3");
let wcuCard1 = document.getElementById("wcuCard1");
let wcuCard2 = document.getElementById("wcuCard2");
let wcuCard3 = document.getElementById("wcuCard3");
let wcuCard4 = document.getElementById("wcuCard4");

wcuCard1.addEventListener("mouseover", function() {
    wcuCard1.classList.toggle("shadow-lg");
});
wcuCard1.addEventListener("mouseout", function() {
    wcuCard1.classList.toggle("shadow-lg");
});

wcuCard2.addEventListener("mouseover", function() {
    wcuCard2.classList.toggle("shadow-lg");
});
wcuCard2.addEventListener("mouseout", function() {
    wcuCard2.classList.toggle("shadow-lg");
});

wcuCard3.addEventListener("mouseover", function() {
    wcuCard3.classList.toggle("shadow-lg");
});
wcuCard3.addEventListener("mouseout", function() {
    wcuCard3.classList.toggle("shadow-lg");
});

wcuCard4.addEventListener("mouseover", function() {
    wcuCard4.classList.toggle("shadow-lg");
});
wcuCard4.addEventListener("mouseout", function() {
    wcuCard4.classList.toggle("shadow-lg");
});



project1.addEventListener("click", function() {
    changableImage.src = "https://img.freepik.com/free-photo/front-view-fresh-red-strawberries-mellow-fruits-berries-inside-plate-dark-blue-surface-berry-fruit-mellow-summer_140725-39919.jpg?t=st=1717362584~exp=1717366184~hmac=373e0d1981037e8c5211b48ec999ec0e659c40a5c91b417e6ac504606153150c&w=740";
});
project2.addEventListener("click", function() {
    changableImage.src = "https://res.cloudinary.com/detqp9dxl/image/upload/v1717316959/image_oe28ow.png";
});
project3.addEventListener("click", function() {
    changableImage.src = "https://img.freepik.com/premium-photo/group-vegetables-top-view-with-aesthetic-arrangement-generative-ai_175880-2868.jpg";
});

project1.addEventListener("click", function() {
    project1.classList.add("OP-bg-card");
    pheading1.classList.add("clr");
    pdescriptiion1.classList.add("clr");
    project2.classList.remove("OP-bg-card");
    pheading2.classList.remove("clr");
    pdescriptiion2.classList.remove("clr");
    project3.classList.remove("OP-bg-card");
    pheading3.classList.remove("clr");
    pdescriptiion3.classList.remove("clr");
});



project2.addEventListener("click", function() {
    project1.classList.remove("OP-bg-card");
    pheading1.classList.remove("clr");
    pdescriptiion1.classList.remove("clr");
        project3.classList.remove("OP-bg-card");
    pheading3.classList.remove("clr");
    pdescriptiion3.classList.remove("clr");
    project2.classList.add("OP-bg-card");
    pheading2.classList.add("clr");
    pdescriptiion2.classList.add("clr");

});



project3.addEventListener("click", function() {
    project3.classList.add("OP-bg-card");
    pheading3.classList.add("clr");
    pdescriptiion3.classList.add("clr");
    project2.classList.remove("OP-bg-card");
    pheading2.classList.remove("clr");
    project1.classList.remove("OP-bg-card");
    pheading1.classList.remove("clr");
    pdescriptiion1.classList.remove("clr");
    pdescriptiion2.classList.remove("clr");
});



card1.addEventListener("mouseover", function() {
    card1.classList.toggle("shadow");
});
card1.addEventListener("mouseout", function() {
    card1.classList.toggle("shadow");
});

card2.addEventListener("mouseover", function() {
    card2.classList.toggle("shadow");
});
card2.addEventListener("mouseout", function() {
    card2.classList.toggle("shadow");
});

card3.addEventListener("mouseover", function() {
    card3.classList.toggle("shadow");
});
card3.addEventListener("mouseout", function() {
    card3.classList.toggle("shadow");
});

card4.addEventListener("mouseover", function() {
    card4.classList.toggle("shadow");
});
card4.addEventListener("mouseout", function() {
    card4.classList.toggle("shadow");
});

function clearPlaceholder() {
    let input = document.getElementById('emailEl');
    input.setAttribute('data-placeholder', input.getAttribute('placeholder'));
    input.setAttribute('placeholder', '');

    let workMail = document.getElementById("workMail");
    workMail.classList.remove("d-none");
}

function restorePlaceholder() {
    let input = document.getElementById('emailEl');
    input.setAttribute('placeholder', input.getAttribute('data-placeholder'));

    let workMail = document.getElementById("workMail");
    if (input.value === "") {
        workMail.classList.add("d-none");
    } else {
        workMail.classList.remove("d-none");
    }
}


function placeholderNone() {
    let fnInput = document.getElementById('firstNamEl');
    fnInput.setAttribute('data-placeholder', fnInput.getAttribute('placeholder'));
    fnInput.setAttribute('placeholder', '');

    let firstName = document.getElementById("firstName");
    firstName.classList.remove("d-none");
}

function placeholderView() {
    let fnInput = document.getElementById('firstNamEl');
    fnInput.setAttribute('placeholder', fnInput.getAttribute('data-placeholder'));

    let firstName = document.getElementById("firstName");
    if (fnInput.value === "") {
        firstName.classList.add("d-none");
    } else {
        firstName.classList.remove("d-none");
    }
}

function nonePlaceholder() {
    let lnInput = document.getElementById('lastNameEl');
    lnInput.setAttribute('data-placeholder', lnInput.getAttribute('placeholder'));
    lnInput.setAttribute('placeholder', '');

    let lastName = document.getElementById("lastName");
    lastName.classList.remove("d-none");
}

function viewPlaceholder() {
    let lnInput = document.getElementById('lastNameEl');
    lnInput.setAttribute('placeholder', lnInput.getAttribute('data-placeholder'));

    let lastName = document.getElementById("lastName");
    if (lnInput.value === "") {
        lastName.classList.add("d-none");
    } else {
        lastName.classList.remove("d-none");
    }
}



let wwdCard = document.getElementById("wwdCard");
let wwdImg = document.getElementById("wwdImg");


document.querySelectorAll(".slide").forEach(slide => {
    slide.addEventListener("mouseout", removeHovering);
    slide.addEventListener("mouseover", hovering);
    slide.addEventListener("mouseout", removeHovering);
});

function hovering(event) {
    let wwdCard = event.currentTarget;
  

  
    let allCards = document.querySelectorAll('.hovered');
    allCards.forEach(card => {
        card.classList.remove('hovered', 'hover-bg-container', 'p-2', 'd-flex', 'flex-column', 'justify-content-center');
      
        if (card.hasAttribute('data-original-content')) {
            card.innerHTML = card.getAttribute('data-original-content');
            card.removeAttribute('data-original-content');
        }
    });
    // Save original content if not already saved
    if (!wwdCard.hasAttribute('data-original-content')) {
        let originalContent = wwdCard.innerHTML;
        wwdCard.setAttribute('data-original-content', originalContent);
    }

    // Clear current content
    wwdCard.innerHTML = '';

    // Add hover classes and styles
    wwdCard.classList.add('hovered', 'hover-bg-container', 'p-2', 'd-flex', 'flex-column', 'justify-content-center');

    // Create inner container for content
    let innerContainer = document.createElement("div");
    innerContainer.classList.add("d-flex", "flex-column", "align-items-center");
    wwdCard.appendChild(innerContainer);

    // Create image element
    let imageEl = document.createElement("img");
    imageEl.src = "https://res.cloudinary.com/detqp9dxl/image/upload/v1717406118/icon_pdfych.png";
    imageEl.classList.add("icon-style");
    innerContainer.appendChild(imageEl);

  
    let headingEl = document.createElement("p");
    headingEl.classList.add("web-develop-para", "mt-2");
    headingEl.textContent = "WEB DEVELOPMENT";
    innerContainer.appendChild(headingEl);

   
    let paragraphEl = document.createElement("p");
    paragraphEl.classList.add("web-develop-description");
    paragraphEl.textContent = "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque";
    innerContainer.appendChild(paragraphEl);

  
    let btnContainer = document.createElement("div");
    btnContainer.classList.add("d-flex", "flex-row", "justify-content-center")
    innerContainer.appendChild(btnContainer);

    let btnElement = document.createElement("button");
    btnElement.classList.add("btn-style", "mt-4");
    btnElement.textContent = " READ MORE";
    btnElement.addEventListener("click", function() {
        window.open("https://www.fylehq.com/", "_blank");
    });
    btnContainer.appendChild(btnElement);

    let btnImg = document.createElement("img");
    btnImg.src = "https://res.cloudinary.com/detqp9dxl/image/upload/v1717406128/arrow_jj8tp3.png";
    btnImg.classList.add("arrow", "ml-2");
    btnElement.appendChild(btnImg);

}


function removeHovering(event) {
    let wwdCard = event.currentTarget;

  
    let originalContent = wwdCard.getAttribute('data-original-content');
    wwdCard.classList.remove('hovered', 'hover-bg-container', 'p-2', 'd-flex', 'flex-column', 'justify-content-center');
    wwdCard.innerHTML = originalContent;

  
    wwdCard.removeAttribute('data-original-content');
}

  



let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');

function showSlides(index) {
    console.log(index);
    if (index >= slides.length / 4) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length / 4 - 1;
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active-dot'));
    dots[slideIndex].classList.add('active-dot');
}

function nextSlide() {
    showSlides(slideIndex + 1);
}

function currentSlide(index) {
    showSlides(index);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index));
});

function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 3000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', stopAutoplay);
carousel.addEventListener('mouseleave', startAutoplay);

showSlides(slideIndex);
startAutoplay();




  
   

   

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');



function highlightNav() {
    const scrollPosition = window.scrollY;

  navLinks.forEach(link => {
    console.log("link",link)
        const sectionId = link.getAttribute('href').slice(1); 
        const section = document.getElementById(sectionId);
        
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                link.classList.add('active'); 
                section.classList.add('zoom-in-element'); 
            } else {
                link.classList.remove('active');
                section.classList.remove('zoom-in-element'); 
            }
        }
    });
}



window.addEventListener('scroll', highlightNav);


highlightNav();

