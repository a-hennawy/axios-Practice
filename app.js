shuffledCardsURL =
  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

//Part 2.a

// async function drawCard() {
//   let res = await axios.get(shuffledCardsURL);
//   const deckID = res.data.deck_id;

//   let cardResponse = await axios.get(
//     `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
//   );
//   const randomCard = cardResponse.data.cards[0];
//   console.log(randomCard.value, "of", randomCard.suit);
// }

// drawCard();

//part 2.b

async function drawMoreCard() {
  let res = await axios.get(shuffledCardsURL);
  const deckID = res.data.deck_id;

  let cardResponse1 = axios.get(
    `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
  );
  let cardResponse2 = axios.get(
    `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
  );

  cardsData = await Promise.all([cardResponse1, cardResponse2]);
  const randomCard1 = cardsData[0].data.cards[0];

  const randomCard2 = cardsData[1].data.cards[0];
  console.log(randomCard1.value, "of", randomCard1.suit);
  console.log(randomCard2.value, "of", randomCard2.suit);
}

drawMoreCard();

// part 2.c
