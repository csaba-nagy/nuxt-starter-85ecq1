<script setup>
definePageMeta({
  layout: false,
})

const { data, pending, refresh } = await useAsyncData('game', () =>
  $fetch('/api/game')
)

const onReset = async () => {
  // if (!data.winner) {
  //   return
  // }

  try {
    await $fetch('/api/game', {
      method: 'post',
      body: { reset: true },
    })

    await refresh()
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <NuxtLayout name="game">
    <template #header>
      <p v-if="pending">{{ 'Processing...' }}</p>
      <p v-else>{{ data.winner ? `The winner is ${data.winner}` : '' }}</p>
    </template>
    <GameBoard
      :fields="data.fields"
      :winner="data.winner"
      :class="{ pending: pending || data.winner }"
      @select="refresh"
    />
    <template #footer>
      <button
        class="btn-red"
        :class="{ 'disabled:opacity-50': !data.winner }"
        @click="onReset"
        :disabled="!data.winner"
      >
        Reset
      </button>
    </template>
  </NuxtLayout>
</template>
