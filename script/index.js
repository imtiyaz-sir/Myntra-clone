let bagItems;
onLoad();

function onLoad(){
let bagItemsStr=bagItems=localStorage.getItem('bagItems');
bagItems=bagItemsStr ? JSON.parse(bagItemsStr) :[];
  displayItemsOnHomePage();
displayBagIcon();
}


function addToBag(itemId){
 bagItems.push(itemId);
 localStorage.setItem('bagItems',JSON.stringify(bagItems));
 displayBagIcon();
}
function displayBagIcon(){
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if(bagItems.length > 0){
    bagItemCountElement.style.visibility='visible';
  bagItemCountElement.innerText = bagItems.length;
  }else {
    bagItemCountElement.style.visibility='hidden';
  }
}
function displayItemsOnHomePage(){
  let itemsContainerElement = document.querySelector('.items-container');
if(!itemsContainerElement){
  return;
}
let innerHtml = '';
items.forEach(item => {
  
  let discount = (item.original_price * item.discount_percentage) / 100;
    let price = Math.round((item.original_price - discount));
    
  innerHtml +=
    `  <div class="item-container">
    <div class="item-img">
          <img class="item-image " srcset="" src="${item.image}"> 
                 
              
             <div class="rating">
             ${item.rating.stars} <span class="star">★</span> |                ${item.rating.count}
            </div>
            </div>
             <div class="company-name">
             ${item.company}
             </div>
             <div class="item-name">
                ${item.item_name}
             </div>
             <div class="price">
                 <span class="current-price">${price}</span>
                 <span class="original-price">${item.original_price}</span>
                 <span class="discount">(${item.discount_percentage}% OFF)</span>
             </div>
             <button class="btn-add-bag"     onclick = "addToBag(${item.id});">Add to bag</button>
             <!-- Hover button (hidden by default) -->
<button class="btn-watchlist">♡ Wishlist</button>
          </div>`
});
itemsContainerElement.innerHTML = innerHtml;
};
