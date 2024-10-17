<template>
  <div
    class="mt-3 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
  >
    <div class="space-y-6 sm:flex sm:space-y-0 sm:space-x-10">
      <div class="w-full flex justify-end">
        <div>
          <a
            href="https://account.wellcertified.com/dashboard/project/v2"
            class="flex p-2 rounded-lg text-primary-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            Dashboard
          </a>
          <a
            :href="$config.logoutUrl"
            class="flex p-2 rounded-lg text-primary-900"
          >
            <WIconsBase icon="logout" />
            Logout
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
