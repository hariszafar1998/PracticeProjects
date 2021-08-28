const addOrderBtn = document.getElementById('addorder');
const orderContainer = document.getElementById('ordercontainer');
const modalWindow = document.getElementById('modal');
const closeModalBtn = document.getElementById('hidemodalbutton');
const newOrderForm = document.getElementById('orderform');
const newOrderName = document.getElementById('ordername');
const newDesignerName = document.getElementById('designername');
const newDesignTime = document.getElementById('designtime');
const newDesignDate = document.getElementById('designdate');

if ( localStorage.getItem('ordersArray') ) {
        
        let ordersArray = JSON.parse(localStorage.getItem('ordersArray'));

        function displayOrders() {
            orderContainer.innerHTML = '';
            ordersArray.map( order => {
                const newDiv = document.createElement('div');
                newDiv.classList.add('order');
                newDiv.innerHTML = `
                    <p>${order.orderName}</p>
                    <p>${order.designerName}</p>
                    <p>${order.designTime}</p>
                    <p>${order.designDate}</p>
                    <button class="deleteBtn" onclick="deleteOrder(${order.id})">X</button>
                `
                orderContainer.appendChild(newDiv);
            } ).join('');
        };

        function deleteOrder(id) {
            ordersArray = ordersArray.filter( order => order.id !== id );
            console.log(ordersArray);
            displayOrders();
        };

        function getID() {
            return Math.floor(Math.random()*100000000);
        };

        function addOrderToArray(e) {
            e.preventDefault();
            const newObject = {
                id: getID(),
                orderName: newOrderName.value,
                designerName: newDesignerName.value,
                designTime: newDesignTime.value,
                designDate: newDesignDate.value
            };
            ordersArray.push(newObject);
            localStorage.setItem('ordersArray', JSON.stringify(ordersArray))
            displayOrders();
            modalWindow.style.display = "none";
        };

        closeModalBtn.addEventListener('click', e => {
            e.preventDefault();
            modalWindow.style.display = "none";
        })

        addOrderBtn.addEventListener('click', e => {
            modalWindow.style.display = "flex";
        });

        newOrderForm.addEventListener('submit', addOrderToArray);

        displayOrders();
} else {
    let ordersArray = [];

        function displayOrders() {
            orderContainer.innerHTML = '';
            ordersArray.map( order => {
                const newDiv = document.createElement('div');
                newDiv.classList.add('order');
                newDiv.innerHTML = `
                    <p>${order.orderName}</p>
                    <p>${order.designerName}</p>
                    <p>${order.designTime}</p>
                    <p>${order.designDate}</p>
                    <button class="deleteBtn" onclick="deleteOrder(${order.id})">X</button>
                `
                orderContainer.appendChild(newDiv);
            } ).join('');
        };

        function deleteOrder(id) {
            ordersArray = ordersArray.filter( order => order.id !== id );
            console.log(ordersArray);
            displayOrders();
        };

        function getID() {
            return Math.floor(Math.random()*100000000);
        };

        function addOrderToArray(e) {
            e.preventDefault();
            const newObject = {
                id: getID(),
                orderName: newOrderName.value,
                designerName: newDesignerName.value,
                designTime: newDesignTime.value,
                designDate: newDesignDate.value
            };
            ordersArray.push(newObject);
            localStorage.setItem('ordersArray', JSON.stringify(ordersArray))
            displayOrders();
            modalWindow.style.display = "none";
        };

        closeModalBtn.addEventListener('click', e => {
            modalWindow.style.display = "none";
        })

        addOrderBtn.addEventListener('click', e => {
            modalWindow.style.display = "flex";
        });

        newOrderForm.addEventListener('submit', addOrderToArray);

        displayOrders();
}

let ordersArray = [];

function displayOrders() {
    orderContainer.innerHTML = '';
    ordersArray.map( order => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('order');
        newDiv.innerHTML = `
            <p>${order.orderName}</p>
            <p>${order.designerName}</p>
            <p>${order.designTime}</p>
            <p>${order.designDate}</p>
            <button class="deleteBtn" onclick="deleteOrder(${order.id})">X</button>
        `
        orderContainer.appendChild(newDiv);
    } ).join('');
};

function deleteOrder(id) {
    ordersArray = ordersArray.filter( order => order.id !== id );
    console.log(ordersArray);
    displayOrders();
};

function getID() {
    return Math.floor(Math.random()*100000000);
};

function addOrderToArray(e) {
    e.preventDefault();
    const newObject = {
        id: getID(),
        orderName: newOrderName.value,
        designerName: newDesignerName.value,
        designTime: newDesignTime.value,
        designDate: newDesignDate.value
    };
    ordersArray.push(newObject);
    localStorage.setItem('ordersArray', JSON.stringify(ordersArray))
    displayOrders();
    modalWindow.style.display = "none";
};

closeModalBtn.addEventListener('click', e => {
    modalWindow.style.display = "none";
})

addOrderBtn.addEventListener('click', e => {
    modalWindow.style.display = "flex";
});

newOrderForm.addEventListener('submit', addOrderToArray);

displayOrders();