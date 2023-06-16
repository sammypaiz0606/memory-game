document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const gridDisplay = document.querySelector('#grid');
    const cardsChosen = [];

    function createBoard() {
        for(let i=0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            gridDisplay.appendChild(card);
        }
    }
    createBoard();

    function checkMatch() {
        const cards = 
        console.log('check for match!');
        if(cardsChosen[0] == cardsChosen[1]) {
            alert('You found a match!');
        }
    }

    function flipCard() {
        console.log(cardArray);
        const cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        console.log('clicked', cardId);
        console.log(cardsChosen);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2) {
            setTimeout( checkMatch, 500);
        }
    }
});