import React, {useEffect} from 'react';
import FooterImg from '../assets/footer.png'
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


function Footer() {
    useEffect(() => {
        let tl = gsap.timeline()
        tl.to(`.footer__image`,{y:0})
    
        ScrollTrigger.create({
            animation: tl,
            trigger: `.footer`,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 3,
        })
      
        
      }, []);

  return <div className='p-20 footer w-full h-[80vh] relative z-0 overflow-hidden footer'>
      <img src={FooterImg} alt="footer" className='absolute w-full h-full top-0 left-0 z-[-1] translate-y-full footer__image'/>
      <div className='absolute top-1/2 -translate-y-1/2 left-20 text-white'>
          <div className='inline-block py-4 px-2 border-b-2 border-white'>
          <h1 className='text-4xl'>Have an idea? <br /> Tell us about it.</h1>
          </div>
          <p className='mt-32'>Lorem ipsum is a dummy text Lorem ipsum is a dummy text</p>    
      </div>
      
  </div>;
}

export default Footer;
