window.addEventListener("scroll",function () {
	let navScroll = document.querySelector("nav");
	let topMenu = document.querySelector(".topMenu");
	if (window.scrollY > 56) {
		navScroll.classList.add("sticky")
		topMenu.style.display = "block";
	}else {
		navScroll.classList.remove("sticky")
		topMenu.style.display = "none"; 
	}
})

let nam = localStorage.setItem("sukesh", "Murmu")
let makeJson = JSON.stringify(nam)
let makeSring = JSON.parse(makeJson)
console.log(makeSring)


