document.getElementById('header').innerHTML = await fetch('header.html').then(res => res.text());
document.getElementById('footer').innerHTML = await fetch('footer.html').then(res => res.text());
