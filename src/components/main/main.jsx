import React, { useEffect, useState } from 'react'
import { ApiService } from '../../service/api.service'

const Main = () => {
  const [info, SetInfo] = useState([])
  useEffect(() => {
    ApiService.fetching().then(data => SetInfo(data))
    ApiService.fetching().then(data => console.log(data))
  }, [])

  return (
    <main className='max-w-[1728px] almarai  px-28 mx-auto   py-6 flex items-start gap-10 flex-col justify-between'>
      <h1 className='text-[#474747] text-3xl font-bold'>Trending Items</h1>
      <div className="grid grid-cols-3 items-center justify-between">
        {info.map((card, i) => (
          <div className="flex items-center justify-between" key={i}>
            <img src={card.image} className='w-1/2' alt="" />
            <div className="flex flex-col gap-1">
              <p>{card.title}</p>
              <p>{card.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>

  )
}

export default Main