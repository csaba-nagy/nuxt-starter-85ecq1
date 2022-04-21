<script setup>
defineProps({
  coordinates: Object,
  value: String,
})

const emit = defineEmits(['select'])

const onClick = () => emit('select')
</script>

<template>
  <div
    class="
      grid
      place-items-center
      w-16
      h-16
      text-4xl
      ring-2 ring-gray-600
      sm:(ring-4
      ring-gray-600
      w-26
      h-26
      sm:text-6xl
      rounded-xl)
      md:(ring-6
      ring-gray-600
      md:w-52 md:h-52
      text-9xl
      rounded-3xl)
      bg-red-100
      rounded
      shadow shadow-red-200/50
      transition-colors transition-shadow
      duration-200
      hover:(bg-red-200
      cursor-pointer
      shadow-md shadow-red-200/50)
    "
    :class="{ 'hover:grayscale': value }"
    @click="onClick"
  >
    {{ value }}
  </div>
</template>
