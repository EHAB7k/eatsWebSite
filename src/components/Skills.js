import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SkillCard from './SkillCard.js'

import javascript from '../assets/skills/javascript.svg'
import bash from '../assets/skills/bash.svg'
import kvm from '../assets/skills/kvm.svg'
import linux from '../assets/skills/linux.svg'
import python from '../assets/skills/python.svg'
import reactIcon from '../assets/skills/react.svg'
import tailwind from '../assets/skills/tailwind.svg'
import mikrotik from '../assets/skills/mikrotik.svg'
import kubernetes from '../assets/skills/kubernetes.svg'
import ansible from '../assets/skills/ansible.svg'
import windows from '../assets/skills/windows.svg'
import react from '../assets/skills/react.svg'
import cisco from '../assets/skills/cisco.svg'
import docker from '../assets/skills/docker.svg'
import git from '../assets/skills/git.svg'
import express from '../assets/skills/express.svg'
import gitlab from '../assets/skills/gitlab.svg'
import swift from '../assets/skills/swift-vertical.svg'
import hr from '../assets/curve-hr.svg'
import eats from '../assets/eats-logorbg.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './ArrowTest.css'
export default function Skills() {
    // function SamplePrevArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //       <div
    //         className={className}
    //         style={{ ...style, display: "block", backgroundColor:"black" }}
    //         onClick={onClick}
    //       />
    //     );
    //   }
    //   function SampleNextArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //       <div
    //         className={className}
    //         style={{ ...style, display: "block", background: "black" }}
    //         onClick={onClick}
    //       />
    //     );
    //   }

    const SampleNextArrow = (props) => {
        const { className, onClick } = props
        return (
            <div className={className} onClick={onClick}>
                <FontAwesomeIcon
                    icon={faAngleRight}
                    color="#434343"
                    size="2x"
                />
            </div>
        )
    }

    const SamplePrevArrow = (props) => {
        const { className, onClick } = props
        return (
            <div className={className} onClick={onClick}>
                <FontAwesomeIcon icon={faAngleLeft} color="#434343" size="2x" />
            </div>
        )
    }

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        speed: 2000,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    return (
        <div id="skills" className="mt-4 text-white ">
            <div dir="rtl">
                <h1 className="text-2xl text-black dark:text-white font-bold">
                    تحميل التطبيقات
                </h1>
                <p className="font-light text-gray-400">
                    للتحميل فقط اضغط على التطبيق المراد تحميلة
                </p>
            </div>
            <div className="mt-4">
                <Slider {...settings}>
                    <a href="https://play.google.com/store/apps/details?id=com.eatscustomer">
                        <SkillCard
                            name="ايتس العميل"
                            experience="اندرويد"
                            img={eats}
                        />
                    </a>
                    <a href="https://apps.apple.com/sa/app/eats-customer/id1576647819">
                        <SkillCard
                            name="ايتس العميل"
                            experience="ابل"
                            img={eats}
                        />
                    </a>

                    <a href=" https://play.google.com/store/apps/details?id=com.eatsrestaurant">
                        <SkillCard
                            name="ايتس المطعم"
                            experience="اندرويد"
                            img={eats}
                        />
                    </a>
                    <a href="https://apps.apple.com/us/app/eats-restaurant/id1576854640">
                        <SkillCard
                            name="ايتس المطعم"
                            experience="ابل"
                            img={eats}
                        />
                    </a>

                    <a href="https://play.google.com/store/apps/details?id=com.eatsdriver ">
                        <SkillCard
                            name="ايتس السائق"
                            experience="اندرويد"
                            img={eats}
                        />
                    </a>
                    <a href="https://apps.apple.com/us/app/eats-driver/id1576880595">
                        <SkillCard
                            name="ايتس السائق"
                            experience="ابل"
                            img={eats}
                        />
                    </a>
                    {/* <SkillCard name="express" experience="1 years" img={express} /> */}
                    {/* <SkillCard name="gitlab" experience="1 years" img={gitlab} /> */}
                </Slider>
            </div>
            {/* <img src={hr} className="w-full mt-8 md:h-3" alt="hr" /> */}
        </div>
    )
}
