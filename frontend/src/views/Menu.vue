<template>
    
    <div class="about">
    <h1>Вернуться на начальную страницу</h1>
        <p class="subheading font-weight-regular">
        <router-link to="/">Go to back</router-link>
        </p>
        <p>
    <v-data-table
    :headers="headers" 
    :items="menu" 
    :items-per-page="1" 
    class="elevation-1">
    </v-data-table>
        </p>
        <v-container fluid>
    <v-textarea
        name="input-7-1"
        filled
        label="Label"
        auto-grow
        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
    ></v-textarea>
    </v-container>
    </div>
</template>

<script>
//import axios from 'axios'
//axios стал глобальным

export default {
    data () {
        return {
            menu:[],
            headers: [
        { text: 'Название', value: 'name' },
        { text: 'Описание', value: 'description' },
            ],
        }
    },
    async created(){
        this.init()
    },
    methods: {
        async init() {
            
            const res = await this.$axios.get('/theme')
        const res = await this.$axios.get('/search?name=123&surname=123')        
        this.menu = res.data 
            console.log('we are in init function')
        }
    }

}
</script>
