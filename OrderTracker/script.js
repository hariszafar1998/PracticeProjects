const orderName = document.getElementById('ordername');
const designerName = document.getElementById('designername');
const designTime = document.getElementById('designtime');
const designDate = document.getElementById('designdate');
const submitBtn = document.getElementById('submit');
const orderContainer = document.getElementById('ordercontainer');
const orderForm = document.getElementById('orderform');

if ( localStorage.getItem('data') ) {
    let data = JSON.parse(localStorage.getItem('data'))
    console.log(data);
    function displayData() {
        data.map( order => {
            const newDiv = document.createElement('div');
            newDiv.classList.add('order');
            newDiv.innerHTML = `
                <h4>${order.order_name}</h4>
                <p>${order.designer_name}</p>
                <p>${order.design_date}</p>
                <p>${order.design_time}</p>
            `
            orderContainer.appendChild(newDiv);
        } ).join('');
    
    };
    
    function getID() {
        return Math.floor((Math.random())*10000000000000)
    }
    
    function addTheOrder(e) {
        e.preventDefault();
        orderContainer.innerHTML = '';
        const orderNameValue = orderName.value;
        const designerNameValue = designerName.value;
        const designDateValue = designDate.value;
        const designTimeValue = designTime.value;
        const orderObject = {
            id: getID(),
            order_name: orderNameValue,
            designer_name: designerNameValue,
            design_time: designDateValue,
            design_date: designTimeValue,
        };
        orderName.value = '';
        designerName.value = '';
        designDate.value = '';
        designTime.value = '';
        data.push(orderObject);
        displayData();
        localStorage.setItem('data' ,JSON.stringify(data))
    };
    
    orderForm.addEventListener('submit', e => {
        if ( orderName.value && designerName.value && designDate.value && designTime.value ) {
            addTheOrder();
        } else {
            alert('Please provide all the details')
        }
    })
    
    displayData();
} else {
    let data = [];
    function displayData() {
        data.map( order => {
            const newDiv = document.createElement('div');
            newDiv.classList.add('order');
            newDiv.innerHTML = `
                <h4>${order.order_name}</h4>
                <p>${order.designer_name}</p>
                <p>${order.design_date}</p>
                <p>${order.design_time}</p>
            `
            orderContainer.appendChild(newDiv);
        } ).join('');
    
    };
    
    function getID() {
        return Math.floor((Math.random())*10000000000000)
    }
    
    function addTheOrder(e) {
        e.preventDefault();
        orderContainer.innerHTML = '';
        const orderNameValue = orderName.value;
        const designerNameValue = designerName.value;
        const designDateValue = designDate.value;
        const designTimeValue = designTime.value;
        const orderObject = {
            id: getID(),
            order_name: orderNameValue,
            designer_name: designerNameValue,
            design_time: designDateValue,
            design_date: designTimeValue,
        };
        orderName.value = '';
        designerName.value = '';
        designDate.value = '';
        designTime.value = '';
        data.push(orderObject);
        displayData();
        localStorage.setItem('data' ,JSON.stringify(data))
    };
    
    orderForm.addEventListener('submit', e => {
        if ( orderName.value && designerName.value && designDate.value && designTime.value ) {
            addTheOrder();
        } else {
            alert('Please provide all the details')
        }
    });
    displayData();
}

let data = [];

