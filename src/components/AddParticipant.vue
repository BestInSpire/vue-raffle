<template>
  <div class="add-participant">
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
          placeholder="Her satıra bir Ad Soyad gelecek şekilde buraya yapıştırın..."
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
  console.log("singleName:",singleName.value.trim())  // singleName değerini konsola yazdıralım
  if (singleName.value.trim()) {
    store.addParticipant(singleName.value.trim())
    singleName.value = ''  // Input'u temizle
  }
}


function addMultipleParticipants() {
  console.log("Toplu Katılımcı Ekleme Fonksiyonu Çalıştı")  // Log ekleyelim
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
$gap-large: 1rem
$gap-small: 0.5rem
$button-padding: 0.5rem 1rem
$button-font-size: 1rem

=flex-column($gap: $gap-small)
  display: flex
  flex-direction: column
  gap: $gap

.add-participant
  +flex-column($gap-large)

.single-input, .multi-input
  +flex-column($gap-small)

button
  align-self: start
  padding: $button-padding
  font-size: $button-font-size
  cursor: pointer
</style>
