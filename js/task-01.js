const categoriesItem = document.querySelectorAll('.item');
console.log(`В списке ${categoriesItem.length} категрий`);

categoriesItem.forEach(elem => {
    const tagTitle = elem.querySelector('h2')
    console.log('Категория:', tagTitle)
    console.log('Количество элементов:', ${categoriesItem.length}) 
    console.log('';)
});