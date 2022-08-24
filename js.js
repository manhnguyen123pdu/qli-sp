let arrProduct = ['iphone 12','iphone X' ,'iphone 7 pluss','samsung']

function display(arrProduct1) {
    let content = document.querySelector('.content');
    let product="";
    for (i = 0; i < arrProduct1.length; i++) {
        product += `<div class="item">
    <p>${arrProduct1[i]}</p>
    <div class="item__right">
        <button onclick=edit(${i})>Edit</button>
        <button onclick= deleteItem(${i}) class="del">Delete</button>
    </div>
    </div>`
    }
    let newProduct = document.querySelector('.content')
    let itemnumber = document.querySelector('.out')
    newProduct.innerHTML = product;
    itemnumber.innerHTML=arrProduct.length +' product'
}

display(arrProduct)


function addItem() {
    let item = document.querySelector(".nameitem").value;
    arrProduct.push(item);
    display(arrProduct)
}


function deleteItem(i) {
  arrProduct.splice(i,1);
  display(arrProduct)
}

function edit(i){
    let value=prompt(' mời nhập thay thế', arrProduct[i])
    arrProduct[i]=value;
    display(arrProduct)
}

function search(){
    let search=document.querySelector('.search1').value;
    let arrSearch=[];
    for(k=0;k<arrProduct.length;k++){
        if(arrProduct[k].indexOf(search)!=-1){
            arrSearch.push(arrProduct[k]);
        }
    }
    display(arrSearch)
}
function sort(){
    let value=document.querySelector('#sort').value;
    console.log(value);
    if(value=='1'){
        arrProduct.sort();
    }
    else{
        arrProduct.sort().reverse();
    }
    display(arrProduct)
}