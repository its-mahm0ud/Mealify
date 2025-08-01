import img1 from "../src/assets/hero-img.png";
import React, { use, useEffect } from 'react'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

export default function Home() {
    function animationOfElement() {
        const element = document.getElementById("element");

        if (element) {
            element.addEventListener("mouseenter", () => {
                gsap.fromTo(
                    element,
                    { x: -5 },
                    {
                        x: 5,
                        duration: 0.1,
                        repeat: 5,
                        yoyo: true,
                        ease: "power1.inOut",
                        clearProps: "x",
                    }
                );
            });
        }
    }


    function animationOfHeading() {
        gsap.registerPlugin(SplitText);

        gsap.set("h1", { opacity: 1 });

        let split = SplitText.create("#heading", { type: "chars" });
        //now animate each character into place from 20px below, fading in:
        gsap.from(split.chars, {
            y: 20,
            autoAlpha: 0,
            stagger: 0.05
        });
    }
    useEffect(() => {
        animationOfHeading();
        animationOfElement();

    }, []);
    

    return (
        <>
            <section className="bg-colorPrimary dark:bg-bgheroDark pb-16">
                <div className="container py-5">
                    <div className="flex flex-wrap justify-between">
                        <div className=" p-3 w-2/2 md:w-1/2 lg:w-1/2 flex flex-col justify-center items-start max-sm:order-2">
                            <h1 id="heading" className=" font-fontOfHeadings dark:text-white md:tracking-[1.7px] text-[55px] text-headOfSection opacity-0 max-sm:text-4xl max-sm:tracking-[.6px] max-sm:text-center max-sm:w-3/4 max-sm:m-auto font-medium">Enjoy Your Healthy  Delicious Food</h1>
                            <p className="  dark:text-white py-5 text-pharagraph max-sm:text-center">Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
                            <button className=" dark:bg-colorInDark dark:hover:bg-colorHoverDark dark:text-black bg-bgAll text-[15px] max-sm:m-auto text-white px-5 py-2 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl hover:bg-bgHover transition-all ">Book a Table</button>
                        </div>
                        <div id="element" className=" p-3 w-2/2 md:w-1/2 lg:w-1/2 max-sm:order-1">
                            <img className="w-3/4 ms-auto max-sm:m-auto" src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
