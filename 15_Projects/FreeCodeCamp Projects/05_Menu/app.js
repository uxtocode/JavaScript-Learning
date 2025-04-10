const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: "Fluffy buttermilk pancakes served with maple syrup and a side of fresh berries. A perfect way to start your morning.",
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: "A classic double cheeseburger stacked with juicy patties, lettuce, tomato, and house sauce, served with fries.",
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: "An epic chocolate milkshake topped with whipped cream, cookie crumbles, and chocolate drizzle — a monster treat!",
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: "A hearty country-style breakfast with eggs, toast, sausage, and crispy hash browns. Comfort food at its finest.",
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: "A bold sandwich packed with scrambled eggs, crispy bacon, avocado, and melted cheese on a brioche bun.",
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: "Creamy vanilla shake blended with Oreo cookies, topped with whipped cream and cookie crumble. A dream come true!",
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: "Crispy bacon served generously over scrambled eggs and toast. For true bacon lovers who can’t get enough.",
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: "An all-American cheeseburger with lettuce, tomato, pickles, and cheddar cheese served with golden fries.",
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: "A comforting blend of chocolate and peanut butter shake — your perfect stay-at-home treat anytime of the day.",
  },
];


// new array after filteration
let newArray;



// section where items will be shown
const section = document.querySelector(".section-center");



// Initial Items shown from "menu" array
window.addEventListener("DOMContentLoaded", () => {
  showItems(menu);
})


// setting value of item
document.querySelector(".btn-container").addEventListener("click", (e) => {
  const itemCategory = e.target.id;
  if (itemCategory === "all") {
    newArray = menu;
  } else {
    newArray = menu.filter(item => {
      return item.category === itemCategory;
    });
  }
  showItems(newArray);
});


// function to show items on the page
function showItems(menuItems) {
  section.innerHTML = "";
  menuItems.map(item => {
    const article = document.createElement("article");
    article.classList = "menu-item";
    article.innerHTML =
      `<img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>`;
    section.appendChild(article);
  })
}