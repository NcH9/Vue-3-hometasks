// Завдання 5: Створіть окремий файл з компонентом, зареєструйте та додайте до проєкту. 

import firstComponentMsg from './firstCompContent.js';
export default ({
    name: 'firstComponent',

    data () {
        return {
        }
    },

    template:
        '<div class="bubble"><firstComponentMsg/></div>'
    ,

    // Завдання 7: Створіть ще один окремий файл з компонентом, зареєструйте та використуйте його у існуючему компоненті. 
    components: {
        firstComponentMsg
    }
})