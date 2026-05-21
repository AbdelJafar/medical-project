// part of the js that gives the scrolling effect of the website after link are being clicked

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}) 
});
// end of the js par that give sthe scrooling effect of the website

// custom cursor codes

const cursor = document.querySelector('.cursor');


document.addEventListener('mousemove', e => {
    // console.log(e);
    cursor.setAttribute("style", "top: "+e.pageY+"px; left: "+e.pageX+"px;");
});

// changing cursor style on hover
const anchorPoints = document.querySelectorAll('a');

console.log(anchorPoints);

for (var i = 0; i < anchorPoints.length; i++) {
    anchorPoints[i].addEventListener('mouseenter', changeCursorStyle);
    anchorPoints[i].addEventListener('mouseleave', resetCursorStyle);
}

function changeCursorStyle() { 
    cursor.classList.add('cursor-hovering');
}

function resetCursorStyle() {
    cursor.classList.remove('cursor-hovering');

}
// en do the custom cursor code

// rendering the form as a complete json
// function handleSubmit(event) {
//     event.preventDefault();
  
//     const data = new FormData(event.target);
  
//     // Do a bit of work to convert the entries to a plain JS object
//     const value = Object.fromEntries(data.entries());
  
//     console.log({ value });
//   }
  
//   const form = document.querySelector('form');
//   form.addEventListener('submit', handleSubmit);
