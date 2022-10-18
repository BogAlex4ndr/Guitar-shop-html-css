let guitarCard = [
    {id: 1, title: 'The Essential Les Paul', price: '$1299.00', img: src='img/the_Essential_Les_Paul.png'},
    {id: 2, title: 'J-45 Standard', price: '$1699.00', img: src='img/j-45_standart.png'},
    {id: 3, title: 'Hummingbird Standard', price: '$2099.00', img: src='img/Hummingbird.png'},
]

let guitarCardSecond = [
    {id: 4, title: 'Active Precision Bass® PH V', price: '$4199.00', img: src='img/BassPH_V.png'},
    {id: 5, title: 'Redondo Special', price: '$2,800.00', img: src='img/Redonodo_secial.png'},
    {id: 6, title: 'Professional II Stratocaster®', price: '$3,199.00', img: src='img/stratocaster.png'}
]

const toHTML = guitarCard  => `
<div class="store__items">
<a href=""><div class="card">
    <img src="${guitarCard.img}" class="card__img" alt="${guitarCard.title}">
        <div class="card-body">
        <h5 class="card-title">${guitarCard.title}</h5>
            <p class="card-text">${guitarCard.price}</p>
        </div>
    </div></a>
</div>
`

function render() {
    const html = guitarCard.map(toHTML).join('')
    document.querySelector('#guitarCard').innerHTML = html
  }

const toHTML2 = guitarCardSecond  => `
<div class="store__items">
<a href=""><div class="card">
    <img src="${guitarCardSecond.img}" class="card__img" alt="${guitarCardSecond.title}">
        <div class="card-body">
        <h5 class="card-title">${guitarCardSecond.title}</h5>
            <p class="card-text">${guitarCardSecond.price}</p>
        </div>
    </div></a>
</div>
`

function renderSecond () {
    const html2 = guitarCardSecond.map(toHTML2).join('')
    document.querySelector('#guitarCardSecond').innerHTML = html2
  }
  render ()
  renderSecond ()

  