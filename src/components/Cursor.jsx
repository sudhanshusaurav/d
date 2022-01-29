import React, {useEffect} from 'react'

function Cursor() {
    useEffect(() => {
        const cursorBall = document.querySelector('.cursor__ball');
        const hoverables = document.querySelectorAll('.hoverable');
        const hoverableProjects = document.querySelectorAll('.hoverable-project');
        const cursorText = document.querySelector('.cursor-text')
        
        document.body.addEventListener('mousemove', onMouseMove);

        hoverableProjects.forEach(project => {
            project.addEventListener('mouseenter',function () {
                    cursorBall.classList.remove('scale-[.1]', 'opacity-100')
                    cursorBall.classList.add('scale-[1]', 'opacity-50')
                    cursorText.classList.remove('hidden')
                    cursorText.classList.add('inline-block')

            })
            project.addEventListener('mouseleave', function () {
                    cursorBall.classList.remove('scale-[1]', 'opacity-50')
                    cursorBall.classList.add('scale-[.1]', 'opacity-100')
                    cursorText.classList.remove('inline-block')
                    cursorText.classList.add('hidden')
            }) 
        })

        hoverables.forEach(hoverable => {
            hoverable.addEventListener('mouseenter',function () {
                    cursorBall.classList.remove('scale-[.1]')
                    cursorBall.classList.add('scale-0')
            })
            hoverable.addEventListener('mouseleave', function () {
                    cursorBall.classList.remove('scale-0')
                    cursorBall.classList.add('scale-[.1]')
            }) 
        });

        function onMouseMove(e) {
            if (e.clientX < 5 || e.clientX > (window.innerWidth-5) || e.clientY < 5 || e.clientY > (window.innerHeight -5)) {
                cursorBall.classList.remove('opacity-100')
                cursorBall.classList.add('opacity-0')
            }else{
                cursorBall.classList.remove('opacity-0')
                cursorBall.classList.add('opacity-100')
                cursorBall.setAttribute("style", "top: "+(e.clientY - 50)+"px; left: "+(e.clientX - 50)+"px;")
            }
        }
    })
    return (
        <div className="cursor opacity-0 lg:opacity-100">
            <div className="transition-[transform] scale-[.1] opacity-0 duration-150 ease-linear bg-black cursor__ball">
                <p className='text-white cursor-text leading-none hidden'>view <br /> case</p>
            </div>
        </div>
    )
}

export default Cursor
