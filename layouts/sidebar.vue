<template>
  <div
    ref="layout"
    class="relative font-museo-sans h-screen flex flex-col overflow-hidden"
  >
    <NavPrimary ref="header" :can-collapse="true" />
    <main
      ref="content"
      class="flex-1 flex items-end overflow-hidden"
      role="presentation"
    >
      <NavSidebar ref="sidedBar" />
      <Nuxt ref="nuxt" />
    </main>
  </div>
</template>
