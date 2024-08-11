// import { createApp } from 'vue';

import App from './app.js';
const app = Vue.createApp(App);
app.mount('#addedElem');

// Завдання 9: Створіть другорядний об'єкт Vue і прив'яжіть його до деякого елементу HTML на вашій сторінці.
import thirdComponent from './components/thirdComponent.js'
const addedApp = Vue.createApp(thirdComponent);
addedApp.mount('#addedApp')