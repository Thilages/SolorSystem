import earth from "./src/assets/earth.jpg"
import mars from "./src/assets/mars.jpg"
import sun from "./src/assets/sun.jpg"
import venus from "./src/assets/venus.jpg"
import mercury from "./src/assets/mercury.jpg"
import jupiter from "./src/assets/jupiter.jpg"
import saturn from "./src/assets/saturn.jpg"
import uranus from "./src/assets/uranus.jpg"
import neptune from "./src/assets/neptune.jpg"

export const planetsData = {
  sun: {
    name: "Sun",
    size: "Huge", // Kid-friendly size description
    description: "The Sun is a big ball of burning gas that gives us light and warmth. It's the center of our solar system!",
    color: "#ffcc00", // Bright yellow
    funFact: "The Sun is so big that 1 million Earths could fit inside it!",
  },
  mercury: {
    name: "Mercury",
    size: "Small", // Kid-friendly size description
    description: "Mercury is the closest planet to the Sun. It's super hot during the day and freezing at night!",
    color: "#b2b2b2", // Greyish
    funFact: "Mercury has no moons and is the smallest planet in the Solar System!",
  },
  venus: {
    name: "Venus",
    size: "Similar to Earth", // Kid-friendly size description
    description: "Venus is a hot and cloudy planet. It has a thick atmosphere that traps heat like a giant oven!",
    color: "#f5cc87", // Yellowish
    funFact: "A day on Venus is longer than a year on Venus! It takes 243 Earth days to spin once!",
  },
  earth: {
    name: "Earth",
    size: "Medium", // Kid-friendly size description
    description: "Earth is the only planet known to have life. It has oceans, land, and lots of animals and plants!",
    color: "#2b7cff", // Blue and green
    funFact: "Earth is the only planet we know of where people, animals, and plants live!",
  },
  mars: {
    name: "Mars",
    size: "Half the size of Earth", // Kid-friendly size description
    description: "Mars is the red planet. It's full of dust and rocks, and it might have had water in the past!",
    color: "#d14c32", // Red
    funFact: "Mars has the tallest volcano in the solar system, called Olympus Mons. It's three times taller than Mount Everest!",
  },
  jupiter: {
    name: "Jupiter",
    size: "Gigantic", // Kid-friendly size description
    description: "Jupiter is the biggest planet. It has a giant storm called the Great Red Spot that has been going on for hundreds of years!",
    color: "#d5a973", // Brown and orange
    funFact: "Jupiter has 79 moons! One of them, Ganymede, is the biggest moon in the entire solar system!",
  },
  saturn: {
    name: "Saturn",
    size: "Very Large", // Kid-friendly size description
    description: "Saturn is famous for its beautiful rings made of ice and rock. It's a giant ball of gas!",
    color: "#f5e0a9", // Yellowish
    funFact: "Saturn is so light that if there was a giant bathtub big enough, it would float in water!",
  },
  uranus: {
    name: "Uranus",
    size: "Large", // Kid-friendly size description
    description: "Uranus is a cool blue planet that rolls around the Sun on its side. It looks like it's 'sleeping' as it spins!",
    color: "#a3dbf5", // Light blue
    funFact: "Uranus has 13 faint rings made of ice and rocks. It's the coldest planet in the solar system!",
  },
  neptune: {
    name: "Neptune",
    size: "Large", // Kid-friendly size description
    description: "Neptune is a deep blue planet. It's windy and cold, and it's the farthest planet from the Sun!",
    color: "#2b5caa", // Dark blue
    funFact: "Neptune has the fastest winds in the solar system, reaching speeds up to 1,200 miles per hour!",
  },
};


export { earth, mars, sun, venus, mercury, jupiter, saturn, uranus, neptune }