<template>
  <div class="flex flex-col h-full">
    <div class="flex h-38 justify-between items-center p-3 pl-24 pr-24">
      <h1 class="text-lg font-bold">{{ menutitle }}</h1>
      <router-link
        to="/goalz/create"
        tag="button"
        :disabled="isDisabled"
        class="flex items-center p-2 bg-blue-500 hover:bg-blue-100 hover:text-blue-500 rounded-lg text-white font-semibold"
      >
        <div class="flex items-center has-tooltip">
          <span
            v-show="isDisabled"
            class="tooltip rounded shadow-lg p-1 bg-white text-red-500 -mt-8"
            >You must add a Wallet first before Adding a Goal</span
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
        </div>
      </router-link>
    </div>

    <div class="flex flex-1 justify-center items-center bg-gray-100 pt-5">
      <ul>
        <div>
          <div
            class="box-border border-2 border-black bg-white rounded w-96 p-4 mb-4"
            v-for="(goal, n) in goalz"
            :key="goal.id"
          >
            <div class="flex justify-between">
              <div class="flex flex-col">
                <div class="flex flex-col justify-start items-start">
                  <span class="font-bold" name="goal name">{{
                    goal.name
                  }}</span>
                  <span class="text-sm text-gray-500" name="Wallet Name">{{
                    goal.wallet.name
                  }}</span>
                </div>
              </div>

              <div class="flex ">
                <router-link
                  class="self-center"
                  :to="{
                    path: `/goalz/${goal.id}/edit`,
                  }"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="green"
                  >
                    <path
                      d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </router-link>
                <button @click="removeGoal(n)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="red"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mb-2 mt-2">
              <div class="flex overflow-hidden h-2 rounded bg-gray-200">
                <div style="width:50%" class="justify-center bg-black"></div>
              </div>
            </div>
            <div class="flex flex-row justify-between">
              <div>
                <span>50%</span>
              </div>
              <div class="font-bold self-end">
                <label for="Amount to Save">PHP </label>
                <span name="Amount to Save">{{ goal.amountToSave }}</span>
              </div>
            </div>
          </div>
        </div>
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
      goalz: [],
      walletz: [],
      isDisabled: Boolean,
    };
  },
  mounted() {
    this.getGoalz();
    this.getWalletz();
  },
  methods: {
    getGoalz() {
      if (localStorage.getItem("goalz")) {
        try {
          this.goalz = JSON.parse(localStorage.getItem("goalz"));
        } catch (e) {
          // localStorage.removeItem("goalz");
        }
      }
    },
    getWalletz() {
      if (localStorage.getItem("wallets")) {
        try {
          this.walletz = JSON.parse(localStorage.getItem("wallets"));
          console.log(this.walletz);
          if (this.walletz == "") {
            this.isDisabled = true;
          } else {
            this.isDisabled = false;
          }
        } catch (e) {
          return;
        }
      }
    },
    removeGoal(x) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.goalz.splice(x, 1);
          this.saveGoalz();
          this.$swal("Deleted!", "Your goal has been deleted.", "success");
        }
      });
    },
    saveGoalz() {
      const parsed = JSON.stringify(this.goalz);
      localStorage.setItem("goalz", parsed);
    },
  },
};
</script>
