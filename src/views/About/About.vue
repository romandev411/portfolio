<template>
	<Layout>
		<template v-slot:aside>
			<EditContent></EditContent>
		</template>

		<template v-slot:panel>
			<TopPanel :title="'Обо мне'" :hash="'#about'"></TopPanel>
		</template>

		<template v-slot:content>
			<section class="about" id="about">
				<Headline>Обо мне</Headline>

				<section class="about__desc">
					<div class="about__info">
						<h3 class="about__info-name">Юрченко Роман Викторович</h3>
						<p class="about__info-position">Front-end developer</p>

						<p class="about__description">
							Очень увлечен своей профессией.
							Все больше углубляюсь в изучение веб разработки, совершенствую навыки.
							Люблю гордиться проделанной работой.
							Хочу чтоб работа способствовала моему профессиональному росту.
						</p>

						<p class="about__info-sub">
							<strong class="about__info-title">Дата рождения:</strong>
							<span class="about__info-text">14 мая 1990 (29 лет).</span>
						</p>

						<p class="about__info-sub">
							<strong class="about__info-title">Город:</strong>
							<span class="about__info-text">Киев.</span>
						</p>

						<section class="about__skills-wrap">
							<h3 class="about__skills-title">
								<span class="about__info-title">Профессиональные навыки:</span>
							</h3>

							<ul class="about__skills">
								<li class="about__skills-item" v-for="item in skills">
									{{ item }}
								</li>
							</ul>

							<ul class="about__ico-list">
								<li class="about__ico-item" v-for="item in icons">
									<div :class="item"></div>
								</li>
							</ul>
						</section>
					</div>
				</section>
			</section>
		</template>
	</Layout>
</template>

<script>
	import Layout from '~/components/Layout/Layout'
	import TopPanel from '~/components/Layout/TopPanel'
	import Headline from '~/components/Layout/Headline'
	import EditContent from '~/views/About/EditContent'

	export default {
		components: {
			Layout,
			TopPanel,
			EditContent,
			Headline,
		},
		data() {
			return {
				skills: [
					'HTML5(video/audio API)',
					'CSS3( Знание многих нюансов взаимодействия свойств друг с другом. Анимации. Flexbox, Grid )',
					'JavaScript',
					'Vue Js',
					'Соответствие основным принципам: DRY, KISS, производительность, доступность, поддержка )',
					'Блочная, табличная верстка',
					'Резиновая, адаптивная верстка',
					'Хорошее понимание семантики',
					'Кросбраузерность',
					'Аккуратный код',
					'css препроцессоры',
					'БЭМ',
					'git',
					'Webpack/gulp',
				],
				icons: [
				  'icon-html5',
				  'icon-css3',
				  'icon-js6',
				  'icon-figma',
				  'icon-gulp',
				  'icon-sass',
				  'icon-sublime',
				  'icon-svg',
				  'icon-webpack',
				  'icon-webstorm',
				  'icon-git',
				  'icon-vue',
				  'icon-google',
				],
			}
		}
	}
</script>
