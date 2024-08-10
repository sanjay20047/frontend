import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import '../../assets/styles/Scroll.css'; // Ensure this path is correct
import b1 from '../../assets/images/scrollresident.jpg';

gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  useEffect(() => {
    const pageContainer = document.querySelector(".scroll-container");
    
    // Initialize LocomotiveScroll
    const scroller = new LocomotiveScroll({
      el: pageContainer,
      smooth: true
    });

    scroller.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(pageContainer, {
      scrollTop(value) {
        return arguments.length
          ? scroller.scrollTo(value, 0, 0)
          : scroller.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: pageContainer.style.transform ? "transform" : "fixed"
    });

    // Pinning and horizontal scrolling
    const pinWrap = document.querySelector(".pin-wrap");
    const pinWrapWidth = pinWrap.scrollWidth;
    const horizontalScrollLength = pinWrapWidth - window.innerWidth;

    gsap.to(".pin-wrap", {
      scrollTrigger: {
        scroller: pageContainer,
        scrub: true,
        trigger: "#sectionPin",
        pin: true,
        start: "top top",
        end: `+=${pinWrapWidth}`
      },
      x: -horizontalScrollLength,
      ease: "none"
    });

    ScrollTrigger.addEventListener("refresh", () => scroller.update());
    ScrollTrigger.refresh();

    // Cleanup on component unmount
    return () => {
      scroller.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    
    <div className="scroll-container">
      <section data-bgcolor="#bcb8ad" data-textcolor="#032f35">
        <div>
          <h1 data-scroll data-scroll-speed="1">
            <span>What</span> <span>We Do?</span>
          </h1>
          <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
          </p>
        </div>
      </section>

      <section id="sectionPin">
        <div className="pin-wrap">
          <h2>We collect Residential waste,Industrial waste ,E-waste etc</h2>
          <img src={b1} alt=""/>
          <img src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt=""/>
          <img src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt=""/>
        </div>
      </section>

      <section data-bgcolor="#e3857a" data-textcolor="#f1dba7">
        <img src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        <h2 data-scroll data-scroll-speed="1" className="credit">
          <a href="https://thisisadvantage.com" target="_blank" rel="noopener noreferrer"></a>
        </h2>
      </section>
    </div>
  );
};

export default Scroll;
