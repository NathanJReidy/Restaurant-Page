function generateHome() {
    const content = document.querySelector("#Header");

    const containerFlex = document.createElement('div');
    containerFlex.classList.add('container-flex');
    content.appendChild(containerFlex);

    const heroContent = document.createElement('div');
    heroContent.classList.add('hero-content');
    containerFlex.appendChild(heroContent);

    const h1 = document.createElement('h1');
    h1.classList.add('hero-h1');
    h1.textContent = "The best burgers in Sydney, delivered to your door in under 30 minutes.";
    h1.style = "-webkit-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0";
    heroContent.appendChild(h1);

    const p = document.createElement('p');
    p.classList.add('hero-paragraph');
    p.textContent = "Crispy. Juicy. Freshly grilled.";
    p.style = "-webkit-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0";
    heroContent.appendChild(p); 

    const btn = document.createElement('div');
    btn.classList.add('button-wrapper');
    btn.style = "-webkit-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0";
    //btn.textContent = "Place an Order";

    // <a href="/order" class="button w-button">
    const aTag = document.createElement('a'); 
    aTag.setAttribute('href', '/order');
    aTag.classList.add('button');
    aTag.innerText = "Place an Order";
    aTag.style = "text-decoration:none;";
    aTag.style.color = "white";
    btn.appendChild(aTag);
    heroContent.appendChild(btn);

    // Add image

    const heroImageWrap = document.createElement('div');
    heroImageWrap.classList.add('hero-image-wrap');
    containerFlex.appendChild(heroImageWrap);

    const heroImage = document.createElement('img');
    heroImage.src = "images/Hero-Image.png";
    heroImage.classList.add('hero-image');
    heroImageWrap.appendChild(heroImage);




    hero-image-wrap

}

generateHome();
