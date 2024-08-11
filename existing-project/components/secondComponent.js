
export default ({
    name: 'secondComponent',

    data () {
        return {
            msg: 'it is a second vue component'
        }
    },

    template:
        `<div class="bubble">
        <h1>{{msg}}</h1>

        </div>`
    ,
})