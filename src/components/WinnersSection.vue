<template>
  <div class="winners-section">


    <div class="animation-section" v-if="store.isDrawing">
      <h3>Geri sayım: {{ store.countdown }}</h3>
      <h4 class="animating-name">{{ store.currentName }}</h4>
    </div>


    <div class="winner-section" v-if="store.winners.length > 0">
      <h3>Kazananlar:</h3>
      <ul>
        <li v-for="(winner, index) in store.winners" :key="index">{{ winner }}</li>
      </ul>
    </div>
    <ParticipantsList />

    <h2>Çekiliş Ayarları</h2>

    <div class="timer-section">
      <label for="timeInSeconds">Kaç saniyede çekilsin?</label>
      <input
          id="timeInSeconds"
          type="number"
          min="1"
          v-model.number="store.timeInSeconds"
      />
    </div>


    <div class="winners-count-section">
      <label for="totalWinners">Kaç kazanan olsun?</label>
      <input
          id="totalWinners"
          type="number"
          min="1"
          v-model.number="store.totalWinners"
      />
    </div>

    <div class="remove-winner-option">
      <label>
        <input type="checkbox" v-model="store.removeWinnerFromList" />
        Kazananı katılımcı listesinden çıkar
      </label>
    </div>

    <div class="actions">
      <button @click="store.startRaffle" :disabled="!store.canStart">
        Çekilişi Başlat
      </button>
      <button @click="store.stopRaffle" :disabled="!store.isDrawing">
        İptal Et
      </button>
    </div>


  </div>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useRaffleStore } from '../store/raffleStore'
import ParticipantsList from "./ParticipantsList.vue";

const store = useRaffleStore()

onUnmounted(() => {
  store.stopRaffle()
})
</script>

<style lang="sass" scoped>
$margin-large: 1rem
$margin-medium: 0.5rem
$font-bold: bold
$font-size-large: 1.4rem
$font-size-medium: 1.25rem
$color-winner: green
$color-count: blue
$animation-duration: 0.5s
$animation-timing: linear
$animation-opacity-start: 1
$animation-opacity-end: 0.2
$gap-large: 1rem

=flex-center($gap: $gap-large)
  display: flex
  justify-content: center
  gap: $gap

.winners-section
  text-align: center
  margin-top: $margin-large

.timer-section
  margin-bottom: $margin-medium

.winners-count-section
  margin: $margin-medium 0

.remove-winner-option
  margin: $margin-medium 0

.actions
  margin: $margin-large 0
  +flex-center

.animation-section
  margin-top: $margin-large

.animating-name
  margin-top: $margin-medium
  font-size: $font-size-medium
  font-weight: $font-bold
  animation: flash $animation-duration $animation-timing infinite alternate

@keyframes flash
  0%
    opacity: $animation-opacity-start
  100%
    opacity: $animation-opacity-end

.winner-section
  margin-top: $margin-large
  font-size: $font-size-large
  color: $color-winner
  font-weight: $font-bold

  ul
    list-style: none
    padding: 0

.winners-count
  margin-top: $margin-large
  font-size: $font-size-large
  font-weight: $font-bold
  color: $color-count
</style>
