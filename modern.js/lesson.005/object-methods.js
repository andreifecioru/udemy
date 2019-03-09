const assert = require('assert')

const restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,

    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        assert(seatsLeft >= 0)

        return partySize <= seatsLeft
    },

    seatParty: function(partySize) {
        if (this.checkAvailability(partySize)) {
            this.guestCount += partySize
            return true
        }

        console.error(`Unable to seat ${partySize} guests (${this.guestCount}/${this.guestCapacity})`)
        return false
    },

    removeParty: function(partySize) {
        assert(partySize <= restaurant.guestCount)
        this.guestCount -= partySize
    },

    getStatus: function() {
        let seatsLeft = this.guestCapacity - this.guestCount
        return `Restaurant: ${this.name}. Capacity: ${this.guestCapacity}. Available seats: ${seatsLeft}`
    }
}

console.log(restaurant.getStatus())

restaurant.seatParty(10)
console.log(restaurant.getStatus())

restaurant.removeParty(5)
console.log(restaurant.getStatus())

restaurant.seatParty(100)
console.log(restaurant.getStatus())