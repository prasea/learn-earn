let lis;
const lisOdd = document.querySelectorAll('ul li:nth-child(odd)');
const lisEven = document.querySelectorAll('ul li:nth-child(even)');

lisOdd.forEach(function(li){
    li.style.background = '#ccc';
});
for(let i=0;i<lisEven.length;i++){
    lisEven[i].style.background = 'red';
}