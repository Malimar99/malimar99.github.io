// About

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        // button 'ABOUT'
        about = document.getElementById('about');
        about.addEventListener('click', function () {window.open("aindex.html", "_self");});
        }
}