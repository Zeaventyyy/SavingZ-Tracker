<template>
  <div class="flex flex-col h-screen" id="app">
    <Navbar @show-form-based-title="showForm" />
    <GoalzAddEdit />
    <WalletzAddEdit />
  </div>
</template>

<script>
import AddForm from "./components/AddForm.vue";
import Navbar from "./components/Navbar.vue";
import GoalzAddEdit from "./components/goalz/GoalzAddEdit.vue";
import WalletzAddEdit from "./components/walletz/WalletzAddEdit.vue";

export default {
  name: "App",
  data: {
    title: null,
    isGoalZ: true,
  },
  methods: {
    showForm(value) {
      this.title = value;
      console.log(this.title);
      if (this.title == "GoalZ") {
        this.isGoalZ = true;
      } else {
        this.isGoalZ = false;
      }
      return this.title == "GoalZ"
        ? (this.isGoalZ = true)
        : (this.isGoalZ = false);
    },
  },
  components: {
    AddForm,
    Navbar,
    GoalzAddEdit,
    WalletzAddEdit,
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
