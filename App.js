const vueApp = {
	// Declarative Rendering
	data() {
		return {
			message: 'Hello Vue.js!',
			counter: 0,
			title: `You loaded this page on ${new Date().toLocaleString()}`,
		};
	},
	mounted() {
		// let content = '';
		// const matchVue = this.message.match(/(vue(\.js)*!*)/gi);
		// if (matchVue) {
		// 	content += `<span class="v-color">${matchVue[0]}</span>`;
		// 	content = this.message.replace(matchVue[0], content);
		// 	document.querySelector('h1').innerHTML = content;
		// }
		// const plus = document.getElementById('plus');
		// const min = document.getElementById('min');
		// plus.addEventListener('click', () => this.counter++);
		// min.addEventListener('click', () => this.counter > 0 && this.counter--);
	},
	// Handling user input
	methods: {
		plusCounter() {
			this.counter++;
		},
		minCounter() {
			this.counter > 0 && this.counter--;
		},
		reverseMessage() {
			this.message = this.message.split('').reverse().join('');
		},
		liveInput(e) {
			let content = '';
			let html = '';
			const matchVue = e.target.value.match(/(vue(\.js)*!*)/gi);
			const matchReact = e.target.value.match(/(react(\.js)*!*)/gi);
			const matchAngular = e.target.value.match(/(angular)!*/gi);
			if (matchVue || matchReact || matchAngular) {
				if (matchVue) {
					html = `<span class="v-color">${matchVue[0]}</span>`;
					content = e.target.value.replace(matchVue[0], html);
					document.querySelector('h1').innerHTML = content;
				}
				// if (matchReact) {
				// 	html = `<span class="v-color">${matchReact[0]}</span>`;
				// 	content = .replace(matchReact[0], html);
				// 	console.log(content);
				// }
				// if (matchAngular) {
				// 	html = `<span class="v-color">${matchAngular[0]}</span>`;
				// 	// content = content.replace(matchReact[0], html);
				// 	// console.log(content);
				// }
			} else {
				this.message = e.target.value;
				document.querySelector('h1').innerHTML = e.target.value;
			}
		},
	},
};

// RenderingDOM
Vue.createApp(vueApp).mount('#App');
