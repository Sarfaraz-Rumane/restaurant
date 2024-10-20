function toggleReadMore(button) {
    const description = button.previousElementSibling;
    const isExpanded = description.classList.toggle('expanded');
    
    button.textContent = isExpanded ? 'Read Less' : 'Read More';
}

let counter = 1;
setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 3000); // Change image every 5 seconds
