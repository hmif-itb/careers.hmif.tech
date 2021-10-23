import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import HomeContent from "../components/HomeContent"
import CONSTANTS from "../constants"

const HomeLayout = () => {
  const { careerPaths, homeContents } = CONSTANTS

  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        <Header siteTitle={"Tech Career Development HMIF"} />
        {homeContents.map(({ title, description, logo }, idx) => {
          return (
            <HomeContent
              title={title}
              description={description}
              logo={logo}
              key={idx}
            />
          )
        })}
        <div className="flex flex-col justify-center items-center w-full mt-5 pb-4 sm:mt-20 md:mt-8">
          <div className="relative">
            <div className="flex flex-row font-bold font-heading text-hmif-yellow leading-none text-xl max-w-xl md:text-3xl">
              Explore These Fields
            </div>
            <div
              className="absolute left-0 w-full border-2 border-hmif-yellow"
              style={{ content: "", bottom: "-10px" }}
            />
          </div>
          <div className="mt-4">
            <div className="text-lg font-sans text-left text-center text-white">
              <div>Apa saja sih bidang-bidang Informatika di industri?</div>
              <div className="container mx-auto px-10 md:px-10">
                <div
                  id="explore"
                  className="flex flex-col flex-wrap md:flex-row justify-between py-3"
                >
                  {careerPaths.map(({ link, displayName, icon }) => {
                    return (
                      <Link
                        to={`/path${link}`}
                        key={displayName}
                        className="hover-no-underline"
                      >
                        <div className="relative flex flex-col items-center p-3 cursor-pointer">
                          <div className="w-9/12 grid place-items-center">
                            {icon}
                          </div>
                          <div className="text-hmif-yellow font-sans font-bold text-center text-lg">
                            {displayName}
                          </div>
                        </div>
                        {/* <div className="flex flex-col items-center p-3 cursor-pointer">
                          <div className="w-80">{icon}</div>
                          <div className="text-hmif-yellow font-sans font-bold text-center text-lg">
                            {displayName}
                          </div>
                        </div> */}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomeLayout
