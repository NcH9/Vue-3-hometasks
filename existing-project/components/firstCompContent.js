


export default ({
    name: 'firstComponentMsg',
    messageToSecondaryElement: 'hello, it`s a message from first element that was passed to this element',
    methods: {
        handle () {
            this.objectToEdit = {
                name: 'after',
                age: 0,
                status: 'changed'
            }
        }
    },
    
    data () {
        return {
            firstComponentMsg: 'it is a first vue component',
            objectToEdit: {
                name: 'before',
                age: 1
            }
        }
        
    },

    template:
    // Завдання 6: Створіть форму вводу тексту та зв'яжіть введене значення з властивістю об'єкта Vue. Виведіть введений текст на сторінці.
        `<div><h1>{{firstComponentMsg}}</h1></div>
        
        <div><input type="text" :value="firstComponentMsg" @input="firstComponentMsg = $event.target.value"></div>

        <div><button @click="handle">change this object </button>--->{{this.objectToEdit}}</div>
        `
    ,
})