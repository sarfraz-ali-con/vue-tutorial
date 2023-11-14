<template>
  <div>
    <Form @form-submitted="handleFormSubmitted" />
    <Table :tableData="tableData" />
  </div>
</template>


<script>

import Form from './components/FormComponent.vue'
import Table from './components/TableComponent.vue'


export default {
  name: 'App',
  components: {
    Form,
    Table
  },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    handleFormSubmitted(submittedData) {
      // Update tableData with the submitted data
      this.tableData.push(submittedData);
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
