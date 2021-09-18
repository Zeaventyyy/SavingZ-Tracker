<template>
  <div class="flex flex-col h-full">
    <div class="flex h-16 justify-between items-center p-3 pl-24 pr-24">
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

    <div
      class="flex flex-1 justify-center items-center bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 pt-5"
    >
      <ul>
        <div>
          <div
            class="box-border border-2 border-gray-400 shadow-2xl bg-white rounded w-96 p-4 mb-4"
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
                    path: `/goalz/${goal.id}/topup`,
                  }"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 m-2 fill-current text-blue-500"
                    id="Capa_1"
                    enable-background="new 0 0 512 512"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path
                        d="m0 310v187c0 8.284 6.716 15 15 15h482c8.284 0 15-6.716 15-15v-187zm452 127c0 8.284-6.716 15-15 15h-362c-8.284 0-15-6.716-15-15v-82c0-8.284 6.716-15 15-15h362c8.284 0 15 6.716 15 15z"
                      />
                      <path d="m90 370h332v52h-332z" />
                      <path
                        d="m275.205 137.12c.657-3.909.926-13.224-9.896-17.781v32.121c5.625-3.222 8.985-8.92 9.896-14.34z"
                      />
                      <path
                        d="m245.31 67.905c-3.052 2.34-4.734 5.883-5.313 8.956-.799 4.239.213 8.177 2.578 10.031.833.653 1.751 1.295 2.735 1.926z"
                      />
                      <path
                        d="m256 220c60.751 0 110-49.249 110-110s-49.249-110-110-110-110 49.249-110 110 49.249 110 110 110zm-37.839-69.131c3.024-4.621 9.222-5.916 13.843-2.894 5.401 3.533 8.787 5.068 13.306 5.703v-42.234c-6.388-2.927-11.162-5.744-15.079-8.817-8.298-6.508-12.087-17.801-9.888-29.472 2.396-12.718 11.249-22.836 23.102-26.407.628-.189 1.249-.362 1.865-.526v-6.222c0-5.522 4.477-10 10-10 5.522 0 10 4.478 10 10v5.127c9.708 1.681 16.572 6.46 19.895 10.276 3.628 4.164 3.192 10.481-.972 14.108-4.142 3.608-10.413 3.198-14.051-.905-.227-.231-1.817-1.761-4.872-2.887v32.312c1.775.659 3.549 1.298 5.29 1.914 17.578 6.214 27.355 22.486 24.329 40.491-2.353 13.995-13.003 28.188-29.619 32.403v7.161c0 5.522-4.478 10-10 10-5.523 0-10-4.478-10-10v-6.202c-8.074-.698-14.767-2.879-24.254-9.086-4.623-3.024-5.919-9.221-2.895-13.843z"
                      />
                      <path
                        d="m471.23 170.257c-2.042-6.125-7.774-10.257-14.23-10.257h-70.238c-9.127 23.789-24.561 44.479-44.254 60h43.492c8.284 0 15 6.716 15 15s-6.716 15-15 15h-260c-8.284 0-15-6.716-15-15s6.716-15 15-15h43.492c-19.693-15.521-35.127-36.211-44.254-60h-70.238c-6.457 0-12.188 4.132-14.23 10.257l-36.581 109.743h503.623z"
                      />
                    </g>
                  </svg>
                </router-link>
                <router-link
                  class="self-center"
                  :to="{
                    path: `/goalz/${goal.id}/withdraw`,
                  }"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    class="h-5 w-5 m-2 fill-current text-yellow-500"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style="enable-background:new 0 0 512 512;"
                    xml:space="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M448,42.667H64c-35.285,0-64,28.715-64,64V192c0,35.285,28.715,64,64,64h42.667v192c0,11.797,9.557,21.333,21.333,21.333    h256c11.797,0,21.333-9.536,21.333-21.333V256H448c35.285,0,64-28.715,64-64v-85.333C512,71.381,483.285,42.667,448,42.667z     M362.667,426.667H149.333v-256h213.333V426.667z M469.333,192c0,11.755-9.557,21.333-21.333,21.333h-42.667v-42.667h21.333    c11.797,0,21.333-9.557,21.333-21.333S438.464,128,426.667,128H384H128H85.333C73.557,128,64,137.557,64,149.333    s9.557,21.333,21.333,21.333h21.333v42.667H64c-11.755,0-21.333-9.579-21.333-21.333v-85.333c0-11.755,9.579-21.333,21.333-21.333    h384c11.776,0,21.333,9.579,21.333,21.333V192z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M264.533,279.467V247.68c6.912,1.792,13.525,4.587,19.627,8.32c1.259,0.256,2.581,0.256,3.84,0    c5.888,0.107,10.773-4.565,10.88-10.453c-0.043-2.048-0.789-4.011-2.133-5.547c-8.853-8.085-20.245-12.843-32.213-13.44v-11.307    c-0.107-4.032-3.435-7.253-7.467-7.253c-0.085,0-0.149,0-0.235,0c-4.117-0.128-7.552,3.136-7.659,7.253v11.093    c-20.821-0.619-38.315,15.467-39.467,36.267c0,24.533,20.267,31.36,39.467,36.267v35.84c-8.96-1.259-17.429-4.864-24.533-10.453    c-1.771-1.365-3.947-2.112-6.187-2.133c-5.717,0.235-10.24,4.928-10.24,10.667c0,2.112,0.768,4.16,2.133,5.76    c10.517,9.92,24.363,15.552,38.827,15.787v10.667c0,0.085,0,0.149,0,0.235c0.256,4.117,3.776,7.253,7.893,7.019    c4.032,0,7.36-3.221,7.467-7.253v-10.667c27.733-2.56,39.467-18.987,40.32-37.333    C304.853,292.053,283.733,284.587,264.533,279.467z M249.173,274.773C239.36,272,232.32,269.44,232.32,261.12    c0-8.32,6.613-14.08,16.853-15.147V274.773z M264.533,334.72v-31.573v-0.213c10.027,2.987,17.493,8.533,17.493,15.573    C282.027,325.547,277.12,332.8,264.533,334.72z"
                        />
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </router-link>
                <router-link
                  class="self-center"
                  :to="{
                    path: `/goalz/${goal.id}/edit`,
                  }"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 m-1"
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
                    class="h-5 w-5 m-1"
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
                <div
                  :style="{ width: goal.goalzProgress + percentage }"
                  class="justify-center bg-gradient-to-r from-green-400 to-blue-500 "
                ></div>
              </div>
            </div>
            <div class="flex flex-row justify-between">
              <div>
                <span>{{ goal.goalzProgress + percentage }}</span>
              </div>
              <div class="self-end">
                <label class="font-bold" for="Amount to Save">PHP </label>
                <span>{{ goal.topup }}/</span>
                <span class="font-bold" name="Amount to Save">{{
                  goal.amountToSave
                }}</span>
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
      percentage: "%",
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
          this.$toast.success("Item deleted successfully.", {
            // optional options Object
          });
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
