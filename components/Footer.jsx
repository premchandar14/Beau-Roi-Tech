// import Link from "next/link";
import Image from "next/image";
const Footer = () => {
 return (
<footer className="pt-8 sm:pt-20   bg-gray-900">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-evenly">
      <div className="mb-6 md:mb-0">
        <a href="https://beauroi.com/" className="flex items-center">
          <img
            src="https://beauroi.com/img/Logo-Beauroi.png"
            className="h-8 me-3"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            
          </span>
        </a>
      </div>
      <div className="grid xs:grid-cols-3 grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        
        <div>
          <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
            Resources
          </h2>
          <ul className="text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                services
              </a>
            </li>
            <li>
              <a href="/about" className="decoration-black hover:underline">
                about
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
            Follow us
          </h2>
          <ul className="text-gray-400 font-medium">
            <li className="mb-4">
              <a
                href="#"
                className="hover:underline "
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:underline"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
            Legal
          </h2>
          <ul className="text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm  sm:text-center text-gray-400">
        © 2024{" "}
        <a href="https://beauroi.com/" className="hover:underline">
          beauroi™
        </a>
        . All Rights Reserved.
      </span>

      <div className="mt-[18px] flex gap-4">
  <a className="hover:scale-110" target="_blank" href="https://www.facebook.com/profile.php?id=61556119875955">
    <img
      alt="facebook icon"
      loading="lazy"
      width={36}
      height={36}
      decoding="async"
      data-nimg={1}
      style={{ color: "transparent" }}
      src="https://www.englishyaari.com/img/facebook.svg"
    />
  </a>
  <a className="hover:scale-110" target="_blank" href="https://www.linkedin.com/company/beauroi/
">
    <img
      alt="linkdin icon"
      loading="lazy"
      width={36}
      height={36}
      decoding="async"
      data-nimg={1}
      style={{ color: "transparent" }}
      src="https://www.englishyaari.com/img/linkdin.svg"
    />
  </a>
  <a className="hover:scale-110" target="_blank" href="https://www.instagram.com/beau_.roi/">
    <img
      alt="instagram icon"
      loading="lazy"
      width={36}
      height={36}
      decoding="async"
      data-nimg={1}
      style={{ color: "transparent" }}
      src="https://www.englishyaari.com/img/instagram1.svg"
    />
  </a>
  <a className="hover:scale-110"  href="https://www.twitter.com/Beau_Roi_">
    <img
      alt="twitter icon"
      loading="lazy"
      width={36}
      height={36}
      decoding="async"
      data-nimg={1}
      style={{ color: "transparent" }}
      src="https://www.englishyaari.com/img/twitter.svg"
    />
  </a>
  <a
    className="hover:scale-110"
    target="_blank"
    href="https://www.youtube.com/@BeauRoi"
  >
    <img
      alt="youtube icon"
      loading="lazy"
      width={36}
      height={36}
      decoding="async"
      data-nimg={1}
      style={{ color: "transparent" }}
      src="https://www.englishyaari.com/img/youtube.svg"
    />
  </a>
</div>

    </div>
  </div>
</footer>
  );
};

export default Footer;
