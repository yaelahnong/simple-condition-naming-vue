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
		let content = '';
		const matchVue = this.message.match(/(vue(\.js)*!*)/gi);
		if (matchVue) {
			content += `<span class="v-color">${matchVue[0]}</span>`;
			content = this.message.replace(matchVue[0], content);
			document.querySelector('h1').innerHTML = content;
		}
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
			console.log(this.message);
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
					console.log(content);
				}
				if (matchReact) {
					html = `<span class="r-color">${matchReact[0]}</span>`;
					if (content !== '') {
						content = content.replace(matchReact[0], html);
					} else {
						content = e.target.value.replace(matchReact[0], html);
					}
					console.log(content);
					document.querySelector('h1').innerHTML = content;
				}
				if (matchAngular) {
					html = `<span class="a-color">${matchAngular[0]}</span>`;
					if (content !== '') {
						content = content.replace(matchAngular[0], html);
					} else {
						content = e.target.value.replace(matchAngular[0], html);
					}
					console.log(content);
					document.querySelector('h1').innerHTML = content;
				}
			} else {
				this.message = e.target.value;
				document.querySelector('h1').innerHTML = e.target.value;
			}
		},
	},
};

// RenderingDOM
Vue.createApp(vueApp).mount('#App');
