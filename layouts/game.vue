<template>
  <main
    class="
      grid
      place-items-center
      grid-cols-1
      grid-rows-[4rem_0.8fr_4rem]
      h-screen
    "
  >
    <slot name="header" />
    <div class="grid place-items-center">
      <slot />
    </div>
    <slot name="footer" />
  </main>
</template>
