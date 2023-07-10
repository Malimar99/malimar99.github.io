// About

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        
        // button 'ABOUT'
        about = document.getElementById('about');
        about.addEventListener('click', function () {window.open("index.html", "_self");});

        // portfolio button
        about = document.getElementById('portfolio');
        about.addEventListener('click', function () {window.open("https://malimar99.github.io/projects/mixed-messages/index.html");});

        // photography button

        about = document.getElementById('photography');
        about.addEventListener('click', function () {window.open("photography.html", "_self");});
        }
}