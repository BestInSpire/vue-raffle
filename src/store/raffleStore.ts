"use strict";
import confetti from 'canvas-confetti'
import { defineStore } from 'pinia'


interface RaffleState {
    participants: string[];
    newParticipant: string;
    timeInSeconds: number;
    countdown: number;
    isDrawing: boolean;
    currentName: string;
    winners: string[];
    totalWinners: number;
    intervalId: number | null;
    removeWinnerFromList: boolean;
}

export const useRaffleStore = defineStore('raffle', {
    state: (): RaffleState => ({
        participants: [],
        newParticipant: '',
        timeInSeconds: 5,
        countdown: 0,
        isDrawing: false,
        currentName: '',
        winners: [],
        totalWinners: 1,
        intervalId: null,
        removeWinnerFromList: false,
    }),

    actions: {
        addParticipant(name: string) {
            const trimmedName = name.trim()
            if (trimmedName && !this.participants.includes(trimmedName)) {
                this.participants.push(trimmedName)
            }
            this.newParticipant = ''
        },

        removeParticipant(name: string) {
            const index = this.participants.indexOf(name)
            if (index !== -1) {
                this.participants.splice(index, 1)
            }
        },

        startRaffle() {
            this.stopRaffle()
            this.isDrawing = true
            this.winners = []
            this.countdown = this.timeInSeconds
            this.currentName = ''

            this.intervalId = window.setInterval(() => {
                if (this.participants.length > 0) {
                    const randomIndex = Math.floor(Math.random() * this.participants.length)
                    this.currentName = this.participants[randomIndex]
                }

                this.countdown--

                if (this.countdown <= 0) {
                    for (let i = 0; i < this.totalWinners; i++) {
                        const randomIndex = Math.floor(Math.random() * this.participants.length)
                        const winner = this.participants[randomIndex]
                        if (!this.winners.includes(winner)) {
                            this.winners.push(winner)
                        }
                    }
                    confetti()
                    this.stopRaffle()
                }
            }, 1000)
        },

        stopRaffle() {
            this.isDrawing = false
            if (this.intervalId !== null) {
                clearInterval(this.intervalId)
                this.intervalId = null
            }

            if (this.removeWinnerFromList && this.winners.length > 0) {
                this.winners.forEach(winner => {
                    const idx = this.participants.indexOf(winner)
                    if (idx !== -1) {
                        this.participants.splice(idx, 1)
                    }
                })
            }
        }
    },

    getters: {
        canStart: (state) => {
            return !state.isDrawing && state.participants.length > 0 && state.timeInSeconds > 0
        }
    }
})
