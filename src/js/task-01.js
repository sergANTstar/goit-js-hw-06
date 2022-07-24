const categoriesItems = document.querySelectorAll('.item')
console.log(`Number of categories: ${categoriesItems.length}`);

//console.log(`Category: ${categoriesItems[0].childNodes[1].textContent}`)
//console.log(`Elements: ${categoriesItems[0].childNodes[3].children.length}`)

//console.log(`Category: ${categoriesItems[1].childNodes[1].textContent}`)
//console.log(`Elements: ${categoriesItems[1].childNodes[3].children.length}`)

//console.log(`Category: ${categoriesItems[2].childNodes[1].textContent}`)
//console.log(`Elements: ${categoriesItems[2].childNodes[3].children.length}`)

categoriesItems.forEach(h => 
    {return console.log(`Category: ${h.childNodes[1].textContent}\n
     Elements:  ${h.childNodes[3].children.length}`)})





