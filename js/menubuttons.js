let headerContent = `
<a href="index.html">
                <img src="images/buttons/homebutton.png" class="button"></a>
<a href="gallery/gallerymain.html">
                <img src="images/buttons/gallerybutton.png" class="button"></a>
<a href="blog/blogmain.html">
                <img src="images/buttons/blogbutton.png" class="button"></a>
<a href="comissions/comissionsmain.html">
                <img src="images/buttons/comissionsbutton.png" class="button"></a>
<a href="guestbook/guestbook.html">
                <img src="images/buttons/guestbookbutton.png" class="button"></a>
`;
document.querySelector('#buttoncontainer').insertAdjacentHTML('beforeend', headerContent);
