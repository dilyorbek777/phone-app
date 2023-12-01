import React, { useEffect, useState } from 'react'
import ip from '../../media/ip.webp'
import { Link } from 'react-router-dom'
import { ApiService, LastBrand } from '../../service/api.service'
const cte = [
  { name: 'All', href: '/' },
  { name: 'Mac', href: '/' },
  { name: 'iPhone', href: '/' },
  { name: 'iPad', href: '/' },
  { name: 'Samsung', href: '/' },
  { name: 'Tv', href: '/' },
  { name: 'Redmi', href: '/' },
  { name: 'Oppo', href: '/' },
  { name: 'Poco', href: '/' },
  { name: 'infinix', href: '/' },
]
// hhjvhjvh



export default function Header() {
  const [info, SetInfo] = useState([])
  const [imageHeader, SetImageHeader] = useState([])


  useEffect(() => {
    ApiService.fetching().then(data => SetInfo(data))
    ApiService.fetching().then(data => SetImageHeader(data.photos[0]))
    ApiService.fetching().then(data => console.log(data))
  }, [])
  const lastImage = imageHeader.image
  console.log(lastImage);



  return (
    <header className='relative max-w-[1728px] almarai px-28 mx-auto text-[#fff]  flex  flex-col items-center justify-between'>
      <div className="flex flex-col w-full h-full">
        {/* categories */}
        <div className="buttons flex items-center mt-12 w-11/12 text-[#000] gap-6  overflow-hidden overflow-x-auto py-3">
          {cte.map((ctel, i) => (
            <div className="flex px-32 items-center justify-center py-3 border border-[#9494946b] rounded-[30px] shadow-md" key={i}>
              {ctel.name}
            </div>
          ))}
        </div>
        {/* end  categories */}

        {/* ad section */}
        <Link to={"/product/" + info.id} className="flex items-center mt-12 w-11/12 text-[#000] h-8v bg-gray-200 overflow-hidden overflow-x-auto py-3 rounded-[70px]">
          <div className="w-2/5  h-full flex flex-col items-start pl-7 gap-5 justify-center">
            <p>Sotivda 6-oktabrdan</p>
            <h1 className='font-extrabold text-5xl tracking-widest leading-snug'>{info.price}$ {info.model}</h1>
            <button className='rounded-[30px]
border border-black px-8 py-2'>Sotib Olish</button>
          </div>
          <div className="w-3/5">



            {/* {lastImage.map((image) => ( */}
               <img src={lastImage} className='w-full h-full' alt="" />              
            {/* // ))} */}



          </div>
        </Link>
        {/* end ad section */}
      </div>


    </header>

  )
}
