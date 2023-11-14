<!-- ExampleComponent.vue -->
<template>
    <div>
      <h1>{{ msg }}</h1>
      <div v-if="dataFromApi">
        <h2>Data from API:</h2>
        <pre>{{ dataFromApi }}</pre>
      </div>
      <b v-else>Loading
      {{
        animation
      }}
      </b>
    </div>
  </template>
  
  <script>
  export default {
    store: require('@/store').default,
  
    data(){
        return{
            animation:"",
            dataload:false
        }
    },
    computed: {
      msg() {
        return this.$store.state.msg;
      },
      dataFromApi() {
        
        return this.$store.state.dataFromApi;
      },
    },
  
    methods: {
      updateMessage() {
        this.$store.dispatch('updateMessage');
      },
      fetchDataFromApi() {
        this.$store.dispatch('fetchDataFromApi');
      },
      loading() {
  let loadingValue = ' ....';
  let i = 0;

  let intervalId = setInterval(() => {
    this.animation += loadingValue[i];
    i++;

    if (i === loadingValue.length) {
      i = 0; // Reset the index for the next iteration
      this.animation = ''; // Clear the animation for the next iteration
    }

    if (this.dataload) {
      clearInterval(intervalId); // Clear the interval when dataload is true
    }
  }, 500);
}


  },
  
    created() {
      // Autoload data when the component is created
      this.fetchDataFromApi();
      this.loading();
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  