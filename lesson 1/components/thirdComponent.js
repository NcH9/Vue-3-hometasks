

import firstComponentMsg from './firstCompContent.js';
export default ({
    name: 'thirdComponent',

    data () {
        return {
            msg: 'it is a third vue component',
            firstComponentMsg,
        }
    },

    
    template:
        `<div class="bubble">
        <h1>{{msg}}</h1>
        <!-- Завдання 10: Передайте данні від основного об'єкта до другорядного.-->
        <h3>{{firstComponentMsg.messageToSecondaryElement}}</h3>
        </div>`
    ,
})