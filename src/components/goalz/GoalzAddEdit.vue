<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-1 justify-between items-center p-3 pl-24 pr-24">
      <h1 class="text-lg font-bold">{{ menutitle }}</h1>
      <router-link
        to="/goalz"
        class="flex items-center p-2 bg-blue-500 hover:bg-blue-100 hover:text-blue-500 rounded-lg text-white font-semibold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
        <div>
          {{ buttontitle }}
        </div>
      </router-link>
    </div>

    <div class="h-full w-full justify-center items-center flex bg-gray-100">
      <form
        class=" flex flex-col h-auto w-auto p-10 bg-white rounded-lg shadow-lg"
      >
        <h1 class="font-bold text-lg mb-4">
          {{ "Add New" + " " + menutitle }}
        </h1>
        <div class="flex flex-col">
          <label for="Name" class="mr-4 self-start">Name:</label>
          <input type="text" class="rounded mb-4 " name="Name" />
          <label for="Amount" class="mr-4 self-start">Amount:</label>
          <input type="number" class="rounded mb-4" name="Amount" />
          <label for="wallets" class="self-start">Choose a wallet:</label>
          <select class="rounded mb-4" name="wallets" id="wallets">
            <option value="volvo">BPI1</option>
            <option value="saab">BPI2</option>
          </select>
        </div>

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
  </div>
</template>

<script>
export default {
  data() {
    return {
      menutitle: "GoalZ",
      buttontitle: "Back",
    };
  },
};
</script>
