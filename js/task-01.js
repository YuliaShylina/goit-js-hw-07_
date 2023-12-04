// Отримуємо всі категорії (елементи li з класом "item")
const categoriesItems = document.querySelectorAll("ul#categories > li.item");

// Виводимо кількість категорій
console.log(`Number of categories: ${categoriesItems.length}`);

// Перебираємо кожен елемент li.item
categoriesItems.forEach((categoryItem) => {
    // Отримуємо заголовок категорії (текст тегу h2)
    const categoryTitle = categoryItem.querySelector("h2").textContent;

    // Отримуємо всі елементи в поточній категорії (усі li вкладені в li.item)
    const categoryElements = categoryItem.querySelectorAll("ul > li");

    // Виводимо інформацію про категорію
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements.length}`);
});
