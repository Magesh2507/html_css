const head = document.querySelector('.head')
const pic = document.querySelector('.pic')
pic.addEventListener('scroll', () => {
	head.classList.add('active')
})