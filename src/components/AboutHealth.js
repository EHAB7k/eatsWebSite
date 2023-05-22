import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AboutHealthCard from "./AboutHealthCard.js"

import javascript from "../assets/skills/javascript.svg"
import bash from "../assets/skills/bash.svg"
import kvm from "../assets/skills/kvm.svg"
import linux from "../assets/skills/linux.svg"
import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"
import tailwind from "../assets/skills/tailwind.svg"
import mikrotik from "../assets/skills/mikrotik.svg"
import kubernetes from "../assets/skills/kubernetes.svg"
import ansible from "../assets/skills/ansible.svg"
import windows from "../assets/skills/windows.svg"
import react from "../assets/skills/react.svg"
import cisco from "../assets/skills/cisco.svg"
import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import gitlab from "../assets/skills/gitlab.svg"
import swift from "../assets/skills/swift-vertical.svg"
import hr from "../assets/curve-hr.svg"
import eats from '../assets/eats-logorbg.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, } from '@fortawesome/free-solid-svg-icons';
import "./ArrowTest.css"
export default function AboutHealth() {

    const cardData = {
        titleFirst: 'الوقاية من ',
        titleHighlight: 'السكري',
        items: ['مارس الرياضة', 'لاتأكل الاكل الغير صحي', 'قياس السكر بعد الاكل']
      };

      const cardData2 = {
        titleFirst: 'الوقاية من ',
        titleHighlight: 'السمنه',
        items: ['مارس الرياضة', 'لاتأكل الاكل الغير صحي', 'قياس السكر بعد الاكل']
      };

    const SampleNextArrow = (props) => {
        const { className, onClick } = props
        return (
            <div 
                className={className}
                onClick={onClick}
            >
                <FontAwesomeIcon
                    icon={faAngleRight}
                    color="#434343"
                    size="2x"
                />
            </div>
        );
    }

    const SamplePrevArrow = (props) => {
        const { className, onClick } = props
        return (
            <div 
                className={className}
                onClick={onClick}
            >
                <FontAwesomeIcon
                    icon={faAngleLeft}
                    color="#434343"
                    size="2x"
                />
            </div>
        );
    }


    const settings = {
        dots: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 1,
        speed: 2000,
        slidesToScroll: 1,
           nextArrow: <SampleNextArrow/>,
          prevArrow: <SamplePrevArrow/>
      };

      

    return (
        <div id="skills" className="mt-4 text-white ">
            <div dir='rtl'>
            <h1 className="text-2xl text-black dark:text-white font-bold">اهتم بصحتك</h1>
            <p className="font-light text-gray-400">نصائح للاهتمام ب صحتك</p>
            </div>
            <div className="mt-4">
                <Slider {...settings } className="sm:w-1/2 md:w-3/4 m-auto">
                <AboutHealthCard {...cardData} />
                <AboutHealthCard {...cardData2} />
                {/* <SkillCard name="express" experience="1 years" img={express} /> */}
                {/* <SkillCard name="gitlab" experience="1 years" img={gitlab} /> */}
                </Slider>
            </div>
            {/* <img src={hr} className="w-full mt-8 md:h-3" alt="hr" /> */}
        </div>
    )
}
