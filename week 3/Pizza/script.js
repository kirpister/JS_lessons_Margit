const order = () => {

    const size = document.querySelector('input[name="size"]:checked').value;
    let price = 0;

    if (size === "kids") {
        price = 7.50;
    }
    if (size === "small") {
        price = 10.50;
    }
    if (size === "medium") {
        price = 12.50;
    }
    if (size === "large") {
        price = 15.50;
    } 
    console.log(price);

    const topping = document.querySelector('input[name="topping"]').value;
}