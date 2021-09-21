<template>
  <div class="flex flex-col h-full">
    <!-- <div
      class="flex justify-center items-center lg:justify-start pl-24 pr-24 h-16"
    >
      <p class="text-lg font-bold text-blue-500 ">{{ menutitle }}</p>
    </div> -->

    <div
      class="h-full w-full justify-center items-center flex bg-gradient-to-br from-blue-200 via-blue-100 to-blue-200"
    >
      <form class=" flex flex-col h-auto w-768 bg-white rounded-lg shadow-2xl">
        <div
          class="flex justify-start items-center text-gray-900 text-lg mb-4 rounded-tl-lg rounded-tr-lg border-b-2 border-blue-600 h-20"
        >
          <h1 class="ml-10 text-3xl text-blue-500">
            {{ menutitle }}
          </h1>
        </div>
        <div class="p-10">
          <div class="flex flex-col">
            <label for="Name" class="mr-4 self-start text-blue-500"
              >Name:</label
            >
            <input
              disabled
              type="text"
              class="inputsTopup"
              v-model="form.name"
              name="Name"
            />
            <div class="flex flex-row justify-between">
              <div class="flex flex-col flex-1 mr-4">
                <label for="Goal" class="mr-4 self-start text-blue-500"
                  >Goal:</label
                >
                <input
                  disabled
                  type="number"
                  class="inputsTopup"
                  v-model="form.amountToSave"
                  name="Goal"
                  min="0"
                />
              </div>
              <div class="flex flex-col flex-1">
                <label for="Current" class="mr-4 self-start text-blue-500"
                  >Current top-up:</label
                >
                <input
                  disabled
                  type="number"
                  class="inputsTopup"
                  v-model="this.currentTopUpValue"
                  name="Current"
                  min="0"
                />
              </div>
            </div>

            <label for="wallets" class="self-start text-blue-500"
              >Wallet:</label
            >
            <select
              disabled
              class="inputsTopup text-black"
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
            <label for="Topup" class="mr-4 self-start text-blue-500"
              >Top-up:</label
            >
            <input
              type="number"
              class="rounded mb-4 border-blue-500 "
              v-model="form.topup"
              name="Amount"
              min="0"
            />
          </div>
          <div class="flex justify-end">
            <router-link
              to="/goalz"
              class="p-2 bg-red-500 hover:bg-red-900 hover:text-white rounded-lg text-white text-xs mr-2"
              >Cancel
            </router-link>
            <button
              type="submit"
              class="p-2 bg-blue-500 hover:bg-blue-900 rounded-lg text-white text-xs"
              @click.stop.prevent="topupGoalConfirmation"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      destinationId: this.$route.params.id,
      currentTopUpValue: 0,
      menutitle: "Top-up",
      buttontitle: "Back",
      form: {
        id: "",
        name: "",
        topup: [0],
        amountToSave: 0,
        goalzProgress: 0,
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
    addTopUp() {
      // ensure they actually typed something
      if (this.destination != null) {
        this.removeGoalz(this.indexToDelete);
        this.form.id = this.destinationId;
        this.form.topup =
          parseInt(this.form.topup) + parseInt(this.currentTopUpValue);
        this.form.goalzProgress = (
          parseInt(this.form.topup * 100) / parseInt(this.form.amountToSave)
        ).toFixed(2);
        this.goalz.push(this.form);
        this.form = "";
        this.saveGoalz();
      }
    },
    topupGoalConfirmation() {
      if (!this.form.topup || this.form.topup == 0) {
        this.$swal("Please top-up to continue");
        return;
      }
      this.$swal({
        title: "Confirmation?",
        text: `Do you want to top-up ${this.form.topup}?`,
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Top-up",
      }).then((result) => {
        if (result.isConfirmed) {
          this.addTopUp();
          this.$toast.success("Top-up successfully.", {
            // optional options Object
          });
        }
      });
    },
    removeGoalz(x) {
      this.goalz.splice(x, 1);
      this.saveGoalz();
    },
    saveGoalz() {
      const parsed = JSON.stringify(this.goalz);
      localStorage.setItem("goalz", parsed);
      this.$router.push("/goalz").catch(() => {});
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
        this.form.name = this.destination.name;
        this.form.amountToSave = this.destination.amountToSave;
        this.form.wallet = this.destination.wallet;
        this.form.id = this.destination.id;
        this.currentTopUpValue = this.destination.topup;
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
