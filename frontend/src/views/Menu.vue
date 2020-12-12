<template>
    
    <div class="about">
    <h1>Вернуться на начальную страницу</h1>
        <p class="subheading font-weight-regular">
        <router-link to="/">Go to back</router-link>
        </p>
        <p>{{ menu }}</p>
    </div>
</template>

<script>
//import axios from 'axios'
//axios стал глобальным

export default {
    data () {
        return {
            menu:[]
        }
    },
    async created(){
        this.init()
    },
    methods: {
        async init() {

            const res = await this.$axios.get('/theme')
            this.menu = res.data 
            console.log('we are in init function')
        }
    }

}
</script>