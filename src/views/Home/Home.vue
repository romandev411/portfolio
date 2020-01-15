<template>
	<Layout>
		<template v-slot:screen>
			<MainScreen></MainScreen>
		</template>

		<template v-slot:aside>
			<PixelsSect></PixelsSect>
		</template>

		<template v-slot:panel>
			<TopPanel :title="'Мои работы'" :hash="'#home'"></TopPanel>
		</template>

		<template v-slot:content>
			<section class="home" id="home">
				<Headline>Мои работы</Headline>

				<section class="home__desc">
					<div class="home__menu">
						<Button
							class="home__menu-btn"
							v-for="nav in navigation"
							:key="nav.id"
							v-on:click.native="{ selected = nav.id }"
							:class="{ 'active': selected == nav.id }"
						>
							{{ nav.name }}
						</Button>
					</div>

					<transition name="fade">
						<div class="home__item" v-if="selected == 1">
							<WorksGalery></WorksGalery>
						</div>
					</transition>

					<transition name="fade">
						<div class="home__item" v-if="selected == 2">
							<WorksJs></WorksJs>
						</div>
					</transition>

					<transition name="fade">
						<div class="home__item" v-if="selected == 3">
							<LinksList></LinksList>
						</div>
					</transition>
				</section>
			</section>
		</template>
	</Layout>
</template>

<script>
	import Layout from '~/components/Layout/Layout'
	import TopPanel from '~/components/Layout/TopPanel'
	import MainScreen from '~/views/Home/MainScreen'
	import PixelsSect from '~/views/Home/PixelsSect'
	import WorksGalery from '~/views/Home/WorksGalery'
	import WorksJs from '~/views/Home/WorksJs'
	import LinksList from '~/views/Home/LinksList'
	import Button from '~/components/Common/Button'
	import Headline from '~/components/Layout/Headline'

	export default {
		components: {
			Layout,
			MainScreen,
			TopPanel,
			PixelsSect,
			WorksGalery,
			WorksJs,
			LinksList,
			Button,
			Headline,
		},
		data() {
			return {
				selected: '1',
				navigation: [
					{name: 'Работы', id: '1',},
					{name: 'Javascript', id: '2',},
					{name: 'Ссылки', id: '3',},
				],
			}
		}
	}
</script>
