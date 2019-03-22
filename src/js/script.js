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

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    btn.classList.toggle('burger--active');
}