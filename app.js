console.log('worked');

const card1 = {
    id: 2379,
    name: 'Хот-дог куриный',
    avatarUrl: 'https://s82079.cdn.ngenix.net/Wyvkk6X2vsQ7jGr8c84MzfK1.png',
    price: 79 + ' руб.',
    description: 'Хот-дог с куриной колбаской с травами, сладким горчичным соусом, кетчупом, маринованными огурчиками, луком и халапеньо.',
    weight: 124 + ' гр.',
}

const avatarEl = document.getElementById('avatar1');
avatarEl.src = card1.avatarUrl;

const cardNameEl = document.getElementById('card1-name');
cardNameEl.textContent = card1.name;

const cardPriceEl = document.getElementById('card1-price');
cardPriceEl.textContent = card1.price;

const cardDescriptionEl = document.getElementById('card1-description');
cardDescriptionEl.textContent = card1.description;

const cardWeightEl = document.getElementById('card1-weight');
cardWeightEl.textContent = card1.weight;