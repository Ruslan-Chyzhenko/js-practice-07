const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
console.log('Number of categories', categoryItems.length);

categoryItems.forEach(categoryItem => {
    const categoryName = categoryItem.querySelector('h2').textContent;
    const categoryElements = categoryItem.querySelectorAll('ul li');

    console.log(`\nCategory: ${categoryName}`);
    console.log(`Elements: ${categoryElements.length}`);
});


// const categoriesList = document.querySelector('#categories');
// const categoryItems = categoriesList.querySelectorAll('li.item');
// console.log('Number of categories:', categoryItems.length);

// categoryItems.forEach(categoryItem => {
//     const categoryName = categoryItem.querySelector('h2').textContent;
//     const categoryElements = categoryItem.querySelectorAll('ul li');

//     console.log(`\nCategory: ${categoryName}`);
//     console.log(`Elements: ${categoryElements.length}`);
// });


