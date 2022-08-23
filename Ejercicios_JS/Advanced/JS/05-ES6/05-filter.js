// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

// const higher = ages.filter(item => {
// return item > 18
// })
// console.log(higher)



// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

// const par = ages.filter(item => {
// return item % 2 === 0
// })
// console.log(par)




// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.

// const streamers = [
// {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
// {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];

// const streamersLeague = streamers.filter((item) => {
//     return item.gameMorePlayed === 'League of Legends'
// })

// console.log(streamersLeague);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
	// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
	// usar la funcion .includes() para la comprobación.

	// const streamers = [
	// { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
	// { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
	// { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
	// { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
	// ];

	// const uArr = streamers.filter(item => {
	// 	return item.name.includes("u")
	// })

	// console.log(uArr)


	// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
	// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
	// .includes() para la comprobación.
	// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
	// .age sea mayor que 35.

	
	// const legends = streamers.filter(item => item.gameMorePlayed.includes('Legends'))

	// const toUpperCase = streamers.map(item => {
	// 	if (item.age > 35) {
	// 		item.gameMorePlayed = item.gameMorePlayed.toUpperCase()
	// 	}
	// 	return item
	// })

	// console.log(legends)
	// console.log(toUpperCase)
	

	// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar 
	// por consola los streamers que incluyan la palabra introducida en el input. 
	// De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 
	// 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' 
	// e 'Ibai'.

	const streamers = [
		{ name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
		{ name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
		{ name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
		{ name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
	];

	// const search = streamers.filter(item => {
	// 	return item.name.includes('Ru')
	// })
	
	// const eventInput = document.getElementById('toFilterStreamers')
	// eventInput.addEventListener('input', (search) => {
	// 	console.log(e.target.value)
	// })

	const word = document.getElementById("toFilterStreamers")
	word.addEventListener('input', (streamerOk) => {
		console.log(word.value)
	})

	const streamerOk = streamers.filter(item => {
		return item.name === word
		console.log(streamerOk)
	})

	
//  5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola  */ }
//  los streamers que incluyan la palabra introducida en el input. De esta forma, si  */ }
//  introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i',  */ }
//  me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */ }
//  En este caso, muestra solo los streamers filtrados cuando hagamos click en el button. */ }
//  const streamers = [ */ }
//  {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, */ }
//  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, */ }
//  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, */ }
//  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'} */ }
//  ]; 
//  




