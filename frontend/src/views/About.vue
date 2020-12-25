<template>

<v-col class="mb-4" cols="12">
<v-card
    class="mx-auto"
    max-width="844"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          Tests
        </div>
        <v-list-item-title class="headline mb-1">

          <v-data-table
        :headers="headers" 
        :items="menu" 
        :items-per-page="1" 
        class="elevation-1">
          </v-data-table>

        </v-list-item-title>
        <v-list-item-subtitle> 

        <v-data-table
        :headers="headers1" 
        :items="menu"
        :items-per-page="1" 
        class="elevation-1"> 
          </v-data-table>

        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="100"
        color="red"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
      <div class="about">
      <p class="subheading font-weight-regular">
      <router-link to="/">Go to back</router-link>
      </p>
  </div>
      </v-btn>
    </v-card-actions>
  </v-card>


<v-col class="mb-4" cols="12">
<v-card
    class="mx-auto"
    max-width="844"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          Tests
        </div>
        <v-list-item-title class="headline mb-1">
          
          <v-data-table
          
        :headers="headers" 
        :items="menu" 
        class="elevation-1">
        
          </v-data-table>

        </v-list-item-title>
        <v-list-item-subtitle> 

        <v-data-table
        
        :headers="headers1" 
        :items="menu"
        class="elevation-1">

    
          </v-data-table>

        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="100"
        color="green"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
      <div class="about">
      <p class="subheading font-weight-regular">
      <router-link to="/">Go to back</router-link>
      </p>
  </div>
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>



  </v-col>




  
</template>

<script>
  export default {
    data () {
        return {
            menu:[],
            headers: [
        { text: 'Название', value: 'name' },
            ],
            menu1:[1],
            headers1: [
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
            this.menu = res.data 
            this.menu1 = res.data
            console.log('we are in init function')
        }
    }
  }
</script>


