import Link from "next/link";
import Image from "next/image";
import {HiMenuAlt1, HiX} from "react-icons/hi"

 const NAV = [
     {  key: 4,
      href: "#",
      name: "Services",
      submenus: [
        {
          key: 1,
          heading: "Service 1",
          description: "Discover the Transformative Potential of Artificial Intelligence: Empower Your Business with Smart Solutions and Stay Ahead of the Competition",

        },
        {
          key: 2,
          heading: "Service 2",
          description: "Description of Service 2",
          
          heading2: "Service 2",
          description2: "Description of Service 2",

           heading3: "Service 3",
          description3: "Description of Service 2",

           heading4: "Service 4",
          description4: "Description of Service 2",
          

        },
      ],
    },
    {
      key: 5,
      href: "#",
      name: "Contact",
      submenus: [
        {
          key: 3,
          heading: "Contact 1",
          description: "Description of Contact 1",
          subsubmenus: [
            { key: 5, brief: "Brief 5", link: "#" },
            { key: 6, brief: "Brief 6", link: "#" },
          ],
        },
        {
          key: 4,
          heading: "Contact 2",
          description: "Description of Contact 2",
          subsubmenus: [
            { key: 7, brief: "Brief 7", link: "#" },
            { key: 8, brief: "Brief 8", link: "#" },
          ],
        },
      ],
    },
        {
      key: 6,
      href: "about",
      name: "About",
      hid:"max-md:hidden",
          submenus: [
     
        ]
    }
  ];

const MegaMenu = () => {
  return (
   
      <nav className="bg-white fixed w-full top-0 left-0 z-20" >
        <div className="container  mx-auto flex items-center justify-between  px-5 sm:px-10  ">
          <Link  href="/">
        <Image src="/Logo-Beauroi.png"  height={60} width={110} alt="Logo-Beauroi"/>
      </Link>
      <div className="flex  items-center justify-center ">
          <ul className="flex">
            {NAV.map((nav) => (
              <li key={nav.key} className="hoverable   hover:underline">
                <a href={nav.href} className={nav.hid+"  relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:font-extrabold hover:underline"}>
                  {nav.name}
                </a>
                {nav.submenus.length > 0 && (
                  <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl   bg-gradient-to-tl from-indigo-900 via-gray-700 to-blue-900 border-gray">
                    <div className="container mx-auto w-full flex flex-wrap mx-2">
                      {nav.submenus.map((submenu) => (
                        <ul key={submenu.key} className="px-4 w-full sm:w-1/2 lg:w-1/3  pb-6 pt-6 lg:pt-3">
                          <div className="flex items-center">
                            <h3 className="font-bold text-xl text-white text-bold mb-2">{submenu.heading}</h3>
                          </div>
                          <p className="text-gray-50 text-sm">{submenu.description}</p>

                            <div className="flex pt-6 items-center">
                            <h3 className="font-bold text-xl text-gray-50 text-bold mb-2">{submenu.heading2}</h3>
                          </div>
                          <p className="text-gray-50 text-sm">{submenu.description2}</p>

                           <div className="flex pt-6 items-center">
                            <h3 className="font-bold text-xl text-gray-50 text-bold mb-2">{submenu.heading3}</h3>
                          </div>
                          <p className="text-gray-50 text-sm">{submenu.description3}</p>

                           <div className="flex pt-6 items-center">
                            <h3 className="font-bold text-xl text-gray-50 text-bold mb-2">{submenu.heading4}</h3>
                          </div>
                          <p className="text-gray-50 text-sm">{submenu.description4}</p>

                        </ul>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
      </div>
     <div className="flex">
                    <button className="px-3 py-2 text-sm text-white border border-solid hover:bg-blue-400 rounded-md transition duration-300 bg-indigo-700 border-gray">
                  Sign Up
                </button>
    <HiMenuAlt1 className="mr-8 ml-8 text-3xl md:hidden cursor-pointer" />
  </div> 
        </div>
      </nav>
    
  );
};

export default MegaMenu;
