<template>
  <div class="h-full w-full justify-center items-center flex bg-gray-100">
    <form
      class=" flex flex-col h-auto w-auto p-10 bg-white rounded-lg shadow-lg"
    >
      <h1 class="font-bold text-lg mb-4">{{ formTitle }}</h1>
      <div class=" flex flex-col">
        <label for="Name" class="mr-4">Name:</label>
        <input type="text" class="rounded mb-4 " name="Name" />
        <label for="Amount" class="mr-4">Amount:</label>
        <input type="number" class="rounded mb-4" name="Amount" />
        <label for="wallets">Choose a wallet:</label>
        <select class="rounded mb-4" name="wallets" id="wallets">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>

      <label for="Wallet Name" class="mr-4">Wallet Name:</label>
      <input
        type="text"
        class="rounded text-pink-500 mb-4"
        name="Wallet Name"
      />

      <div class="flex justify-end">
        <input
          class="p-2 bg-red-500 hover:bg-red-900 rounded-lg text-white mr-2 text-xs"
          type="submit"
          value="Cancel"
        />
        <input
          class="p-2 bg-blue-500 hover:bg-blue-900 rounded-lg text-white text-xs"
          type="submit"
          value="Submit"
        />
      </div>
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
