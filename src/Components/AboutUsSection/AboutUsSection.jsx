// import React from 'react'

const AboutUsSection = () => {
  return (
    <div className="pb-[5%]">
        <h1 className="text-white text-center pb-[2%] text-3xl font-mono tracking-wider">ABOUT US</h1>
        <div className="flex gap-x-8 b text-white items-center">
            <div className="w-64 h-64 rounded-full bg-zinc-800">   </div>
            <div className=" py-7 space-y-4 w-[55%]">
                <h1 className="text-4xl font-sans tracking-wider font-medium">SHIVAM PAISAL</h1>
                <p className="text-2xl" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro q</p>
                <p className="text-lg leading-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis velit, vitae ducimus sequi doloribus esse, aut ex aspernatur tempore harum placeat. Impedit necessitatibus veritatis fugiat distinctio quae, repellat provident!</p>
            </div>
        </div>
    </div>
    
  );
};

export default AboutUsSection;
