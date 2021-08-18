<template>
  <div class="flex flex-col h-full">
    <div class="flex justify-between items-center ml-24 mr-24 h-16">
      <p class="text-lg font-bold">{{ menutitle }}</p>
    </div>

    <div class="h-full w-full justify-center items-center flex bg-gray-100">
      <form
        class=" flex flex-col h-auto w-auto p-10 bg-white rounded-lg shadow-lg"
      >
        <h1 class="font-bold text-lg mb-4">
          {{ menuTitleType + menutitle }}
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
            type="submit"
            class="p-2 bg-blue-500 hover:bg-blue-900 rounded-lg text-white text-xs"
            @click.stop.prevent="addGoalz"
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
      destinationId: this.$route.params.id,
      menuTitleType: "Add New ",
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
  mounted() {
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
      if (this.destination != null) {
        this.removeGoalz(this.indexToDelete);
        this.form.id = this.destinationId;
        this.goalz.push(this.form);
        this.form = "";
        this.saveGoalz();
        console.log(this.destinationId);
      } else {
        this.form.id = uuidv4();
        this.goalz.push(this.form);
        this.form = "";
        this.saveGoalz();
        console.log("Nagdagdag");
      }
    },
    removeGoalz(x) {
      this.goalz.splice(x, 1);
      this.saveGoalz();
    },
    saveGoalz() {
      const parsed = JSON.stringify(this.goalz);
      localStorage.setItem("goalz", parsed);
      this.$router.push({ path: "/goalz" });
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
          this.formData();
        } catch (e) {
          return;
        }
      }
    },
    formData() {
      if (this.destination != null) {
        this.menuTitleType = "Edit ";
        this.form.name = this.destination.name;
        this.form.amountToSave = this.destination.amountToSave;
        this.form.wallet = this.destination.wallet;
        this.form.id = this.destination.id;
      }
    },
  },
  computed: {
    destination() {
      return this.goalz.find((i) => i.id === this.destinationId);
    },
    indexToDelete() {
      return this.goalz.findIndex((o) => o.id === this.destinationId);
    },
  },
};
</script>

<style scoped>
form {
  width: 768px;
}
</style>
