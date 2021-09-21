<template>
  <div class="flex flex-col h-full">
    <!-- <div
      class="flex justify-center items-center lg:justify-start pl-24 pr-24 h-16"
    >
      <p class="text-lg font-bold text-blue-500 ">{{ menutitle }}</p>
    </div> -->

    <div
      class="h-full w-full justify-center items-center flex bg-gradient-to-br from-green-200 via-green-100 to-green-200"
    >
      <form class=" flex flex-col h-auto w-768 bg-white rounded-lg shadow-2xl">
        <div
          class="flex justify-start items-center text-gray-900 text-lg mb-4 rounded-tl-lg rounded-tr-lg border-b-2 border-green-600 h-20"
        >
          <h1 class="ml-10 text-3xl text-green-500">
            {{ menutitle }}
          </h1>
        </div>
        <div class="p-10">
          <div class="flex flex-col">
            <label for="Name" class="mr-4 self-start text-green-500"
              >Name:</label
            >
            <input
              type="text"
              class="inputsEdit"
              v-model="form.name"
              name="Name"
            />
            <div class="flex flex-row justify-between">
              <div class="flex flex-col flex-1 mr-4">
                <label for="Goal" class="mr-4 self-start text-green-500"
                  >Goal:</label
                >
                <input
                  type="number"
                  class="inputsEdit"
                  v-model="form.amountToSave"
                  name="Goal"
                  min="0"
                />
              </div>
              <div class="flex flex-col flex-1">
                <label for="Current" class="mr-4 self-start text-green-500"
                  >Current top-up:</label
                >
                <input
                  disabled
                  type="number"
                  class="inputsEdit bg-gray-100"
                  v-model="form.topup"
                  name="Current"
                  min="0"
                />
              </div>
            </div>

            <label for="wallets" class="self-start text-green-500"
              >Wallet:</label
            >
            <select
              class="inputsEdit text-black"
              name="wallets"
              id="wallets"
              v-model="form.wallet"
            >
              <option
                class="checked:bg-green-500 checked:text-white"
                v-for="wallet in walletItems"
                :key="wallet.id"
                v-bind:value="wallet"
                >{{ wallet.name }}</option
              >
            </select>
          </div>
          <div class="flex justify-end mt-4">
            <router-link
              to="/goalz"
              class="p-2 bg-red-500 hover:bg-red-700 hover:text-white rounded-lg text-white text-xs mr-2"
              >Cancel
            </router-link>
            <button
              type="submit"
              class="p-2 bg-green-500 hover:bg-green-900 rounded-lg text-white text-xs"
              @click.stop.prevent="editGoalConfimation"
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
      goalId: this.$route.params.id,
      currentTopUpValue: 0,
      menutitle: "Edit Goalz",
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
    editGoalz() {
      if (this.goal != null) {
        this.removeGoalz(this.indexToDelete);
        this.form.id = this.goalId;
        this.form.goalzProgress = (
          parseInt(this.form.topup * 100) / parseInt(this.form.amountToSave)
        ).toFixed(2);
        this.goalz.push(this.form);
        this.form = "";
        this.saveGoalz();
      }
    },
    editGoalConfimation() {
      if (
        this.form.name == this.goal.name &&
        this.form.amountToSave == this.goal.amountToSave &&
        this.form.wallet == this.goal.wallet
      ) {
        this.$router.push("/goalz").catch(() => {});
      } else {
        this.$swal({
          title: "Confirmation?",
          text: `Are you sure you want to edit this Goal?`,
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Proceed",
        }).then((result) => {
          if (result.isConfirmed) {
            this.editGoalz();
            this.$toast.success("Edit goal successfully.", {
              // optional options Object
            });
          }
        });
      }
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
      if (this.goal != null) {
        this.form.name = this.goal.name;
        this.form.amountToSave = this.goal.amountToSave;
        this.form.wallet = this.goal.wallet;
        this.form.id = this.goal.id;
        this.form.topup = this.goal.topup;
      }
    },
  },
  computed: {
    //check if goal id is existing
    goal() {
      return this.goalz.find((i) => i.id === this.goalId);
    },
    indexToDelete() {
      return this.goalz.findIndex((o) => o.id === this.goalId);
    },
  },
};
</script>
