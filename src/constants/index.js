import React from "react"
import { GiTrophy } from "react-icons/gi"
import { IoCodeSlash, IoStorefront } from "react-icons/io5"
import { FaMobileAlt } from "react-icons/fa"
import { MdAnalytics } from "react-icons/md"
import { RiDatabase2Line, RiSlideshowFill } from "react-icons/ri"
import { HiPresentationChartBar } from "react-icons/hi"
const CONSTANTS = {
  careerPaths: [
    {
      link: "/backend-developer",
      displayName: "Backend Developer",
      icon: <IoCodeSlash className="field-icon" />,
    },
    {
      link: "/frontend-developer",
      displayName: "Frontend Developer",
      icon: <IoStorefront className="field-icon" />,
    },
    {
      link: "/mobile-developer",
      displayName: "Mobile Developer",
      icon: <FaMobileAlt className="field-icon" />,
    },
    {
      link: "/data-scientist",
      displayName: "Data Scientist",
      icon: <RiDatabase2Line className="field-icon" />,
    },
    {
      link: "/data-analyst",
      displayName: "Data Analyst",
      icon: <MdAnalytics className="field-icon" />,
    },
    {
      link: "/product-management",
      displayName: "Product Management",
      icon: <HiPresentationChartBar className="field-icon" />,
    },
    {
      link: "/tech-consultant",
      displayName: "Tech Consultant",
      icon: <RiSlideshowFill className="field-icon" />,
    },
  ],
  homeContents: [
    {
      title: "HMIF Career",
      description:
        "Karir adalah keseharian kami. Menjadi yang terbaik adalah minat kami. Di HMIF, kami mau Anda untuk berada di puncak dari setiap aspek karir yang memungkinkan.",
      logo: <GiTrophy />,
    },
    // {
    //   title: `Get The Information!`,
    //   description: (
    //     <div>
    //       Bagi kamu para pencari informasi lomba, jangan sampai ketinggalan info
    //       dengan informasi lomba yang direkap di{" "}
    //       <b>
    //         <a href="https://bit.ly/comp-hmif" rel="noreferrer" target="_blank">
    //           bit.ly/comp-hmif
    //         </a>
    //       </b>
    //     </div>
    //   ),
    // },
    {
      title: "Learn From The Experts!",
      description: (
        <div>
          Ingin tau cerita para pemagang HMIF? <br /> langsung saja cek{" "}
          <b>
            <a
              href="https://medium.com/hmif-itb/tagged/internships"
              rel="noreferrer"
              target="_blank"
            >
              Medium HMIF Tech
            </a>
          </b>{" "}
          kita!
        </div>
      ),
    },
  ],
  information: {
    "/competitive-programming": {
      contact: {
        name: "Jauhar Wibisono (IF 2019)",
        number: "087732921890",
        line: "wibeng",
      },
      links: [
        {
          name: "Github CP ITB",
          link: "https://github.com/cp-itb",
        },
        {
          name: "Contest CP ITB",
          link: "https://cp-itb.github.io/contests",
        },
        {
          name: "Blog CP ITB",
          link: "https://cp-itb.github.io/blog",
        },
        {
          name: "Tim CP ITB",
          link: "https://bit.ly/timCPITB",
        },
      ],
    },
    "/ui-ux": {
      contact: {
        name: "Hera Shafira (IF 2019)",
        number: "08987476296",
        line: "herash",
      },
      links: [],
    },
    "/data-science": {
      contact: {
        name: "Dionisius Darryl Hermansyah (IF 2019)",
        number: "085697514791",
        line: "dionisiusdh",
      },
      links: [
        {
          name: "Github DS ITB",
          link: "https://github.com/ds-itb",
        },
      ],
    },
    "/capture-the-flag": {
      contact: {
        name: "Ariya Adinatha (IF 2019)",
        number: "081931031676",
        line: "aadinatha21",
      },
      links: [
        {
          name: "Github CTF ITB",
          link: "https://github.com/ctf-itb",
        },
      ],
    },
    "/game-development": {
      contact: {
        name: "Muhammad Furqon (IF 2019)",
        number: "081394643922",
        line: "mfurqon2001",
      },
      links: [],
    },
  },
}

export default CONSTANTS
