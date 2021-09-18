<template>
  <nav class="bg-transparent">
    <div class="flex flex-col text-center nav-lg">
      <router-link
        to="/goalz"
        class="flex flex-row justify-between items-center text-white bg-blue-500 lg:bg-white lg:text-black  p-2"
      >
        <img
          src="@/assets/logo.svg"
          class="w-8 h-8 mr-4 fill-current text-white lg:text-black"
        />
        <h1 class="text-lg lg:font-bold">{{ title }}</h1>
        <button class="lg:hidden" v-on:click="isActive = !isActive">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </router-link>
      <ul
        class="flex flex-col lg:flex-row items-center justify-center ml-6 "
        v-bind:class="{ hidden: isActive }"
      >
        <router-link
          class="nav-btn"
          v-for="item in navitems"
          :key="item.id"
          @click="getTitle(index)"
          :to="item.endpoint"
        >
          {{ item.label }}
        </router-link>
      </ul>
    </div>
    <hr />
  </nav>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isActive: false,
      title: "SavingZ Tracker",
      menutitle: "GoalZ",
      navitems: [
        { label: "GoalZ", endpoint: "/goalz" },
        { label: "WalletZ", endpoint: "/walletz" },
      ],
    };
  },
  methods: {
    getTitle(index) {
      this.$emit(
        "show-form-based-title",
        (this.menutitle = this.menuitem[index])
      );
      // console.log((this.menutitle = this.menuitem[index]));
      // console.log(this.menutitle);
      return (this.menutitle = this.menuitem[index]);
    },
    showForm() {
      this.navitems.forEach((item) => {
        console.log(item.label, item.endpoint);
      });
    },
  },
};
</script>
