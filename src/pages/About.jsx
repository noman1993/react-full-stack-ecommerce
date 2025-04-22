import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum
            tempora non molestias eaque natus dignissimos, vero minus,
            consequuntur, sapiente cum ullam autem optio suscipit
            exercitationem. Distinctio, in.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            quod magnam accusantium in repudiandae expedita suscipit eaque
            placeat? Iure enim officia dignissimos temporibus. Minus voluptates
            obcaecati, commodi similique expedita vitae!
          </p>
          <b className="text-gray-800">OUR MISSION</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            reiciendis harum, culpa voluptatem iusto consectetur id eligendi qui
            recusandae quisquam?
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assuarance:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum sunt perspiciatis qui laudantium porro.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum sunt perspiciatis qui laudantium porro.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional; customer service:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum sunt perspiciatis qui laudantium porro.</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
