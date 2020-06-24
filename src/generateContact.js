function generateContact() {

    const contentPage = document.querySelector('#Main');

    const divBlock = document.createElement('div');
    const headingTitle = document.createElement('h1');
    headingTitle.classList.add('hero-h1');
    headingTitle.textContent = "Contact Us";
    //headingTitle.style = "-webkit-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0";
    divBlock.appendChild(headingTitle);

    const para = document.createElement('p');
    para.classList.add('hero-paragraph');
    para.textContent = "Email: nathanjreidy@gmail.com";
    //para.style = "-webkit-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0";
    divBlock.appendChild(para); 

    contentPage.appendChild(divBlock);


}

export default generateContact