
const item = document.querySelectorAll('#categories .item')

console.log(`Number of categories: ${item.length}`);

item.forEach((item) => {
    console.log(`Category: ${item.querySelector('h2').textContent}`)
    console.log(`Elements: ${item.querySelectorAll('li').length}`)
  });


