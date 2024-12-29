<template>
  <div class="app-container">
    <h1>Çekiliş Sistemi</h1>

    <div v-if="isParticipantsStep">
      <AddParticipant />
      <br>
      <ParticipantsList />
      <button @click="goToRaffleSettings" class="ready-button">Katılımcı listesi hazır</button>
    </div>

    <div v-else>
      <WinnersSection />
      <button @click="goToParticipantsStep" class="ready-button">Katılımcı listesine dön</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddParticipant from './components/AddParticipant.vue'
import ParticipantsList from './components/ParticipantsList.vue'
import WinnersSection from './components/WinnersSection.vue'

const isParticipantsStep = ref(true)

function goToRaffleSettings() {
  isParticipantsStep.value = false
}
function goToParticipantsStep() {
  isParticipantsStep.value = true
}

</script>

<style lang="sass" scoped>
$max-width-container: 1000px
$min-width-container: 450px
$margin-auto: 0 auto
$padding-container: 1rem
$button-margin-top: 1rem
$button-padding: 0.5rem 1rem
$button-cursor: pointer

.app-container
  max-width: $max-width-container
  min-width: $min-width-container
  margin: $margin-auto
  padding: $padding-container
  text-align: center

.ready-button
  margin-top: $button-margin-top
  padding: $button-padding
  cursor: $button-cursor
</style>
