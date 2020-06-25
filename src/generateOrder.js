function generateOrder() {

    const orderPage = document.querySelector('#Main');

    const orderBlock = document.createElement('div');
    const orderTitle = document.createElement('h1');
    orderTitle.classList.add('hero-h1');
    orderTitle.textContent = "Food Menu";
    orderBlock.appendChild(orderTitle);

    function generateFood(name, price) {

        const orderPara = document.createElement('p');
        orderPara.classList.add('hero-paragraph');
        orderPara.textContent = `${name}: ${price}`;
        orderBlock.appendChild(orderPara); 

    }

    generateFood("Tasty Chicken Burger", "$23.50");
    generateFood("Grilled Steak", "$29.95");
    generateFood("Crisy Pork Delight", "$14.95");
    generateFood("Large fries", "$5.95");
    generateFood("Portugese Chicken Burger", "$19.95");
    generateFood("Chicken Schnitzel Burger", "$19.95");

    orderPage.appendChild(orderBlock);


}

export default generateOrder