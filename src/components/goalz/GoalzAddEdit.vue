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
          <input
            type="text"
            class="rounded mb-4 "
            v-model="form.name"
            name="Name"
          />
          <label for="Amount" class="mr-4 self-start">Amount:</label>
          <input
            type="number"
            class="rounded mb-4"
            v-model="form.amountToSave"
            name="Amount"
          />
          <label for="wallets" class="self-start">Choose a wallet:</label>
          <select
            class="rounded mb-4"
            name="wallets"
            id="wallets"
            v-model="form.wallet"
          >
            <option
              v-for="wallet in walletItems"
              :key="wallet.id"
              v-bind:value="wallet"
              >{{ wallet.name }}</option
            >
          </select>
        </div>

        <div class="flex justify-end">
          <router-link
            to="/goalz"
            class="p-2 bg-red-500 hover:bg-red-900 rounded-lg text-white text-xs mr-2"
            >Cancel
          </router-link>
          <button
            class="p-2 bg-blue-500 hover:bg-blue-900 rounded-lg text-white text-xs"
            @click="addGoalz"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      menutitle: "GoalZ",
      buttontitle: "Back",
      form: {
        id: "",
        name: "",
        amountToSave: Number,
        wallet: {},
      },
      goalz: [],
      walletItems: [],
    };
  },
  created() {
    this.getWalletz();
    this.getGoalz();
  },
  methods: {
    addGoalz() {
      // ensure they actually typed something
      if (!(this.form.amountToSave && this.form.wallet && this.form.name)) {
        console.log("Di nag save");
        return;
      }

      this.form.id = uuidv4();
      console.log(this.form.id);
      this.goalz.push(this.form);
      this.saveGoalz();
      this.form = "";
      console.log("Nagdagdag");
    },
    removeGoalz(x) {
      this.goalz.splice(x, 1);
      this.saveGoalz();
    },
    saveGoalz() {
      const parsed = JSON.stringify(this.goalz);
      localStorage.setItem("goalz", parsed);
    },
    getWalletz() {
      if (localStorage.getItem("wallets")) {
        try {
          this.walletItems = JSON.parse(localStorage.getItem("wallets"));
        } catch (e) {
          return;
        }
      }
    },
    getGoalz() {
      if (localStorage.getItem("goalz")) {
        try {
          this.goalz = JSON.parse(localStorage.getItem("goalz"));
        } catch (e) {
          // localStorage.removeItem("goalz");
        }
      }
    },
  },
};
</script>
