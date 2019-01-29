const mocks = [
    {
    title: 'apple',
    type: 'fruit',
    price: 50
    },
    {
    title: 'tomato',
    type: 'vegetable',
    price: 59
    },
    {
    title: 'watermelon',
    type: 'berries',
    price: 4
    },
    {
    title: 'avocado',
    type: 'fruit',
    price: 98
    },
    {
    title: 'pear',
    type: 'fruit',
    price: 23
    },
    {
    title: 'potatoes',
    type: 'root crop',
    price: 34
    },
    {
    title: 'radish',
    type: 'root crop',
    price: 12
    },
    {
    title: 'carrot',
    type: 'root crop',
    price: 29
    },
    {
    title: 'cucumber',
    type: 'vegetable',
    price: 11
    },
    {
    title: 'orange', type: 'fruit',
    price: 44
    },
    {
    title: 'mandarin',
    type: 'fruit',
    price: 25
    },
    {
    title: 'cabbage',
    type: 'vegetable',
    price: 19
    },
    {
    title: 'pumpkin',
    type: 'vegetable',
    price: 23
    },
    {
    title: 'strawberry',
    type: 'berries',
    price: 78
    },
   ];

let newList = createNewList();

fillTable();
console.log(newList);

document.getElementById('form').onsubmit = function(){
    event.preventDefault();
    let title = document.getElementById("titleFilter");
    let type = document.getElementById("typeFilter");
    let result = [];
    newList.forEach((current,index) => {
        if (current.title.includes(title.value) && current.type.includes(type.value)){
            result.push(current);
        }
    })
    console.log('res');
    console.log(result);
    getUlFilteredArray(result);
};

function getUlFilteredArray(arr){
    let rightUl = document.getElementById('rightUl');
    while (rightUl.firstChild){
        rightUl.removeChild(rightUl.firstChild);
    }
    arr.forEach((item,index) => {
        let ul = document.createElement('ul');
        for (key in item){
            let li = document.createElement('li');
            li.innerText = item[key];
            ul.appendChild(li);
        }
        rightUl.appendChild(ul);
    })
}


function createNewList() {
    let res = [];
    mocks.reduce((prev,current,index) => {
        if (current.price < 80){
            let obj = {};

            for (key in current){
                obj[key] = current[key];
            }
            obj['discount'] = true;
            res.push(obj);
        }
    },null)
    return res;
}

function fillTable(){
    const tbody = document.getElementById('tbody');
    newList.forEach((item,index) => {
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        th.setAttribute('scope', 'row');
        th.innerText = index;
        tr.appendChild(th);
        for (key in item){
            let td = document.createElement('td');
            td.innerText = item[key];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    })
}