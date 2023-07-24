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
  it('should reflect entries', () => {
    cy.get('#trick-input').type("test-trick")
    .get('.tutorial-input').type("test-tutorial")
    .get('#trick-select').select('regular')
    .get('#obstacle-select').select('stairs')
    .get('button').click()
    cy.get('.tricks-container').find('.trick-card').last()
    .contains("p","Regular Test-trick")
    .get('.trick-card').last()
    .contains(".obstacle", "Obstacle: Stairs")
    .get('.trick-card').last()
    .contains(".tutorial", "test-tutorial")

  })
})