<template>
    <div>
      <form @submit.prevent method="post">
        <input v-model="username" type="text" name="username" placeholder="name">
        <input v-model="email" type="email" name="email" placeholder="email">
        <input v-model="password" type="password" name="password" placeholder="password">
        <button type="submit" @click="formData">Create account</button>
      </form>
    </div>
  </template>
  
  <script>

  export default {
    name: "FormComponent",
    data() {
      return {
        username: "",
        email: "",
        password: "",
      };
    },
    methods: {
      async formData() {
        // Emit an event to notify the parent component (App.vue) that the form is submitted
      this.$emit('formSubmitted', this.formData);
      
        try {
          const formDataObject = {
            username: this.username,
            email: this.email,
            password: this.password,
          };
  
          const response = await this.$axios.post('http://127.0.0.1:8000/api/add', formDataObject);
          console.log('Form submitted successfully:', response.data);
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      },
    },
  };
  </script>
  