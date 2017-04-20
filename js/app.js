(function(){
	console.log('coucou');
})()
var app = new Vue ({
	el: '#app',
	data:{
		message : "Hello World !!!!",
		message1 : "<h2>Bonjour les gens</h2>",
		show: true,
		listes:[
		{text: "Urgan"},
		{text: "l'Homme Goujon"},
		{text: "Assassin"}
		],
		newColor: "red",
		newFont: 30
	} 
})

