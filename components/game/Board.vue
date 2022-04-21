<script setup>
const props = defineProps({
  fields: Array,
  winner: String,
})

const sings = ['⭕', '❌']
let counter = 0

const emit = defineEmits(['select'])

const onSelect = async ({ x, y }) => {
  // If field is not empty.
  if (props.winner || props.fields[x][y]) {
    return
  }

  // Alternate the user sign.
  const value = sings[counter++ % sings.length]

  try {
    // Send current selection.
    await $fetch('/api/game', {
      method: 'post',
      body: { x, y, value },
    })

    emit('select')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div
    class="
      grid
      gap-4
      sm:gap-6
      md:gap-8
      grid-cols-[repeat(3,1fr)]
      transition-all
      duration-200
    "
  >
    <!-- Loop trough over rows. -->
    <template v-for="(row, x) in fields" :key="x">
      <!-- Loop trough over columns. -->
      <template v-for="(value, y) in row" :key="y">
        <GameField
          :coordinates="{ x, y }"
          :value="value"
          @select="onSelect({ x, y })"
        />
      </template>
    </template>
  </div>
</template>
