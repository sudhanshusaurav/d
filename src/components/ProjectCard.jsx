import React, { useEffect } from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function ProjectCard({image, label, heading, category}) {
    useEffect(() => {
      let tl = gsap.timeline()
      tl.to(`.project__image__${label}`,{y:-160})

      ScrollTrigger.create({
          animation: tl,
          trigger: `.${label}`,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 3,
      })
    
      
    }, []);
    
  return <div className='my-8 p-8'>
      <div className={`w-full h-[100vh] overflow-hidden hoverable hoverable-project ${label}`}>
        <img src={image} alt={label} className={`w-full h-full object-cover scale-[1.4] translate-y-60 project__image__${label}`} />
      </div>
      <div className='text-center p-8'>
        <p className='text-black/60'>{label}</p>
        <h2 className='text-3xl my-2 tracking-wider'>{heading}</h2>
        <p className='text-black/60'>{category}</p>
      </div>
  </div>;
}

export default ProjectCard;
