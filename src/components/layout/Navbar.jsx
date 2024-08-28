import { useGSAP } from '@gsap/react';
import React, { useState } from 'react'
import { GiFastArrow } from 'react-icons/gi';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom'

export default function Navbar() {
    const headerRef = useRef();
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const { contextSafe } = useGSAP({scope: headerRef})
    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger);
            gsap.to("#nav", {
                backgroundColor: "230, 230, 230, 0.7",
                backdropFilter: "blur(4px)",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top top",
                    scrub: 1,
                }
            });
            gsap.to("#nav", {
                backgroundColor: "230, 230, 230, 0.7",
                backdropFilter: "blur(4px)",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top top",
                    scrub: 1,
                }
            })
            gsap.to("#logo", {
                display: "none",
                opacity: 0,
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top top",
                    scrub: 1,
                }
            })
            gsap.to("#nav", {
                maxWidth: "700px",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top top",
                    scrub: 1,
                }
            })
            gsap.fromTo(
                "#menu",
                {
                    opacity: 0,
                    display: "none",
                },
                {
                    opacity: 1,
                    display: "flex",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "100px",
                        scrub: 1,
                    }
                }
            )
        },
        {scope : headerRef}
    )
    const onOpenMenu = contextSafe(() => {
        const menuOpenTimeline = gsap.timeline({ paused: true })
        menuOpenTimeline.to("#menu", {borderRadius: "16px"})
        menuOpenTimeline.to("#menu", {width: "300px", duration: 1, height: "500px"}, ">")
        menuOpenTimeline.to("#menu ul", {display: "flex",}, ">")
        menuOpenTimeline.to("#menu ul li", {opacity: 1, y: 0, stagger: 0.2,}, ">")
        const menuCloseTimeline = gsap.timeline({ paused: true })
        menuCloseTimeline.to("#menu", {width: "auto", duration: 1, height: "auto"}, ">")
        menuCloseTimeline.to("#menu", {borderRadius: "100%"})
        if (!isOpenMenu) {
            setIsOpenMenu(true)
            menuOpenTimeline.play()
        } else {
            setIsOpenMenu(false)
            menuOpenTimeline.play()
        }
    })
  return (
    <header ref={headerRef} className='sticky top-0 py-9'>
        <nav id='nav' className='container backround-blur-md flex justify-between py-6 rounded-lg '>
            <ul className='font-medium flex items-center gap-12 uppercase text-2xl'>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/"}>About</Link>
                </li>
                <li>
                    <Link to={"/"}>Lorem</Link>
                </li>
            </ul>
            <GiFastArrow id='logo' />
            <h4>Let's Talk</h4>
        </nav>
        <div className='fixed flex border backdrop-blur flex-col gap-2 border-black rounded-full top-8 right-16' id='menu'>
            <div onClick={onOpenMenu} className='w-16 h-16 flex items-center justify-center' id="menuCircle">
                {!isOpenMenu ? <MdMenu size={32}/> : <MdClose size={32}/>}
            </div>
            <ul className='flex flex-col gap-1 px-4'>
                <li className='text-xl text-black font-semibold '>Home</li>
                <li className='text-xl text-black font-semibold '>About</li>
                <li className='text-xl text-black font-semibold '>Contact</li>
                <li className='text-xl text-black font-semibold '>More</li>
            </ul>
        </div>
    </header>
  )
}
