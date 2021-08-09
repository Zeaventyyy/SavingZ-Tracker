<template>
  <div class="flex flex-col h-screen" id="app">
    <Navbar />
    <AddForm />
  </div>
</template>

<script>
import AddForm from "./components/AddForm.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    AddForm,
    Navbar,
  },
};
</script>

<style>
#app {
  font-weight: 400;
  font-family: Poppins, Helvetica, sans-serif;
  font-size: 13px !important;
}
</style>
