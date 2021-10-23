import React from "react"

const HomeContent = ({ title, description, logo }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-5 mb-4 sm:mt-20 md:mt-8">
      <div className="relative">
        <div className="flex flex-row font-bold font-heading text-hmif-yellow leading-none text-xl max-w-xl md:text-3xl">
          {/* <div className="mr-2">{logo}</div>  */}
          {title}
          {/* <div className="ml-3">{logo}</div> */}
        </div>
        <div
          className="absolute left-0 w-full border-2 border-hmif-yellow"
          style={{ content: "", bottom: "-10px" }}
        />
      </div>
      <div className="mt-4">
        <div className="text-lg font-sans text-left text-center max-w-xl text-white">
          {description}
        </div>
      </div>
    </div>
  )
}

export default HomeContent
