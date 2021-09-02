<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          flat
          dark
          v-bind="attrs"
          v-on="on"
          class="success"
        >
          Add new Project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Add a New Project
        </v-card-title>

        <v-card-text>
            <v-form class="px-3" ref="form">
              <v-text-field label="Title" :rules="inputRules"  v-model="title" prepend-icon="mdi-folder"></v-text-field>
              <v-textarea label="information" :rules="inputRules" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
                <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
           :rules="inputRules"
            v-model="datee"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    <v-spacer></v-spacer>
            <v-btn flat class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
// import format from 'date-fns/format'
// import db from '@/fb'
export default {
    data(){
      return{
        title:'',
        content:'',
        datee:null,
        inputRules:[
          v=> v.length>=3 || 'Minimum length is 3 characters'
        ]
      }
    },
    methods:{
      submit(){
        if(this.$refs.form.validate()){
          //add the content to the database
          const project={
            tittle:this.title,
            content:this.content,
            due:this.due,
            person:'Pita',
            status:'ongoing'
          }
          console.log(project)
          // db.collection('projects')
          // .add(project)
          // .then(()=>{
          //   console.log('added to db')
          // })
        }
      }
    },
    computed:{
      // formattedDate(){
      //   return this.date? format(this.date,'Do MMM YYYY'):''
      // }
    }
}
</script>