import React, {useEffect} from 'react'

function Cursor() {
    useEffect(() => {
        const $bigBall = document.querySelector('.cursor__ball');
        const $hoverables = document.querySelectorAll('.hoverable');
        const cursor = document.querySelector('.cursor')

        document.body.addEventListener('mousemove', onMouseMove);

        $hoverables.forEach(hoverable => {
            hoverable.addEventListener('mouseenter',function () {
                if ($bigBall.classList.contains('scale-[1]')) {
                    $bigBall.classList.remove('scale-[1]', 'opacity-100')
                }
                    $bigBall.classList.add('scale-[7]', 'opacity-50')
            })
            hoverable.addEventListener('mouseleave', function () {
                    $bigBall.classList.remove('scale-[7]', 'opacity-50')
                    $bigBall.classList.add('scale-[1]', 'opacity-100')
            }) 
        });

        function onMouseMove(e) {
            if (e.clientX < 5 || e.clientX > (window.innerWidth-5) || e.clientY < 5 || e.clientY > (window.innerHeight -5)) {
                cursor.classList.remove('opacity-100')
            }else{
                $bigBall.setAttribute("style", "top: "+(e.clientY - 7)+"px; left: "+(e.clientX - 7)+"px;")
            }
        }
    })
    return (
        <div className="cursor">
            <div className="transition-all duration-150 ease-linear cursor__ball">
                
            </div>
            <div className="transition-all duration-150 ease-linear cursor__ball--inner">
                
            </div>
        </div>
    )
}

export default Cursor
