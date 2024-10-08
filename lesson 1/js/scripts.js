// Завдання 1: Підключіть Vue 3 до вашого існуючого проекту, використовуючи CDN-посилання.

// Завдання 2: Створіть основний об'єкт Vue і прив'яжіть його до деякого елементу HTML на вашій сторінці.
function createMainElement()
{
    const App = {
        data(){
            return {
                // Завдання 3: Створіть змінну в об'єкті Vue і виведіть її значення на сторінці.
                counter: 0,
            }
        },
    }
    const app = Vue.createApp(App);
    app.mount('#vueElem');
}
createMainElement();

// Завдання 4: Додайте в існуючий проект кнопку, яка буде змінювати значення вашої змінної в об'єкті Vue при кожному кліку.
// Завдання 5: Створіть окремий файл з компонентом, зареєструйте та додайте до проєкту. 
// Завдання 6: Створіть форму вводу тексту та зв'яжіть введене значення з властивістю об'єкта Vue. Виведіть введений текст на сторінці.
// Завдання 7: Створіть ще один окремий файл з компонентом, зареєструйте та використуйте його у існуючему компоненті. 
// Завдання 8: Створіть обробники подій, які реагують на події кліку та змінюють стан вашого об'єкта Vue.
// Завдання 9: Створіть другорядний об'єкт Vue і прив'яжіть його до деякого елементу HTML на вашій сторінці.
// Завдання 10: Передайте данні від основного об'єкта до другорядного.

