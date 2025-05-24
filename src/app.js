window.onload = function () {
  generateRandomCard();
};

function generateRandomCard() {
  const cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const cardSuits = [
    { symbol: '♥', name: 'heart' },
    { symbol: '♠', name: 'spade' },
    { symbol: '♣', name: 'club' },
    { symbol: '♦', name: 'diamond' }
  ];

  const selectedValue = cardValues[Math.floor(Math.random() * cardValues.length)];
  const selectedSuit = cardSuits[Math.floor(Math.random() * cardSuits.length)];

  document.querySelector('.top-suit').textContent = selectedSuit.symbol;
  document.querySelector('.bottom-suit').textContent = selectedSuit.symbol;
  document.querySelector('.card-value').textContent = selectedValue;

  document.querySelector('.card').className = 'card mx-auto mt-5 ' + selectedSuit.name;
}