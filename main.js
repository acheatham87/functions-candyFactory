

const buyChocolate = () => {
    const bought = {
        type: "Milk Chocolate"
    }
    return bought
}

const addFlavoring = (object) => {
    object.flavor = "Mint"
    return object
}

const makeBarkMixture = (object) => {
    if (object.flavor === "Mint") {
        object.mixed = true
    } 
    else {
        object.mixed = false
    }
    return object
}

const bakeCandy = (object) => {
    if (object.mixed === true) {
        object.baked = true
    }
    else {object.baked = false
    }
    return object
}

const breakBark = (object) => {
    if (object.baked === true) {
        return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
    }
}

const start = buyChocolate()
const flavor = addFlavoring(start)
const mix = makeBarkMixture(flavor)
const candy = bakeCandy(mix)
const bark = breakBark(candy)

console.log(start)
console.log(flavor)
console.log(mix)
console.log(candy)
console.log(bark)

