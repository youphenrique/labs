import pileCards1 from '../../src/__mocks__/pile-cards-1.json';
import pileCards2 from '../../src/__mocks__/pile-cards-2.json';
import pileCards3 from '../../src/__mocks__/pile-cards-3.json';
import { PileCardsData } from '../../src/services/client';

describe('App test suite', () => {
  const endpoints = 'endpoints.json';

  beforeEach(() => {
    cy.visit('/');
  });

  it('runs first case', () => {
    const cards = pileCards1.piles.cards.cards;
    const rotationCard = '10C';
    const [card1, card2, card3, card4, card5] = cards;

    cy.server();
    cy.fixture(endpoints).then(
      ({ createDeck, drawCards, createPile, getPile }) => {
        const createDeckUrl = `${Cypress.env('API_URL')}${createDeck}`;
        const drawCardsUrl = `${Cypress.env('API_URL')}${drawCards}`;
        const createPileUrl = `${Cypress.env('API_URL')}${createPile}`;
        const getPileUrl = `${Cypress.env('API_URL')}${getPile}`;
        cy.route('GET', createDeckUrl).as('createDeck');
        cy.route('GET', drawCardsUrl).as('drawCards');
        cy.route('GET', createPileUrl).as('createPile');
        cy.route('GET', getPileUrl).as('getPile');
      },
    );

    cy.findByPlaceholderText('Card 1').type(card1.code);
    cy.findByPlaceholderText('Card 2').type(card2.code);
    cy.findByPlaceholderText('Card 3').type(card3.code);
    cy.findByPlaceholderText('Card 4').type(card4.code);
    cy.findByPlaceholderText('Card 5').type(card5.code);
    cy.findByPlaceholderText('Rotation card').type(rotationCard);

    cy.findByText(/submit/i)
      .closest('button')
      .click();

    cy.wait('@createDeck')
      .then(xhr => {
        const deckId = (xhr.responseBody as PileCardsData).deck_id;
        cy.assertRoute(`/deck/${deckId}`);
      })
      .wait('@drawCards')
      .wait('@createPile')
      .wait('@getPile');

    cy.findByText(/ordered pile/i).should('be.visible');
    cy.findByText(/highest card/i)
      .next()
      .should('have.text', '9S');
    cy.findByText(/full house combinations/i)
      .next()
      .should('have.text', 'None');
  });

  it('runs second case', () => {
    const cards = pileCards2.piles.cards.cards;
    const rotationCard = '2H';
    const [card1, card2, card3, card4, card5] = cards;

    cy.server();
    cy.fixture(endpoints).then(
      ({ createDeck, drawCards, createPile, getPile }) => {
        const createDeckUrl = `${Cypress.env('API_URL')}${createDeck}`;
        const drawCardsUrl = `${Cypress.env('API_URL')}${drawCards}`;
        const createPileUrl = `${Cypress.env('API_URL')}${createPile}`;
        const getPileUrl = `${Cypress.env('API_URL')}${getPile}`;
        cy.route('GET', createDeckUrl).as('createDeck');
        cy.route('GET', drawCardsUrl).as('drawCards');
        cy.route('GET', createPileUrl).as('createPile');
        cy.route('GET', getPileUrl).as('getPile');
      },
    );

    cy.findByPlaceholderText('Card 1').type(card1.code);
    cy.findByPlaceholderText('Card 2').type(card2.code);
    cy.findByPlaceholderText('Card 3').type(card3.code);
    cy.findByPlaceholderText('Card 4').type(card4.code);
    cy.findByPlaceholderText('Card 5').type(card5.code);
    cy.findByPlaceholderText('Rotation card').type(rotationCard);

    cy.findByText(/submit/i)
      .closest('button')
      .click();

    cy.wait('@createDeck')
      .then(xhr => {
        const deckId = (xhr.responseBody as PileCardsData).deck_id;
        cy.assertRoute(`/deck/${deckId}`);
      })
      .wait('@drawCards')
      .wait('@createPile')
      .wait('@getPile');

    cy.findByText(/ordered pile/i).should('be.visible');
    cy.findByText(/highest card/i)
      .next()
      .should('have.text', 'KH');
    cy.findByText(/full house combinations/i)
      .next()
      .should('have.text', 'AD, AC, AS, KH, KS');
  });

  it('runs third case', () => {
    const cards = pileCards3.piles.cards.cards;
    const rotationCard = '2H';
    const [card1, card2, card3, card4, card5, card6, card7] = cards;

    cy.server();
    cy.fixture(endpoints).then(
      ({ createDeck, drawCards, createPile, getPile }) => {
        const createDeckUrl = `${Cypress.env('API_URL')}${createDeck}`;
        const drawCardsUrl = `${Cypress.env('API_URL')}${drawCards}`;
        const createPileUrl = `${Cypress.env('API_URL')}${createPile}`;
        const getPileUrl = `${Cypress.env('API_URL')}${getPile}`;
        cy.route('GET', createDeckUrl).as('createDeck');
        cy.route('GET', drawCardsUrl).as('drawCards');
        cy.route('GET', createPileUrl).as('createPile');
        cy.route('GET', getPileUrl).as('getPile');
      },
    );

    cy.findByPlaceholderText('Card 1').type(card1.code);
    cy.findByPlaceholderText('Card 2').type(card2.code);
    cy.findByPlaceholderText('Card 3').type(card3.code);
    cy.findByPlaceholderText('Card 4').type(card4.code);
    cy.findByPlaceholderText('Card 5').type(card5.code);
    cy.findByPlaceholderText('Card 6').type(card6.code);
    cy.findByPlaceholderText('Card 7').type(card7.code);
    cy.findByPlaceholderText('Rotation card').type(rotationCard);

    cy.findByText(/submit/i)
      .closest('button')
      .click();

    cy.wait('@createDeck')
      .then(xhr => {
        const deckId = (xhr.responseBody as PileCardsData).deck_id;
        cy.assertRoute(`/deck/${deckId}`);
      })
      .wait('@drawCards')
      .wait('@createPile')
      .wait('@getPile');

    cy.findByText(/ordered pile/i).should('be.visible');
    cy.findByText(/highest card/i)
      .next()
      .should('have.text', '2H');
    cy.findByText(/full house combinations/i)
      .next()
      .children()
      .children('div')
      .should('have.length', 18);
  });

  it('should shows an error message when happens fetch API error', () => {
    const cards = pileCards1.piles.cards.cards;
    const rotationCard = '10C';
    const [card1, card2, card3, card4, card5] = cards;

    cy.server();
    cy.fixture(endpoints).then(({ createDeck }) => {
      cy.route({
        method: 'GET',
        url: `${Cypress.env('API_URL')}${createDeck}`,
        status: 503,
        response: {},
      }).as('createDeck');
    });

    cy.findByPlaceholderText('Card 1').type(card1.code);
    cy.findByPlaceholderText('Card 2').type(card2.code);
    cy.findByPlaceholderText('Card 3').type(card3.code);
    cy.findByPlaceholderText('Card 4').type(card4.code);
    cy.findByPlaceholderText('Card 5').type(card5.code);
    cy.findByPlaceholderText('Rotation card').type(rotationCard);

    cy.findByText(/submit/i)
      .closest('button')
      .click();

    cy.wait('@createDeck');

    cy.findByTestId('error-toast')
      .should('be.visible')
      .and('have.text', 'Something went wrong creating deck');
  });
});
