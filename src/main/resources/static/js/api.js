const getStarWarsPerson = personId =>
	fetch(`https://swapi.co/api/people/${personId}`)

module.exports = {
	getStarWarsPerson
}
