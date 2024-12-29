<template>
  <div class="participants-list">
    <h2>Katılımcılar</h2>
    <div class="list-container">
      <ul>
        <li v-for="(p, i) in store.participants" :key="i" class="participant-item">
          <span class="participant-name">{{ p }}</span>
          <button class="remove-btn" @click="removeParticipant(p)">Sil</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRaffleStore } from '../store/raffleStore'
const store = useRaffleStore()

function removeParticipant(name: string) {
  store.removeParticipant(name)
}
</script>

<style lang="sass" scoped>
$primary-color: #f1f1f1
$text-color: #f1f1f1
$background-dark: #1e1e1e
$background-light: #252525
$remove-btn-color: #dc3545
$remove-btn-hover-color: #c82333
$border-radius: 8px
$margin-large: 1rem
$padding: 0.75rem

@mixin flex-align($justify: flex-start, $align: center)
  display: flex
  justify-content: $justify
  align-items: $align

.participants-list
  background-color: $background-dark
  color: $text-color
  padding: $margin-large
  border-radius: $border-radius
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5)
  max-width: 500px
  margin: 0 auto

  h2
    text-align: center
    color: $primary-color
    margin-bottom: $margin-large

.list-container
  max-height: 250px
  overflow-y: auto
  border: 1px solid $background-light
  border-radius: $border-radius
  background-color: $background-light
  padding: $padding

  ul
    list-style: none
    padding: 0
    margin: 0

  &::-webkit-scrollbar
    width: 8px
  &::-webkit-scrollbar-thumb
    background-color: $primary-color
    border-radius: $border-radius
  &::-webkit-scrollbar-track
    background-color: $background-dark

.participant-item
  @include flex-align(space-between)
  margin-bottom: 0.5rem
  padding: $padding
  border-radius: $border-radius
  background-color: $background-dark
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5)

  .participant-name
    text-align: left
    flex: 1
    color: $text-color
    font-weight: bold

  .remove-btn
    padding: $padding
    background-color: $remove-btn-color
    color: white
    border: none
    border-radius: $border-radius
    cursor: pointer
    transition: background-color 0.3s

    &:hover
      background-color: $remove-btn-hover-color

</style>
