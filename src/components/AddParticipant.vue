<template>
  <div class="add-participant">
    <h2>Katılımcı Ekle</h2>

    <div class="single-input">
      <input
          type="text"
          v-model="singleName"
          placeholder="Katılımcı adı (Ad Soyad)"
          @keyup.enter="addSingleParticipant"
      />
      <button @click="addSingleParticipant">Ekle</button>
    </div>

    <div class="multi-input">
      <textarea
          v-model="multiNames"
          placeholder="Her satıra bir Ad Soyad gelecek şekilde buraya yapıştırabilirsiniz..."
      ></textarea>
      <button @click="addMultipleParticipants">Toplu Ekle</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRaffleStore } from '../store/raffleStore'

const store = useRaffleStore()
const singleName = ref('')
const multiNames = ref('')

function addSingleParticipant() {
  console.log("singleName:", singleName.value.trim())
  if (singleName.value.trim()) {
    store.addParticipant(singleName.value.trim())
    singleName.value = ''
  }
}

function addMultipleParticipants() {
  console.log("Toplu Katılımcı Ekleme Fonksiyonu Çalıştı")
  if (!multiNames.value.trim()) return
  const lines = multiNames.value.split('\n')
  lines.forEach(line => {
    const trimmedLine = line.trim()
    if (trimmedLine) {
      store.addParticipant(trimmedLine)
    }
  })
  multiNames.value = ''
}
</script>

<style lang="sass" scoped>
$hover-color: #145a9e
$text-color: #f1f1f1
$background-dark: #121212
$background-light: #1e1e1e
$border-radius: 8px
$margin-large: 1rem
$margin-medium: 0.5rem
$padding: 0.75rem 1rem

@mixin flex-column($gap: 1rem)
  display: flex
  flex-direction: column
  gap: $gap

@mixin flex-center($gap: 1rem)
  display: flex
  justify-content: center
  gap: $gap

.add-participant
  +flex-column($margin-large)
  background-color: $background-dark
  color: $text-color
  padding: $margin-large
  border-radius: $border-radius
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5)
  max-width: 500px
  margin: 0 auto

h2
  text-align: center
  color: $text-color
  margin-bottom: $margin-medium

.single-input, .multi-input
  +flex-column($margin-medium)

  input, textarea
    padding: $padding
    font-size: 1rem
    border: 1px solid $background-light
    background-color: $background-light
    color: $text-color
    border-radius: $border-radius
    outline: none
    transition: border-color 0.3s, background-color 0.3s

    &:focus
      background-color: #292929 // Daha açık bir renk

.multi-input textarea
  min-height: 150px
  resize: vertical

button
  align-self: flex-start

  &:disabled
    background-color: #444
    cursor: not-allowed

</style>
