<template>
  <div class="winners-section">
    <div class="animation-section" v-if="store.isDrawing">
      <h3>Geri Sayım: {{ store.countdown }}</h3>
      <h4 class="animating-name">{{ store.currentName }}</h4>
    </div>

    <div class="winner-section" v-if="store.winners.length > 0">
      <h3>Kazananlar:</h3>
      <div class="winner-box">
        <ul>
          <li v-for="(winner, index) in store.winners" :key="index">
            🎉 {{ winner }}
          </li>
        </ul>
      </div>
    </div>

    <ParticipantsList />

    <h2>Çekiliş Ayarları</h2>
    <div class="timer-section">
      <label for="timeInSeconds">Kaç saniyede çekilsin?</label>
      <input id="timeInSeconds" type="number" min="1" v-model.number="store.timeInSeconds" />
    </div>

    <div class="winners-count-section">
      <label for="totalWinners">Kaç kazanan olsun?</label>
      <input id="totalWinners" type="number" min="1" v-model.number="store.totalWinners" />
    </div>

    <div class="remove-winner-option">
      <label>
        <input type="checkbox" v-model="store.removeWinnerFromList" />
        Kazananı katılımcı listesinden çıkar
      </label>
    </div>

    <div class="actions">
      <button @click="store.startRaffle" :disabled="!store.canStart">Çekilişi Başlat</button>
      <button @click="store.stopRaffle" :disabled="!store.isDrawing">İptal Et</button>
  </div>
  </div>

</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useRaffleStore } from '../store/raffleStore'
import ParticipantsList from './ParticipantsList.vue'

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
$color-winner: #28a745
$color-count: #007bff
$background-dark: #121212
$background-light: #1e1e1e
$border-radius: 10px
$animation-duration: 0.5s
$animation-timing: linear
$animation-opacity-start: 1
$animation-opacity-end: 0.2
$gap-large: 1rem

@mixin flex-center($gap: $gap-large)
  display: flex
  justify-content: center
  gap: $gap

.winners-section
  text-align: center
  margin-top: $margin-large
  color: #f1f1f1
  background-color: $background-dark
  padding: $margin-large
  border-radius: $border-radius
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5)

.timer-section,
.winners-count-section,
.remove-winner-option
  margin: $margin-medium 0

.actions
  margin: $margin-large 0
  +flex-center

.animation-section
  margin-top: $margin-large

  h4.animating-name
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

  .winner-box
    margin-top: $margin-medium
    border: 2px solid $color-winner
    border-radius: $border-radius
    padding: $margin-medium
    background-color: $background-light
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5)

    ul
      list-style: none
      padding: 0

      li
        font-size: $font-size-medium
        font-weight: $font-bold
        color: $color-winner
        margin: 0.5rem 0
        display: flex
        align-items: center
        gap: 0.5rem

        &::before
          content: "🏆"
          margin-right: 0.5rem

</style>
