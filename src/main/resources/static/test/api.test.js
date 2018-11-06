const { getStarWarsPerson } = require('../js/api.js')

describe('testing api', () => {
	beforeEach(() => {
		fetch.resetMocks()
	})

	test('calls SWAPI and returns data to me', () => {
		fetch.mockResponseOnce(
			JSON.stringify({
				name: 'Boba Fett',
				height: '183',
				mass: '78.2',
				hair_color: 'black',
				skin_color: 'fair'
			})
		)

		//assert on the response
		getStarWarsPerson(22).then(res => {
			expect().toEqual({
				name: 'Boba Fett',
				height: '183',
				mass: '78.2',
				hair_color: 'black',
				skin_color: 'fair'
			})
		})

		//assert on the times called and arguments given to fetch
		expect(fetch.mock.calls.length).toEqual(1)
		expect(fetch.mock.calls[0][0]).toEqual('https://swapi.co/api/people/22')
	})
})
