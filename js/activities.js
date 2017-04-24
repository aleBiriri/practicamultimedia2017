		var activities = ['activity0','activity1','activity2','activity3','activity4','activity5'];

		function loadActivity(id){
			for(var i=0; i<activities.length; i++){
				console.log(activities[i]);
				document.getElementById(activities[i]).style.display = "none";
				document.getElementById("_"+activities[i]).style.color = "#3c7c06";
			}
			document.getElementById(id).style.display = "block";
			document.getElementById("_"+id).style.color = "#275704";
		}

		window.onload = loadActivity("activity0");