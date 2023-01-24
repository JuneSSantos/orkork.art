let headerContent = `
<a href="index.html">
                <img src="images/buttons/homebutton.png" class="button"></a>
<a href="gallery/gallerymain.html">
                <img src="images/buttons/gallerybutton.png" class="button"></a>
<a href="blog/blogmain.html">
                <img src="images/buttons/blogbutton.png" class="button"></a>
<a href="comissions/comissionsmain.html">
                <img src="images/buttons/comissionsbutton.png" class="button"></a>
<div class="dropmenu1">
<a href="guestbook/guestbook.html">
                <img src="images/buttons/guestbookbutton.png" class="button"></a>
    <div class="dropmenu1-content">
    <a href="about/about.html">
    <img src="images/buttons/aboutbutton.png" class="button dropbutton"></a>
    </div>
    </div>
`;
document.querySelector('#buttoncontainer').insertAdjacentHTML('beforeend', headerContent);
