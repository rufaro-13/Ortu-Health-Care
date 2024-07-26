
import React from 'react'
import paliat from '../images/Hampton Garden house/image1.jpg'
import respite from '../images/Hampton Garden house/image10.jpg'
import supported from '../images/Hampton Garden house/image11.jpg'
import './carousel.css'

function Carousel() {


  window.addEventListener('load', () => {
    var
    carousels = document.querySelectorAll('.carousel');
  
  
    for (var i = 0; i < carousels.length; i++) {
      carousel(carousels[i]);
    }
  });
  
  function carousel(root) {
    var
    figure = root.querySelector('figure'),
    nav = root.querySelector('nav'),
    images = figure.children,
    n = images.length,
    gap = root.dataset.gap || 0,
    bfc = ('bfc' in root.dataset),
  
    theta = 2 * Math.PI / n,
    currImage = 0;
  
  
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener('resize', () => {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });
  
    setupNavigation();
  
    function setupCarousel(n, s) {
      var
      apothem = s / (2 * Math.tan(Math.PI / n));
  
  
      figure.style.transformOrigin = `50% 50% ${-apothem}px`;
  
      for (var i = 0; i < n; i++)
      images[i].style.padding = `${gap}px`;
      for (i = 1; i < n; i++) {
        images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
        images[i].style.transform = `rotateY(${i * theta}rad)`;
      }
      if (bfc)
      for (i = 0; i < n; i++)
      images[i].style.backfaceVisibility = 'hidden';
  
      rotateCarousel(currImage);
    }
  
    function setupNavigation() {
      nav.addEventListener('click', onClick, true);
  
      function onClick(e) {
        e.stopPropagation();
  
        var t = e.target;
        if (t.tagName.toUpperCase() !== 'BUTTON')
        return;
  
        if (t.classList.contains('next')) {
          currImage++;
        } else
        {
          currImage--;
        }
  
        rotateCarousel(currImage);
      }
  
    }
  
    function rotateCarousel(imageIndex) {
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }
  
  }
  return (
    <div className='body1'>
     <h1>3D Rotating Carousel Examples</h1>
{/* 
<h2>Three images</h2>
<div class="carousel">
	<figure>
		<img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
	</figure>
	<nav>
		<button class="nav prev">Prev</button>
		<button class="nav next">Next</button>
	</nav>
</div>

<h2>Four images</h2>
<div class="carousel">
	<figure>
    <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
	</figure>
	<nav>
		<button class="nav prev">Prev</button>
		<button class="nav next">Next</button>
	</nav>
</div>

<h2>Eight images</h2>
<div class="carousel">
	<figure>
    <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
    <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
	</figure>
	<nav>
		<button class="nav prev">Prev</button>
		<button class="nav next">Next</button>
	</nav>
</div> */}

<h2>Eight images, with 20px gap</h2>
<div class="carousel" data-gap="20">
	<figure>
    <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
    <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
	</figure>
	<nav>
		<button class="nav prev">Prev</button>
		<button class="nav next">Next</button>
	</nav>
</div>

<h2>Eight images, with 80px gap</h2>
<div class="carousel" id="carousel1"data-gap="80">
	<figure>
    <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
    <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
	</figure>
	<nav>
		<button class="nav prev">Prev</button>
		<button class="nav next">Next</button>
	</nav>
</div>

{/* <h2>Hidden backfaces</h2>
<div class="carousel" data-gap="20" data-bfc>
	<figure>
   <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
    <img src={paliat} alt="h"/>
		<img src={respite} alt="h"/>
		<img src={supported} alt="h"/>
    <img src={supported} alt="h"/>
	</figure>
	<nav>
		<button class="nav prev">Prev</button>
		<button class="nav next">Next</button>
	</nav>
</div> */}


<h1>3d images gallery</h1>
  <div class="container">
		<div id="carousel">
			<figure><img src="https://i.ibb.co/CzhtWG4/image10.jpg" alt=""/></figure>
			<figure><img src="https://i.ibb.co/zXS9Vnh/image9.jpg" alt=""/></figure>
			<figure><img src="https://i.ibb.co/c6x962d/image8.jpg" alt=""/></figure>
			<figure><img src="https://i.ibb.co/VYRJH1D/image6.jpg" alt=""/></figure>
			<figure><img src="https://i.ibb.co/5BR13p9/image7.jpg" alt=""/></figure>
			<figure><img src="https://i.ibb.co/gZp0N60/image14.jpg" alt=""/></figure>
			<figure><img src="https://i.ibb.co/0Qpj335/image13.jpg" alt=""/></figure>
			<figure><img src="https://i.ibb.co/yN1V9mS/image12.jpg" alt=""/></figure>
			<figure><img src="https://i.ibb.co/hs4tvyk/image11.jpg" alt=""/></figure>
      <figure><img src="https://i.ibb.co/fG6HFdz/image5.jpg" alt=""/></figure>
      <figure><img src="https://i.ibb.co/f8C2BmG/image4.jpg" alt=""/></figure>
      <figure><img src="https://i.ibb.co/4TPbXkK/image3.jpg" alt=""/></figure>
      <figure><img src="https://i.ibb.co/6FsSyX4/image1.jpg" alt=""/></figure>
      <figure><img src="https://i.ibb.co/0rC8pkT/image2.jpg" alt=""/></figure>
		</div>
	</div>
    </div>
  )
}

export default Carousel