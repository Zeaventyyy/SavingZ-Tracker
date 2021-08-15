<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-1 justify-between items-center p-3 pl-24 pr-24">
      <h1 class="text-lg font-bold">{{ menutitle }}</h1>
      <router-link
        to="/walletz"
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
      <div
        class=" flex flex-col h-auto w-auto p-10 bg-white rounded-lg shadow-lg"
      >
        <h1 class="font-bold text-lg mb-4">
          {{ menuTitleType + " " + menutitle }}
        </h1>

        <div class="flex flex-col">
          <label for="Wallet Name" class="mr-4 self-start">Wallet Name:</label>
          <input
            type="text"
            class="rounded mb-4"
            v-model="form.name"
            name="Wallet Name"
          />
        </div>

        <div class="flex justify-end">
          <router-link
            to="/walletz"
            class="p-2 bg-red-500 hover:bg-red-900 rounded-lg text-white text-xs mr-2"
            >Cancel
          </router-link>
          <button
            class="p-2 bg-blue-500 hover:bg-blue-900 rounded-lg text-white text-xs"
            @click="addWallet"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      destinationId: this.$route.params.id,
      menuTitleType: "Add New",
      menutitle: "WalletZ",
      buttontitle: "Back",
      form: {
        id: null,
        name: null,
      },

      wallets: [],
    };
  },
  mounted() {
    if (localStorage.getItem("wallets")) {
      try {
        this.wallets = JSON.parse(localStorage.getItem("wallets"));
        this.formData();

        console.log("Tuwing kelan ba to tinatawag");
      } catch (e) {
        // localStorage.removeItem("wallets");
        console.log(e);
      }
    }
  },
  methods: {
    removeWallet(x) {
      this.wallets.splice(x, 1);
    },
    addWallet() {
      // ensure they actually typed something
      if (!this.form.name) {
        return;
      }
      if (this.destination != null) {
        this.removeWallet(this.indexLang);
        this.form.id = this.destinationId;
        this.wallets.push(this.form);
        this.form = "";
        this.saveWallets();
        console.log(this.destinationId);
      } else {
        this.form.id = uuidv4();
        this.wallets.push(this.form);
        this.form = "";
        this.saveWallets();
        console.log("Nagdagdag");
      }
    },
    saveWallets() {
      const parsed = JSON.stringify(this.wallets);
      localStorage.setItem("wallets", parsed);
    },
    formData() {
      if (this.destination != null) {
        this.menuTitleType = "Edit";
        this.form.name = this.destination.name;
        this.form.id = this.destination.id;
      }
    },
  },
  computed: {
    destination() {
      return this.wallets.find((i) => i.id === this.destinationId);
    },
    indexLang() {
      return this.wallets.findIndex((o) => o.id === this.destinationId);
    },
  },
};
</script>
