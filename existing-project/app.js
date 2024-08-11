

import firstComponent from './components/firstComponent.js'
import secondComponent from './components/secondComponent.js'

export default {
  name: 'App',
  template:
    `<div id=firstComponent><firstComponent/></div>
    <div id=secondComponent><secondComponent/></div>`
  ,
  
  components: {
    // Завдання 5: Створіть окремий файл з компонентом, зареєструйте та додайте до проєкту. 
    firstComponent,
    // Завдання 9: Створіть другорядний об'єкт Vue і прив'яжіть його до деякого елементу HTML на вашій сторінці.
    secondComponent
  }
}
