<template>
    
    <div class="about">
    <h1>{{menu}}</h1>
        <p class="subheading font-weight-regular">
        <router-link to="/">Go to back</router-link>
        </p>
        <p>
    <v-data-table
    :headers="headers" 
    :items="menu" 

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
            
            const res = await this.$axios.get('/theme/3')
            .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
        console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    console.log(error.config);
        });
       // const res = await this.$axios.get('/search?name=123&surname=123')        
    this.menu = res.data 
    console.log('we are in init function')

        }
    }

}
</script>
