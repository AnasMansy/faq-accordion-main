var icons  = document.querySelectorAll('.q-icon');
console.log(icons);
 
icons.forEach(function(icon) {
    icon.addEventListener('click', function() {
        // Toggle the visibility of the next sibling element with class "answer"
        console.log(icon.src);
        
        var qustion = icon.parentElement;
        var answer=qustion.nextElementSibling;
        console.log(answer);
        console.log(answer.style.display);
       
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            icon.src = 'http://127.0.0.1:5500/assets/images/icon-plus.svg'; // Assuming the source for plus icon is plus.png
        } else {
            answer.style.display = 'none';
            icon.src = 'http://127.0.0.1:5500/assets/images/icon-minus.svg'; // Assuming the source for minus icon is minus.png
        }
    });
});