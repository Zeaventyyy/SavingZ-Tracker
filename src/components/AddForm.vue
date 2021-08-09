<template>
  <div class="h-full w-full justify-center items-center flex bg-gray-100">
    <form
      class=" flex flex-col h-auto w-auto p-10 bg-white rounded-lg shadow-lg"
    >
      <h1 class="font-bold text-lg mb-4">Add Wallet</h1>
      <label for="Account Name" class="mr-4">Name:</label>
      <input
        type="text"
        class="rounded text-pink-500 mb-4"
        name="Account Name"
      />
      <label for="Account Number" class="mr-4">Account Number:</label>
      <input
        type="text"
        class="rounded text-pink-500 mb-4"
        name="Account Number"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
