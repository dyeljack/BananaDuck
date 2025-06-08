document.getElementById('header').innerHTML = await fetch('header.html').then(res => res.text());
document.getElementById('footer').innerHTML = await fetch('footer.html').then(res => res.text());

const dropdown = document.getElementById('dropdown-menu');
const dropbtn = document.getElementById("currency-button");
const searchbar = document.getElementById('searchbar');
const searchbtn = document.getElementById('search-button');
const search = document.getElementById('searchbar-search');
const searchbtn1 = document.querySelector('.searchbar-btn1'); 


dropbtn.onclick = function(){
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
};
searchbtn.onclick = function(){
  searchbar.style.display = searchbar.style.display === 'flex' ? 'none' : 'flex';
  if(searchbar.style.display === 'flex'){
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
  }
};
window.addEventListener("click",function(event) {
    if(!event.target.matches('#currency-button')){
      dropdown.style.display = 'none';
    }
    if (!event.target.matches('#searchbar') && !event.target.matches('#search-button') && 
    !event.target.matches('#searchbar-search') && !event.target.matches(".btn1-img")){
      searchbar.style.display = 'none';
      document.body.style.overflow = 'visible';
      document.body.style.height = 'auto';
      document.body.style.overflowX = 'hidden';
    }
  });