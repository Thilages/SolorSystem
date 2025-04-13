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
    size: "1,391,000 km in diameter",
    description: "The Sun is a massive, glowing sphere of hot gases. It is the center of the Solar System and provides light and energy to all planets.",
    color: "#ffcc00", // Bright yellow
    funFact: "The Sun accounts for about 99.8% of the total mass in the Solar System.",
  },
  mercury: {
    name: "Mercury",
    size: "4,879 km in diameter",
    description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. It has extreme temperature variations due to its lack of atmosphere.",
    color: "#b2b2b2", // Greyish
    funFact: "A day on Mercury (one full rotation) is longer than a year (one orbit around the Sun).",
  },
  venus: {
    name: "Venus",
    size: "12,104 km in diameter",
    description: "Venus, similar in size to Earth, is covered by a thick, toxic atmosphere that traps heat, making it the hottest planet in the Solar System.",
    color: "#f5cc87", // Yellowish
    funFact: "Venus rotates in the opposite direction to most planets, causing the Sun to rise in the west.",
  },
  earth: {
    name: "Earth",
    size: "12,742 km in diameter",
    description: "Earth is the third planet from the Sun and the only one known to support life, thanks to its water-rich surface and protective atmosphere.",
    color: "#2b7cff", // Blue and green
    funFact: "Earth’s rotation is gradually slowing by about 17 milliseconds per century.",
  },
  mars: {
    name: "Mars",
    size: "6,779 km in diameter",
    description: "Mars, often called the 'Red Planet,' is known for its iron-rich surface and cold, desert-like conditions.",
    color: "#d14c32", // Red
    funFact: "Mars has two moons, Phobos and Deimos, which are thought to be captured asteroids.",
  },
  jupiter: {
    name: "Jupiter",
    size: "139,820 km in diameter",
    description: "Jupiter is the largest planet in the Solar System, with a powerful magnetic field and a prominent storm known as the Great Red Spot.",
    color: "#d5a973", // Brown and orange
    funFact: "Jupiter has 79 known moons, including Ganymede, the largest moon in the Solar System.",
  },
  saturn: {
    name: "Saturn",
    size: "116,460 km in diameter",
    description: "Saturn is famous for its extensive ring system, made up of ice and rock particles, and is the second-largest planet in the Solar System.",
    color: "#f5e0a9", // Yellowish
    funFact: "Saturn’s rings are so vast they could stretch from Earth to the Moon.",
  },
  uranus: {
    name: "Uranus",
    size: "50,724 km in diameter",
    description: "Uranus is an ice giant that rotates on its side, giving it a unique rolling orbit around the Sun.",
    color: "#a3dbf5", // Light blue
    funFact: "Uranus has 27 moons, most of which are named after characters from Shakespearean plays.",
  },
  neptune: {
    name: "Neptune",
    size: "49,244 km in diameter",
    description: "Neptune is the farthest planet from the Sun, known for its deep blue color and supersonic winds.",
    color: "#2b5caa", // Dark blue
    funFact: "Neptune's moon Triton orbits the planet in the opposite direction of its rotation, a phenomenon called retrograde orbit.",
  },
};



export { earth, mars, sun, venus, mercury, jupiter, saturn, uranus, neptune }