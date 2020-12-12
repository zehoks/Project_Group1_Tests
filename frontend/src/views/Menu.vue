<template>
    <p>menuuu</p>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            menu:{}
        }
    },
    created(){
        this.init()
    },
    methods: {
        async init() {

            const res = await this.$axios.get('/menu')
            this.menu = res.data
            console.log('we are in init function')
        }
    }

}
</script>