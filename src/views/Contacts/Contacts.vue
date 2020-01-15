<template>
	<Layout>
		<template v-slot:aside>
			<ContactsBan></ContactsBan>
		</template>

		<template v-slot:panel>
			<TopPanel :title="'Обо мне'" :hash="'#contscts'"></TopPanel>
		</template>

		<template v-slot:content>
			<section class="contacts" id="contscts">
				<Headline>Контакты</Headline>

				<section class="contacts__desc">
					<ul class="contacts__list">
						<li class="contacts__item">г. Киев</li>

						<li class="contacts__item">
							<a href="tel:0978750317">
								+38(097)-875-03-17
							</a>
						</li>

						<li class="contacts__item">
							<a href="mailto:romandev411.html@gmail.com">
								romandev411@gmail.com
							</a>
						</li>

						<li class="contacts__item">
							<a class="contacts__link" href="https://www.facebook.com/profile.php?id=100010846657053">
								https://facebook.com/
							</a>
						</li>

						<li class="contacts__item">
							<a class="contacts__link" href="www.linkedin.com/in/роман-юрченко-ab7157152">
								https://linkedin.com/
							</a>
						</li>
					</ul>
				</section>
			</section>
		</template>
	</Layout>
</template>

<script>
	import Layout from '~/components/Layout/Layout'
	import TopPanel from '~/components/Layout/TopPanel'
	import Headline from '~/components/Layout/Headline'
	import ContactsBan from '~/views/Contacts/ContactsBan'

	export default {
		components: {
			Layout,
			TopPanel,
			ContactsBan,
			Headline,
		},
		data() {
			return {}
		}
	}
</script>
