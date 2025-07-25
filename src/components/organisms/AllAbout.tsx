import React from 'react';

const AllAbout = () => {
  return (
    <div className="flex flex-col px-10 pt-10 pb-5 justify-around md:flex-row md:py-5 md:px-16 xl:mx-auto xl:px-24 xl:max-w-[1280px] w-full relative">
      <div className="absolute inset-x-16 xl:inset-x-24 top-0 border-t border-solid border-t-lightGray opacity-60"></div>
      <div className="flex-[0.3 1 30%] flex flex-col">
        <div className="flex flex-col mb-10">
          <h2 className="text-xl font-tokyo text-textBlack mb-2">
            Work Experience
          </h2>
          <div className="flex flex-col mb-3">
            <h3 className="text-base font-medium font-raleway">
              FullStack Engineer
            </h3>
            <div className="text-base font-light font-raleway">
              QSStudio, Sydney
            </div>
            <div className="text-base font-light font-raleway italic">
              since May 2024
            </div>
          </div>
          <div className="flex flex-col mb-3">
            <h3 className="text-base font-medium font-raleway">UX Engineer</h3>
            <div className="text-base font-light font-raleway">
              Nomura Research Institute Indonesia, Jakarta
            </div>
            <div className="text-base font-light font-raleway italic">
              October 2021 - January 2024 (&gt;2 years)
            </div>
          </div>
          <div className="flex flex-col mb-3">
            <h3 className="text-base font-medium font-raleway">
              Game Programmer Intern
            </h3>
            <div className="text-base font-light font-raleway">
              Agate Games Studio
            </div>
            <div className="text-base font-light font-raleway italic">2018</div>
          </div>
        </div>

        <div className="flex flex-col mb-10">
          <h2 className="text-xl font-tokyo text-textBlack mb-2">Education</h2>
          <div className="flex flex-col mb-3">
            <h3 className="text-base font-medium font-raleway">
              University of Technology Sydney
            </h3>
            <div className="text-base font-light font-raleway">
              Master of Information Technology
            </div>
            <div className="text-base font-light font-raleway italic">
              Since February 2024 <br />
              (Expected Graduation: December 2025)
            </div>
          </div>
          <div className="flex flex-col mb-3">
            <h3 className="text-base font-medium font-raleway">
              Bandung Institue of Technology
            </h3>
            <div className="text-base font-light font-raleway">
              Bachelor of Science in Information Technology
            </div>
            <div className="text-base font-light font-raleway italic">
              July 2021
            </div>
          </div>
        </div>
      </div>

      <div className="flex-[0.3 1 30%] flex flex-col">
        <div className="flex flex-col mb-10">
          <h2 className="text-xl font-tokyo text-textBlack mb-2">Projects</h2>
          <div className="flex flex-col gap-3 mb-3">
            <div className="flex flex-col">
              <h3 className="text-base font-medium font-raleway">
                AI Powered Beauty Assistant Mobile App
              </h3>
              <div className="text-base font-light font-raleway">
                React Native, AWS CDK, Typescript, Supabase
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-base font-medium font-raleway">
                Petrol Finder & Price Tracker Mobile App
              </h3>
              <div className="text-base font-light font-raleway">
                React Native, Typescript, Supabase, MongoDB
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-base font-medium font-raleway">
                Food Stock Management App
              </h3>
              <div className="text-base font-light font-raleway">
                React Native, Typescript, Nativewind, Redux
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-base font-medium font-raleway">
                Softphone Feature for VR App
              </h3>
              <div className="text-base font-light font-raleway">
                React, Typescript, AWS Connect
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-base font-medium font-raleway">
                Finance & Investment Website
              </h3>
              <div className="text-base font-light font-raleway">
                Vue.js, CSS
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-base font-medium font-raleway">
                Producer-Consumer-Reseller Livestream Website
              </h3>
              <div className="text-base font-light font-raleway">
                React, Typescript, Tailwind CSS
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-base font-medium font-raleway">
                Qash Point-of-Sales System
              </h3>
              <div className="text-base font-light font-raleway">
                React, Typescript, Redux, Sass
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-base font-medium font-raleway">
                Lawassier. Website
              </h3>
              <div className="text-base font-light font-raleway">
                Wordpress development (Local, PHP, JS, HTML/CSS)
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-base font-medium font-raleway">
                The Dentists Website
              </h3>
              <div className="text-base font-light font-raleway">
                Wordpress development (Local, PHP, JS, HTML/CSS, Tailpress)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-[0.3 1 30%] flex flex-col">
        <div className="flex flex-col mb-10">
          <h2 className="text-xl font-tokyo text-textBlack mb-2">
            Technical Skills
          </h2>
          <div className="flex flex-col mb-3">
            <h3 className="text-base font-medium font-raleway">
              Web Development
            </h3>
            <div className="flex flex-col text-base font-light font-raleway">
              React
              <br />
              Vue.js
              <br />
              Wordpress
              <br />
              (PHP)
              <br />
              Redux
              <br />
              Tailwind
              <br />
              CSS
              <br />
              Sass
            </div>
          </div>
          <div className="flex flex-col mb-3">
            <h3 className="text-base font-medium font-raleway">
              Mobile/App Development
            </h3>
            <div className="flex flex-col text-base font-light font-raleway">
              React Native
              <br />
              Android Studio
              <br />
              Unity
              <br />
              Nativewind
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAbout;
