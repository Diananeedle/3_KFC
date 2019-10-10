console.log('worked');

const card1 = {
    id: 2379,
    name: 'Хот-дог куриный',
    avatarUrl: 'https://s82079.cdn.ngenix.net/Wyvkk6X2vsQ7jGr8c84MzfK1.png',
    price: 79 + ' руб.',
    description: 'Хот-дог с куриной колбаской с травами, сладким горчичным соусом, кетчупом, маринованными огурчиками, луком и халапеньо.',
    weight: 124 + ' гр.',
}

const avatar1El = document.getElementById('avatar1');
avatar1El.src = card1.avatarUrl;

const cardName1El = document.getElementById('card1-name');
cardName1El.textContent = card1.name;

const cardPrice1El = document.getElementById('card1-price');
cardPrice1El.textContent = card1.price;

const cardDescription1El = document.getElementById('card1-description');
cardDescription1El.textContent = card1.description;

const cardWeight1El = document.getElementById('card1-weight');
cardWeight1El.textContent = card1.weight;



const card2 = {
    id: 2382,
    name: 'Чизбургер Де Люкс',
    avatarUrl: 'https://s82079.cdn.ngenix.net/MXahUbKht6Q6D2wGRYrAz7nu.png',
    price: 124 + ' руб.',
    description: 'Пряный горчичный соус, кетчуп, сочное филе в оригинальной панировке, лук, сыр Чеддер, огурцы на пшеничной булочке с кукурузной посыпкой, свежий салат и ломтики помидора.',
    weight: 226 + ' гр.',
}

const avatar2El = document.getElementById('avatar2');
avatar2El.src = card2.avatarUrl;

const cardName2El = document.getElementById('card2-name');
cardName2El.textContent = card2.name;

const cardPrice2El = document.getElementById('card2-price');
cardPrice2El.textContent = card2.price;

const cardDescription2El = document.getElementById('card2-description');
cardDescription2El.textContent = card2.description;

const cardWeight2El = document.getElementById('card2-weight');
cardWeight2El.textContent = card2.weight;


document.getElementById('but1').onclick = function(){
    alert('Мы такое еще не проходили :)');
}

document.getElementById('but2').onclick = function(){
    alert('Мы такое еще не проходили :)');
}