window.onload = function () {
  generateRandomCard();
};

function generateRandomCard() {
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const suits = [
    { symbol: '♥', name: 'heart' },
    { symbol: '♠', name: 'spade' },
    { symbol: '♣', name: 'club' },
    { symbol: '♦', name: 'diamond' }
  ];

  const value = values[Math.floor(Math.random() * values.length)];
  const suit = suits[Math.floor(Math.random() * suits.length)];

  
  document.querySelector('.top-suit').textContent = suit.symbol;
  document.querySelector('.bottom-suit').textContent = suit.symbol;
  document.querySelector('.card-value').textContent = value;

  document.querySelector('.card').className = 'card mx-auto mt-5 ' + suit.name;
}