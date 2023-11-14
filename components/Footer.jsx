import { FaFacebook, FaDiscord, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  // Sample data for each category
  const categories = [
      // {
      
      
    //    id:1,
    //   links: [
    //   {  comp:<div><Link  href="/"><Image src="/Logo-Beauroi.png"  height={60} width={110} alt="Logo-Beauroi"/>
    //   									</Link>
    //   									 <p class="text-gray-800 py-3 sm:text-sm dark:text-gray-400">We specialize in delivering cutting-edge solutions that empower businesses to harness the full potential of the satisfaction index is almost 100%.
    //            
    //           </p></div> },
    //     
    //   ],
    // },
   {
      title: "Company",
      id:1,
      links: [
      
        { text: "Brand Center", url: "#" },
        { text: "Blog", url: "#" },
        { text: "About", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Brand Center", url: "#" },

      ],
    },
    {
      title: "Company",
      id:2,
      links: [
        { text: "About", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Brand Center", url: "#" },
        { text: "Blog", url: "#" },
        { text: "About", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Brand Center", url: "#" },

      ],
    },
    {
      title: "Help center",
      id:3,
      links: [
        { text: "Discord Server", url: "#" },
        { text: "Twitter", url: "#" },
        { text: "Facebook", url: "#" },
        { text: "Contact Us", url: "#" },
      ],
    },
    {
      title: "Legal",
      id:4,
      links: [
        { text: "Privacy Policy", url: "#" },
        { text: "Licensing", url: "#" },
        { text: "Terms & Conditions", url: "#" },
      ],
    },
    
     
  ];

  // Sample data for social media links
  const socialMediaLinks = [
    { icon: "facebook", url: "#" },
    { icon: "discord", url: "#" },
    { icon: "twitter", url: "#" },
    { icon: "github", url: "#" },
    { icon: "dribbble", url: "#" },
  ];

  // Function to get the SVG path based on the icon name
  // Function to get the SVG icon component based on the icon name
  const getIconPath = (icon) => {
    switch (icon) {
      case 'facebook':
        return <FaFacebook />;
      case 'discord':
        return <FaDiscord />;
      case 'twitter':
        return <FaTwitter />;
      case 'github':
        return <FaGithub />;
      case 'dribbble':
        return <FaDribbble />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 px-4 pt-12 "  id="footerSection">
    <div className="container mx-auto flex pb-20  py-16">
    <div className="sm:w-1/4 sm:pl-1"><Link  href="/"><Image src="/Logo-Beauroi.png"  height={60} width={110} alt="Logo-Beauroi"/>
    									</Link>
       									 <p class="text-gray-700 py-3 text-xs dark:text-gray-400">We specialize in delivering cutting-edge solutions that empower businesses to harness the full potential of the satisfaction index is almost 100%.
                
               </p></div>
    <div className=" sm:px-20 pb-2   md:grid md:grid-cols-2 lg:grid-cols-4 text-gray-90 md:gap-10 md:space-y-0">
      {categories.map((category) => (
        <div key={category.id}>
          <h2 className="mb-4 text-md font-bold text-gray-900 uppercase dark:text-white">{category.title}</h2>

          <ul className="text-gray-700  dark:text-gray-400 font-semibold">
            {category.links.map((link, index) => (
              <li key={index} className="mb-2">
                <a href={link.url} className="hover:underline">{link.text}</a>
                {link.comp}
              </li>
            ))}
          </ul>
        </div>
      ))}
</div>
</div>
      {/* Social media links */}
      <div className="px-4 py-6 p-10 sm:px-20 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm  text-gray-900 dark:text-gray-300 sm:text-center">© 2023 <a href="https://beauroi.com/">Beauroi™</a>. All Rights Reserved.</span>
        <div className="flex mt-4 px-20 space-x-5 sm:justify-center md:mt-0">
          {socialMediaLinks.map((socialLink, index) => (
            <a key={index} href={socialLink.url} className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                {getIconPath(socialLink.icon)}
              </svg>
              <span className="sr-only">{socialLink.icon} account</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;