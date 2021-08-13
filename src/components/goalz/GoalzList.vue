<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-1 justify-between items-center p-3 pl-24 pr-24">
      <h1 class="text-lg font-bold">{{ menutitle }}</h1>
      <router-link
        to="/add-goalz"
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
      </router-link>
    </div>

    <div class="h-full w-full justify-center items-center flex bg-gray-100">
      <ul id="example-1">
        <li v-for="item in items" :key="item.message">
          {{ item.message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menutitle: "GoalZ",
      buttontitle: "Add New",
      items: [{ message: "Foo" }, { message: "Bar" }],
    };
  },
};
</script>
