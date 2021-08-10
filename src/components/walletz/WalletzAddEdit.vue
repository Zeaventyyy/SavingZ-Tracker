<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-1 justify-between items-center p-3 pl-24 pr-24">
      <h1 class="text-lg font-bold">{{ menutitle }}</h1>
      <button
        @click="showForm"
        class="flex items-center p-2 bg-blue-500 hover:bg-blue-100 hover:text-blue-500 rounded-lg text-white font-semibold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <div>
          {{ buttontitle }}
        </div>
      </button>
    </div>

    <div class="h-full w-full justify-center items-center flex bg-gray-100">
      <form
        class=" flex flex-col h-auto w-auto p-10 bg-white rounded-lg shadow-lg"
      >
        <h1 class="font-bold text-lg mb-4">
          {{ buttontitle }} {{ menutitle }}
        </h1>

        <div>
          <label for="Wallet Name" class="mr-4">Wallet Name:</label>
          <input type="text" class="rounded mb-4" name="Wallet Name" />
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
      menutitle: "WalletZ",
      buttontitle: "Add New",
    };
  },
};
</script>
