var activities = {
				1:["Swim or walk", "In Castillo you can swim in the river or go walking in the wild forests.",
				"images/el-chorrito.jpg"],
				2:["Parque de la isla", "Visit  The Island’s park in Plasencia. Near the Jerte there is a beautiful park. In summer it is  mild tempered because of the high trees and  the river. Here you can swim in a free swimming pool in the river’s water. You have a couple of places to have a drink or some food if you want.", "images/plasencia-isla.jpg"],
				3:["Ermita de la virgen del puerto", "I recommend you this place because from there you can see a spectacular view of the city and its surroundings. You must drive to a little church (or walk if you dare), beyond Plasencia’s hospital, and you can park in a parking site nearby. Then you can walk on a lane surrounded by several cork trees, seeing at the bottom of the valley at your left (the West, because you are walking to the North) the highway to Salamanca. Some people take their Sunday meal and eat in the country. You can do the same."
				,"images/plasencia-ermita.jpg"],
				4:["A track in Valcorchero","If you like trecking you can follow this <a href='http://www.wikirutas.es/rutas/versionimprimible.asp?id=1366'>way</a>" ,"images/valcorchero.jpg"],
				5:["La Chopera", "If you take the road of the valley (that goes up  along the river Jerte towards Ávila), driving just 2 km from Plasencia,   you’ll find, at the left,  a nice place near the river with a camping site and a restaurant where you can take your dinner if you want. I love swimming in this place, although the water is rather cold. I like going in the afternoon before sunset, because I think at this time the water is not so cold. You can recommend your friends this camping site (<a href='http://www.campinglachopera.com/'>Camping La Chopera</a>). I like it very much.",
				"images/la-chopera.jpg"]
			};
		function loadActivity(id){
			
			document.getElementById("title-activity").innerHTML = activities[id][0];
			document.getElementById("data-activity").innerHTML = activities[id][1];
			document.getElementById("img-activity").src = activities[id][2];
		}