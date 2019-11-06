const body = document.body
const url = `http://api.weatherstack.com/current?access_key=e0b6a65836e5b77448deb016e6c14287&query=New%20York&units=f`
const widget = document.querySelector('.widget')
const pTag = document.querySelector('p')

const main = async () => {
	// Code goes here
	const response = await axios.get(`${url}`)
	const data = response.data
	pTag.innerHTML = `${data.location.name}, ${data.location.country}`
	const temp = document.createElement('div')
	temp.classList.add('temp')
	temp.innerHTML = `${data.current.temperature} F`
	widget.append(temp)
	const imgs = data.current.weather_icons
	const picture = document.createElement('div')
	picture.innerHTML = `<img src = "${imgs}">`
	temp.append(picture)
	const wind = document.createElement('div')
	wind.classList.add('wind')
	wind.innerHTML = `Description: ${data.current.weather_descriptions}`
	widget.append(wind)
	const feelsLike = document.createElement('div')
	feelsLike.classList.add('feelsLike')
	feelsLike.innerHTML = `Feels Like: ${data.current.feelslike} F`
	widget.append(feelsLike)
	const time = document.createElement('div')
	time.classList.add('time')
	time.innerHTML = data.current.observation_time
	widget.append(time)


	console.log('Working')
}

window.onload = main()
