// // +++ Властивість textContent +++

// // Властивість textContent повертає весь текстовий контент усередині елементів (власних і вкладених елементів).

// <p class="text">Username: <span class=”sub-text”>Mango</span></p>

// // Для отримання текстового контенту елемента, як завжди, отримуємо посилання на елемент і звертаємося до властивості через крапку.

// const el = document.querySelector(".text")
// const nested = document.querySelector(".sub-text")
// console.log(el.textContent); // "Username: Mango"
// console.log(nested.textContent); // "Mango"

// // Властивість textContent можна як читати, так і змінювати.

// const el = document.querySelector(".text")
// console.log(el.textContent); // "Username: Mango"
// el.textContent = "Username: Poly";


// // <article class="article">
// //   <h2 class="article-title">Welcome to Hawaii!</h2>
// //   <p class="article-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quaerat nemo veritatis quasi eius eum aliquid, nobis dolore nisi, magnam eaque iusto, necessitatibus atque laborum quam tempora ducimus dicta ipsam.</p>
// // </article>

// // const textEl = document.querySelector(".article-text");
// // console.log(textEl.textContent); // text inside p.article-text

// // const titleEl = document.querySelector(".article-title");
// // titleEl.textContent = 'Welcome to Bahamas!';


// // +++ Властивість classList +++

// // <a class="link is-active" href="<https://goit.global>">GoIT</a> //

// // Властивість classList — це спеціальний тип об’єкта, який подібний до масиву. Зверни увагу, що він схожий, але не є нативним JavaScript-масивом, який ми вивчали раніше. Він зберігає в собі весь перелік класів DOM-елемента, властивість length і властивість value.

// // * властивість value містить точне значення атрибута class
// // * властивість length — кількість класів в елемента

// const link = document.querySelector(".link");
// console.log(link.classList); 
// // ["link", "is-active", length: 2, value: "link is-active"]


// // +++ Метод classList.contains(className) +++

// // Метод очікує аргументом рядок з іменем класу та повертає true або false, залежно від наявності класу className в елемента.

// // Зверни увагу, що className передаємо як рядок без крапки (без селектора класу).


// const hasActiveClass = link.classList.contains("is-active"); // true
// const hasActiveClass = link.classList.contains("title"); // false


// // +++ Метод classList.add(className) +++

// // Метод очікує аргументом рядок з іменем класу та додає клас className до списку класів елемента.

// link.classList.add("special");
// console.log(link.classList); 
// // ["link", "is-active", "special", length: 3, value: "link is-active special"]

// // Можна додавати більше одного класу, вказавши кілька аргументів через кому.


// // +++ Метод classList.remove(className) +++

// // Метод очікує аргументом рядок з іменем класу та видаляє клас className зі списку класів елемента.

// link.classList.remove("is-active");
// console.log(link.classList); 
// // ["link", "special", length: 2, value: "link special"]

// // Якщо спробувати видалити клас, якого не існує на елементі, то це не викличе помилку. 
// // Просто нічого не видалиться.

// // +++ Метод classList.toggle(className) +++

// // Метод працює як перемикач:

// // якщо клас className відсутній, то додає його в кінець списку класів
// // і навпаки, якщо клас className присутній — видаляє його


// link.classList.toggle("is-active");
// console.log(link.classList); 
// // ["link", "special", "is-active", length: 3, value: "link special is-active"]


// // +++ Метод classList.replace(oldClassName, newClassName) +++

// // Метод очікує 2 аргументи рядка (перший — стара назва класу, другий — нова назва класу) та замінює існуючий клас oldClassName на вказаний newClassName.

// link.classList.replace("special", "regular");
// console.log(link.classList); 
// // ["link", "regular", "is-active", length: 3, value: "link regular is-active"]

// // Якщо спробувати поміняти клас, якого не існує на елементі, то це не викличе помилку. Просто нічого не поміняється.


// // +++ Властивість style +++

// // Властивість style використовується для читання та зміни вбудованих стилів з DOM-елементів.
// // Вона повертає об'єкт, який містить список лише всіх вбудованих властивостей елемента, а не увесь CSS.

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object


// // +++ Доступ до атрибутів +++

// // DOM-елементам відповідають HTML-теги, які містять текстові атрибути.

// // Доступ до атрибутів здійснюється за допомогою стандартних методів. Ці методи працюють зі значенням, яке знаходиться в HTML.


// // <img class="image" src="<https://picsum.photos/id/15/320/240>" alt="Rocks and waterfall" width="300" />

// // +++ Метод element.hasAttribute(nameAttribute) +++

// // Метод приймає один аргумент — рядок nameAttribute,
// // який містить ім’я атрибута для перевірки та повертає результат перевірки його наявності 
// // на елементі element — true чи false.

// const image = document.querySelector(".image");
// console.log(image.hasAttribute("src")); // true
// console.log(image.hasAttribute("href")); // false

// // +++ Метод element.getAttribute(nameAttribute) +++

// // Метод отримує один аргумент — рядок nameAttribute з іменем атрибута, 
// // і повертає значення цього атрибута для вказаного HTML - елемента element.
// // Якщо атрибут не знайдено, метод повертає null.

// console.log(image.getAttribute("alt")); // "Rocks and waterfall"

// // +++ Метод element.setAttribute(nameAttribute, value) +++

// // Метод приймає два аргументи: рядок nameAttribute з іменем атрибута, 
// // який потрібно встановити або змінити, та value зі значенням, 
// // яке цьому атрибуту треба присвоїти.
// // Метод встановлює або змінює значення зазначеного атрибута для вказаного HTML - елемента element.

// image.setAttribute("alt", "Amazing nature");
// console.log(image.getAttribute("alt")); // Amazing nature


// // +++ Метод element.removeAttribute(nameAttribute) +++

// // Метод приймає один аргумент — рядок nameAttribute з іменем атрибута, 
// // який потрібно видалити зі вказаного HTML - елемента element — та видаляє його.
// // Якщо зазначеного атрибута немає на елементі, метод не викликає жодних помилок та не робить нічого.

// image.removeAttribute("alt");
// console.log(image.hasAttribute("alt")); // false

// // !Отримати доступ або змінити значення деяких атрибутів елемента можна безпосередньо,
// // звернувшись до них як до властивостей DOM - об'єкта.
// // Це буде менш затратно за кількістю коду.


// // +++ Створення елементів +++

// document.createElement(tagName)

// // створює елемент з ім'ям tagName і повертає посилання на його об’єкт як результат свого виконання.
// // tagName — це рядок, що вказує тип елемента, який створюється.
// // Елемент створюється в пам'яті, у DOM його ще немає.

// const heading = document.createElement("h1");

// // Після створення елемента heading отримуємо посилання на його об’єкт у пам'яті. 
// // З цього моменту можна звертатися до властивостей цього об’єкта 
// // і змінювати їх ще до того, як вставимо цей елемент у DOM.

// const heading = document.createElement("h1");
// headding.classList.add("title");
// heading.textContent = "This is a heading";
// console.log(heading); // <h1 class="title">This is a heading</h1>

// const image = document.createElement("img");
// image.src = "<https://picsum.photos/id/11/320/240>";
// image.alt = "Nature";
// console.log(image); // <img src="<https://picsum.photos/id/11/320/240>" alt="Nature" />

// // +++ Додавання елементів +++

// // Щоб створений елемент відображався на сторінці,
// // його необхідно додати до вже існуючого елемента в DOM - дереві.
// // Припустимо, що додаємо до певного елемента elem, для цього існують такі методи.

// // *elem.append(el1, el2, ...) — додає один або декілька елементів після всіх дітей елемента elem.
// // *elem.prepend(el1, el2, ...) — додає один або декілька елементів перед усіма дітьми елемента elem.


// // Зверни увагу!!! Якщо елемент для додавання вже знаходиться в DOM, то він видаляється зі свого старого місця й додається у нове. Отже, є правило: один і той самий елемент не може бути одночасно у двох місцях.


// // +++ Видалення елементів +++

// // Для того щоб видалити елемент, використовується метод element.remove().

// HTML// <p class="text">Random text content</p>

// // Він викликається на елементі element, який необхідно видалити.

// const text = document.querySelector(".text")
// text.remove();

// // +++ Властивість innerHTML +++

// // Існує ще один спосіб створити DOM-елементи і помістити їх у DOM-дерево.

// // Для цього треба використати рядки з тегами і дозволити браузеру зробити всю важку роботу.
// // У такого підходу є свої плюси та мінуси.

// // +Читання+

// // Властивість innerHTML зберігає вміст елемента, включно з тегами, у вигляді рядка.
// // Значення, що повертається, — це завжди валідний HTML - код.

// HTML// <article class="article">
// //   <h2 class="title">Article title</h2>
// //   <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! <strong>Praesentium</strong> accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.</p>
// //   <a class="link" href="">Read more</a>
// // </article>

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// // +Зміна+

// // Властивість innerHTML доступна і для читання, і для запису. Якщо записати в неї рядок з HTML-тегами, то браузер під час парсингу рядка перетворить його у валідні елементи і додасть у DOM-дерево.

// HTML// <article class="article">
// //   <h2 class="title">Article title</h2>
// //   <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! <strong>Praesentium</strong> accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.</p>
// //   <a class="link" href="">Read more</a>
// // </article>

// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// // !!! Якщо у властивість innerHTML записати порожній рядок, то вміст елемента буде очищено. Це простий і швидкий спосіб видалення всього вмісту.

// // + Однотипна (шаблонна) розмітка створюється із масиву даних. +

// // !!! Прийом полягає в перебиранні цього масиву та створенні одного рядка з HTML-тегами, який потім записуємо в innerHTML елемента.

// // Якщо ти будеш це робити за допомогою методу map(),
// // не забудь, що він повертає масив.
// // Отже, перед тим як додавати розмітку в DOM,
// // цей масив треба привести до рядка за допомогою методу join()

// // метод join() - приводить масив до рядка!

// HTML// <section>
// //   <h2>Popular technologies</h2>
// //   <ul class="list"></ul>
// // </section>

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies.map((technology) => 
// // `<li class="list-item">${technology}</li>`) 
// .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

// // Нове значення для element.innerHTML повністю видалить і повторно створить усіх нащадків елемента element. Якщо елемент спочатку не був порожній, то виникнуть додаткові витрати на повторне створення вже існуючої розмітки, а це погано.

// HTML// <article class="article">
// //   <h2>Article title</h2>
// // </article>

// const article = document.querySelector(".article");
// const htmlString = 
//     // `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//     //    <a class="link" href="#">Read more...</a>`;

// // Replace += with = operator. See the difference? 
// // Article title is lost because we overwrite element content.
// article.innerHTML += htmlString;

// // !!! Використовуй властивість element.innerHTML для додавання тільки у разі,
// // — коли елемент element порожній або
// // — якщо потрібно повністю замінити вміст element

// // !!! Використання оператора '+=' дозволяє додавати новий HTML-код до існуючого вмісту елемента, зберігаючи попередній вміст. Використання оператора '=' замінює весь вміст елемента новим HTML-кодом, що призводить до втрати попереднього вмісту.

// // +++ Метод insertAdjacentHTML() +++

// // !!! Метод insertAdjacentHTML() — це сучасний метод для додавання рядка з HTML-тегами перед, після або всередину елемента. Він вирішує проблему innerHTML з повторною серіалізацією вмісту елемента під час додавання розмітки до вже існуючої.

// element.insertAdjacentHTML(position, string)

// // Аргумент position — це рядок, який визначає позицію щодо елемента element.
// // Він приймає одне з чотирьох значень.

// // * "beforebegin" — перед element
// // * "afterbegin" — всередині element, перед усіма дітьми
// // * "beforeend" — всередині element, після усіх дітей
// // * "afterend" — після element

// // Значення "beforebegin" і "afterend" працюють тільки тоді, коли element вже знаходиться в DOM - дереві.
// // Обмеження зумовлене тим, що неможливо дізнатися, куди вставляти розмітку, доти, доки елемент не буде перебувати в DOM - дереві.

// HTML// <ul class="list">
// //   <li class="list-item">HTML</li>
// //   <li class="list-item">CSS</li>
// //   <li class="list-item">JavaScript</li>
// // </ul>

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");