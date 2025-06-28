'use strict'
const news = [
	{
		title: `Minecraft's new frogs were briefly swallowing goats whole`,
		headerBgSrc: `https://cdn.mos.cms.futurecdn.net/yS8AdDkWFHzDhEjycLwkc9-970-80.jpg.webp`,
		category: 'Minecraft',
		body: "As part of the experimental features in Minecraft Bedrock version 1.18.10, Mojang has revealed some of the abilities of the frog mobs coming in this year's Wild Update. They can eat small Slimes and small Magma Cubes, which is a goofy enough habit. As Mojang shared during today's Minecraft Live presentation, frogs had a brief period as apex predators capable of swallowing entire goats. Players started noticing this savage frog behavior in the beta version of Minecraft for Windows back in January. Their hunger was, as some players realized, insatiable.",
		date: '2022-02-01',
	},
	{
		title: `Portal Companion Collection marks Valve's first foray into Nintendo territory`,
		headerBgSrc: `https://cdn.mos.cms.futurecdn.net/4YPvYtD2rZqGcEPSvbZtLh-1024-80.jpg.webp`,
		category: 'Nintendo',
		body: "Nintendo hosted one of its regular Nintendo Direct showcases today, and aside from the frankly troubling new Kirby game coming later this year, which should be of concern to everyone, it was a pretty unexciting affair for PC gamers. Aside from one big announcement: Valve is bringing both Portal games to the handheld later this year, marking the very first time a Valve-developed game has featured on a Nintendo platform. Yes, Bridge Constructor Portal exists on Switch, but that was developed by ClockStone and, according to its Steam page, wasn't even published by Valve. The Portal: Companion Collection marks Valve's Nintendo debut proper, and features both the original Portal and its sequel, both ported in collaboration with NVIDIA Lightspeed Studios. As the name implies, that's an internal NVIDIA studio that has, among other things, worked on the Quake 2 RTX project.",
		date: '2022-02-02',
	},
	{
		title: `Minecraft is experimenting with frogs ahead of the next update`,
		headerBgSrc: `https://cdn.mos.cms.futurecdn.net/GfuKjTgFtFNzWcTRdbiiEU-1024-80.jpg.webp`,
		category: 'Minecraft',
		body: "Ahead of the Wild Update arriving sometime in 2022, Minecraft Bedrock is testing out those fun new frog mobs that will be joining officially in version 1.19. The new version of Minecraft for Windows includes frogs, their tiny tadpole babies, and several of their new features to test out. From what we know about the frog mobs so far, they spawn in swamp biomes where they'll spend time snapping fireflies out of the air and hopping on Dripleafs. We already knew some other neat things about frogs, like how they hatch as tadpoles and grow into one of three frog varieties based on the biome they mature in. Mojang had also let on that frogs would be useful to players in some fashion, but didn't initially let on how.",
		date: '2022-02-03',
	},
	{
		title: `You can now be a wookiee in Fortnite, but not Chewie`,
		headerBgSrc: `https://cdn.mos.cms.futurecdn.net/C2cxkttvDWTSbMYPuSmgGh-1024-80.jpg.webp`,
		category: 'Fortnite',
		body: "The latest live action series set in a galaxy far, far away, The Book of Boba Fett, has introduced us to some cool new Star Wars characters, including Ming-Na Wen's Fennec Shand and new-wookiee-in-town Krrsantan, an arm-ripping fiend who towers over everybody else. Now you can play as both of them in Fortnite thanks to yet another crossover between Disney and the battle royale game. Boba Fett himself previously joined Fortnite earlier last month, and he's also back in the item shop so you can fill out your own Book of Boba.",
		date: '2022-02-03',
	},
	{
		title: `This Minecraft replica of Final Fantasy 14's Sharlayan is so good I thought it was an in-game screenshot`,
		headerBgSrc: `https://cdn.mos.cms.futurecdn.net/hkhr3YJhakUEfdFFUik3vV-1024-80.jpg.webp`,
		category: 'Minecraft',
		body: "I am undeniably an absolute sucker for people recreating cool stuff in Minecraft, and nothing has hit my interests more than this fantastic Minecraft replica of Final Fantasy 14's Old Sharlayan. The Grecian-inspired city is the first new area you visit in Endwalker, the game's latest expansion. It's become one of my favourite zones in the game and this replica has done a great job at capturing how gosh-darn pretty the whole place is. The creation comes courtesy of a BiliBili user, who posted a two-minute video of their build to the Chinese social media site. It shows off the giant statue/fountain seen in the Endwalker trailer, the sage council building and the city's main aetheryte which is even spinning in the recreation. Sadly, there doesn't seem to be a way to check this out in Minecraft ourselves, so we'll just have to admire the trailer a few times.",
		date: '2022-02-04',
	},
]

//Task 1
class Card {
	constructor(news) {
		this._news = news
	}

	activeFavorite(e) {
		const heart = e.target.closest('.new-card__header-heart-img')
		heart ? heart.classList.toggle('active') : null
		e.stopPropagation()
	}

	activeCard(e) {
		const newCard = e.target.closest('.new-card__list-item')
		newCard ? newCard.classList.toggle('active') : null
		e.stopPropagation()
	}

	deleteCard(e) {
		const activeCard = document.querySelector('.new-card__list-item.active')
		activeCard ? activeCard.remove() : null
		e.stopPropagation()
	}

	render() {
		const { title, headerBgSrc, category, body, date } = this._news

		const newCardContainer = document.createElement('div')
		newCardContainer.classList.add('new-card__container')

		const newCardList = document.createElement('ul')
		newCardList.classList.add('new-card__list')

		const newCardListItem = document.createElement('li')
		newCardListItem.classList.add('new-card__list-item')

		newCardListItem.newCardInstance = this

		const newCardHeader = document.createElement('div')
		newCardHeader.classList.add('new-card__header')

		const newCardHeaderBg = document.createElement('img')
		newCardHeaderBg.classList.add('new-card__header-bg')
		newCardHeaderBg.src = headerBgSrc
		newCardHeaderBg.alt = `Image for ${category}`

		const newCardHeaderTitle = document.createElement('h2')
		newCardHeaderTitle.classList.add('new-card__header-title')
		newCardHeaderTitle.textContent = title

		const newCardHeaderHeartContainer = document.createElement('div')
		newCardHeaderHeartContainer.classList.add(
			'new-card__header-heart-container'
		)

		const svgNS = 'http://www.w3.org/2000/svg'
		const newCardHeaderHeart = document.createElementNS(svgNS, 'svg')
		newCardHeaderHeart.classList.add('new-card__header-heart-img')
		newCardHeaderHeart.setAttribute('viewBox', '0 0 24 24')

		const path = document.createElementNS(svgNS, 'path')
		path.setAttribute(
			'd',
			'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09 C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5 c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
		)
		newCardHeaderHeart.appendChild(path)
		newCardHeaderHeart.addEventListener('click', (e) => this.activeFavorite(e))

		newCardHeaderHeartContainer.appendChild(newCardHeaderHeart)
		newCardHeader.appendChild(newCardHeaderBg)
		newCardHeader.appendChild(newCardHeaderTitle)
		newCardHeader.appendChild(newCardHeaderHeartContainer)

		const newCardInfo = document.createElement('div')
		newCardInfo.classList.add('new-card__info')

		const newCardInfoCategory = document.createElement('h3')
		newCardInfoCategory.classList.add('new-card__info-category')
		newCardInfoCategory.textContent = category

		const newCardInfoText = document.createElement('p')
		newCardInfoText.classList.add('new-card__info-text')
		newCardInfoText.textContent = body

		const newCardInfoPublished = document.createElement('p')
		newCardInfoPublished.classList.add('new-card__info-published')
		newCardInfoPublished.textContent = date

		newCardInfo.appendChild(newCardInfoCategory)
		newCardInfo.appendChild(newCardInfoText)
		newCardInfo.appendChild(newCardInfoPublished)

		newCardListItem.appendChild(newCardHeader)
		newCardListItem.appendChild(newCardInfo)

		newCardListItem.addEventListener('click', (e) => this.activeCard(e))

		newCardList.appendChild(newCardListItem)
		newCardContainer.appendChild(newCardList)

		const newCardGlobalContainer = document.querySelector(
			'.nwewCard__global-container'
		)
		newCardGlobalContainer.appendChild(newCardContainer)
	}
}

news.forEach((newsItem) => {
	const card = new Card(newsItem)
	card.render()
})

const btnDeleteNewCard = document.querySelector('.list-item__btn-delete-user')
btnDeleteNewCard.addEventListener('click', (e) => {
	const activeCard = document.querySelector('.new-card__list-item.active')
	if (activeCard && activeCard.newCardInstance) {
		activeCard.newCardInstance.deleteCard(e)
	} else {
		alert('Please select a card to delete.')
	}
})
