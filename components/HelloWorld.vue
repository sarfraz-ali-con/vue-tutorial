<template>
  <div>
    {{ $store.state.msg }}
    <button v-on:click="clicked">Click</button>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  methods: {
    clicked() {
      this.$store.dispatch("updateMessage");
    },
  },
};
</script>
