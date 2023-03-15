import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from 'react-icons/ai'
import Link from "next/link";

function Footer () {
    return (
      <footer className="bg-gradient-to-r from-slate-400 to-slate-600 text-center  lg:text-left">
    <div className="flex items-center justify-center border-b-2 p-3  lg:justify-end">
    <div className="mr-12 hidden lg:block">
      <p className="text-yellow-500">Stay in contact with us:</p>
    </div>
    <div className="flex justify-center text-yellow-500">
    <a href="https://twitter.com/?lang=en" target="_blank" className="mx-2 hover:scale-125 duration-300">
            <BsTwitter size={20} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" className="mx-2 hover:scale-125 duration-300">
            <BsFacebook size={20} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="mx-2 hover:scale-125 duration-300">
            <BsInstagram size={20} />
          </a>
          <a href="mailto:yourlawyercompany@gmail.com" target="_blank" className="mx-2 hover:scale-125 duration-300">
            <AiOutlineMail size={20} />
          </a>
    </div>
  </div>
  <div className="mx-6 py-6 text-center md:text-left">
    <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3">
      <div className="">
        <h6 className="mb-4 flex items-center justify-center font-semibold md:justify-start text-yellow-500"> Your Company Name
        </h6>
        <p className="md:w-56 text-white">
        At [Your Company Name], we believe in justice for all and are passionate about advocating for our clients' rights.
        </p>
      </div>
      <div className="text-white">
        <h6 className="mb-3 flex justify-center font-semibold md:justify-start text-yellow-500">
          Useful links
        </h6>
        <p className="mb-3">
          <Link href="/#home">Home</Link>
        </p>
        <p className="mb-3">
          <Link href="/#services">Services</Link>
        </p>
        <p className="mb-3">
          <Link href="/#attorneys">Attorneys</Link>
        </p>
        <p className="mb-3">
          <a href="#!">Privacy Policy</a>
        </p>
        <p>
          <a href="#!">Terms and Conditions</a>
        </p>
      </div>
      <div className="text-white">
        <h6 className="mb-4 flex justify-center font-semibold md:justify-start text-yellow-500"> Contact
        </h6>
        <p className="mb-4 flex items-center justify-center md:justify-start">
        1234 1st Ave<br/>Seattle, WA 98101
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start"> + 206 777 8888
        </p>
        <p className="flex items-center justify-center md:justify-start"> + 206 555 3333
        </p>
      </div>
    </div>
  </div>
  <hr className="w-1/2 mx-auto h-0.5 bg-white"></hr>
      <div className="bg-gradient-to-r from-slate-400 to-slate-600 pt-2 pb-2 text-center text-yellow-500"> © 2023 Copyright: Bartosz Jarzyło
      </div>
</footer>
  );
};

export default Footer;