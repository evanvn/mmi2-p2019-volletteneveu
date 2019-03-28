/*import 'waypoints/lib/noframework.waypoints.min.js'
const sections = document.querySelectorAll('.-section')

sections.forEach(section => {
    const waypoint = new Waypoint({
        element: section,
        handler: function(direction) {
            if(direction == "down") {
                section.classList.add('-section--reached')
            }
            else {
                section.classList.remove('-section--reached')
            }
            
        },
        offset: '2%'
    })
})*/

let link = document.getElementsByTagName('a');

for(let i = 0 ; i < link.length ; i++) {
    link[i].addEventListener('click', function(event) {
        console.log(event);
    });
} 