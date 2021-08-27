<template>
  <div class="flex flex-col h-full">
    <div class="flex h-16 justify-between items-center p-3 pl-24 pr-24">
      <h1 class="text-lg font-bold">{{ menutitle }}</h1>
      <router-link
        to="/walletz/create"
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

    <div class="flex flex-1 justify-center items-center bg-gray-100 pt-5">
      <ul>
        <div
          class="box-border border-2 border-black bg-white rounded w-96 p-4 mb-4"
          v-for="(wallet, n) in wallets"
          :key="wallet.id"
        >
          <div class="flex justify-between">
            <span class="font-bold">{{ wallet.name }}</span>
            <div class="flex">
              <router-link
                :to="{
                  path: `/walletz/${wallet.id}/edit`,
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
              <button @click="removeWallet(n)">
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
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menutitle: "WalletZ",
      buttontitle: "Add New",
      wallets: [],
      walletName: "testing lang",
    };
  },
  created() {
    this.getWallets();
  },

  methods: {
    removeWallet(x) {
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
          this.wallets.splice(x, 1);
          this.saveWallets();
          this.$swal("Deleted!", "Your wallet has been deleted.", "success");
        }
      });
    },
    saveWallets() {
      const parsed = JSON.stringify(this.wallets);
      localStorage.setItem("wallets", parsed);
    },
    getWallets() {
      if (localStorage.getItem("wallets")) {
        try {
          this.wallets = JSON.parse(localStorage.getItem("wallets"));
        } catch (e) {
          localStorage.removeItem("wallets");
        }
      }
    },
  },
};
</script>
