describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET','http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      body: [
        {
            "stance": "regular",
            "name": "treflip",
            "obstacle": "flat ground",
            "tutorial": "https://www.youtube.com/watch?v=XGw3YkQmNig",
            "id": 1
        },
        {
            "stance": "switch",
            "name": "heelflip",
            "obstacle": "stairs",
            "tutorial": "https://www.youtube.com/watch?v=9N9swrZU1HA",
            "id": 2
        },
        {
            "stance": "regular",
            "name": "frontside 50-50, backside 180 out",
            "obstacle": "ledge",
            "tutorial": "https://www.youtube.com/watch?v=9N9swrZU1HA",
            "id": 3
        }
    ]
    })
    cy.visit('localhost:3000')
  })
  it('should get h1', () => {
    cy.get('h1')
  })
})