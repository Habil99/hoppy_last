/************************* Copy Order Numbers ***************************/

const order_number = document.querySelectorAll('.order-number span'),
    order_cell = document.querySelectorAll('.order-number');

[...order_cell].forEach((order, index) => {
    order.addEventListener('click', () => {
        let text = order_number[index].innerText;
        let elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = text;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);
    })
})
console.log('worked')

/************************* Copy Order Numbers ***************************/
