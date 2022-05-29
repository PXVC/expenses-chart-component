let chartTooltips = document.querySelectorAll(".chart__tooltip");
let chartBar = document.querySelectorAll(".chart__col");
let chartDay = document.querySelectorAll(".chart__day");

fetch("./data.json")
	.then((response) => response.json())
	.then((data) => {
		for (let i = 0; i < chartDay.length; i++) {
			chartTooltips[i].innerHTML = "$" + data[i]["amount"];
			chartBar[i].style.height = data[i]["amount"] * 3 + "px";
			chartDay[i].innerHTML = data[i]["day"];
		}
	});
