import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import P1 from '../assets/WP41.png'
import P2 from '../assets/Rectangle20.png'
import P3 from '../assets/Rectangle3.png'
import P4 from '../assets/Rectangle4.png'

function Featured() {
    useEffect(() => {
      const btn = document.querySelector('.btn-primary')
      const btnBg = document.querySelector('.btn-primary-bg')

      btn.addEventListener('mousemove', function(e){

        const posX = (window.innerWidth - e.clientX)/10
        const posY = (window.innerHeight - e.clientY)/10

        btn.style.transform = `translateX(${posX-50}px) translateY(${posY-10}px)`
      })

      btn.addEventListener('mouseenter', function(){
        btnBg.setAttribute('style', 'height:100%; top:0; bottom:unset;')
      })

      btn.addEventListener('mouseleave', function(){
        btn.style.transform = `translateX(0px) translateY(0px)`
        btnBg.setAttribute('style', 'height:0; top:unset; bottom:0;')
    })
    
    }, []);
    
  return <div className='w-[90%] mx-auto my-20'>
      <h2 className='text-2xl'>Featured Projects</h2>
      <div className='flex flex-col lg:flex-row gap-8'>
        <div className="flex-1">
            <ProjectCard image={P1} label='DreamFolks' heading='Amazing lounges for accomodation' category='App' color='#FFF9E3'/>
            <ProjectCard image={P2} label='Fyp' heading='Growing financially independent teens' category='Branding | App | Website' color='#FFF9E3' />
        </div>
        <div className="flex-1 mt-40">
            <ProjectCard image={P3}  label='Barquillo' heading='Amazing lounges for accomodation' category='UX design, UI design' color='#FFF9E3'/>
            <ProjectCard image={P4} label='Barquilllo' heading='Amazing lounges for accomodation' category='UX design, UI design' color='#FFF9E3'/>
        </div>
      </div>
      <div className='text-center'>
        <button className='btn-primary hoverable' data-text="View all projects">View all projects <span className='btn-primary-bg'></span></button>
      </div>
  </div>;
}

export default Featured;
