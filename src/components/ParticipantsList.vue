<template>
  <div class="participants-list">
    <h2>Katılımcılar</h2>
    <div class="list-container">
      <ul>
        <li v-for="(p, i) in store.participants" :key="i" class="participant-item">
          <span class="participant-name">{{ p }}</span> <!-- İsimler solda hizalanacak -->
          <button class="remove-btn" @click="removeParticipant(p)">Sil</button> <!-- Silme butonu sağda hizalanacak -->
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
$primary-border-color: #ccc
$primary-padding: 0.5rem
$remove-btn-color: red
$remove-btn-hover-color: darkred

=flex-align($justify: flex-start, $align: center)
  display: flex
  justify-content: $justify
  align-items: $align

.participants-list
  text-align: center

.list-container
  max-height: 150px
  overflow-y: auto
  border: 1px solid $primary-border-color
  padding: $primary-padding
  margin-top: $primary-padding

  ul
    list-style: none
    padding: 0
    margin: 0

.participant-item
  +flex-align(space-between)
  margin: 4px 0

  .participant-name
    text-align: left
    flex: 1

.remove-btn
  padding: $primary-padding
  background-color: $remove-btn-color
  color: white
  border: none
  cursor: pointer

  &:hover
    background-color: $remove-btn-hover-color
</style>
