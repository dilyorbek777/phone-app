import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [click, SetClick] = useState(false)

  return (
    <nav className="max-w-[1728px] almarai  px-28 mx-auto bg-[#211F1F] text-white py-6 flex items-center justify-between">
      <Link className="text-[40px]" to={'/'} >
        LOGO
      </Link>
      <button className="px-6 py-[14px] rounded-[20px] bg-teal-300 flex items-center justify-center gap-4 " onClick={() => SetClick(!click)}>
        {click ? <>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Katalog</> : <>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 18" fill="none">
            <rect y="10" width="9.09091" height="8" fill="#D9D9D9" />
            <rect width="9.09091" height="8" fill="#D9D9D9" />
            <rect x="10.9091" width="9.09091" height="8" fill="#D9D9D9" />
            <rect x="10.9091" y="10" width="9.09091" height="8" fill="#D9D9D9" />
          </svg>

          Katalog</>}
      </button>

    </nav>
  )
}
