import React, { useEffect, useState } from 'react'
import { ApiService } from '../../service/api.service'
import { Link } from 'react-router-dom'

const Main = () => {
  const [info, SetInfo] = useState([])
  const [liked, SetLiked] = useState(['0,,,,,'])
  const [like, SetLike] = useState([])
  useEffect(() => {
    ApiService.fetching().then(data => SetInfo(data))
    ApiService.fetching().then(data => console.log(data))
  }, [])
  useEffect(() => {

    localStorage.setItem("name", like);
    SetLiked(localStorage.getItem("name"))
  }, [like]);

  // const likedinfo = liked.split(",") 
  console.log(liked.split(","));
  const splitted = liked.split(",")
  console.log(splitted);
  return (
    <main className='max-w-[1728px] almarai  px-28 mx-auto   py-6 flex items-start gap-10 flex-col justify-between'>
      <h1 className='text-[#474747] text-3xl font-bold'>Trending Items  </h1>
     
      <div className="grid grid-cols-3 items-center justify-between gap-24">
        {info.map((card, i) => (
          <div className="flex items-center justify-between shadow-lg px-3 py-6 h-[30vh] rounded-[30px] hover:shadow-2xl" key={i}>
            <Link to={`product/${card.id}`} className="w-1/2">
              <img src={card.image} className=' w-full p-10' alt="" />
            </Link>
            <div className="flex flex-col gap-2 w-1/2 justify-between h-full">

              <Link to={`product/${card.id}`} className='flex flex-col gap-2'>
                <p>{card.title.substring(0, 30)}...</p>
                <p>{card.description.substring(0, 60)}...</p>
              </Link>
              <div className="flex gap-2">
                {card.rating.count > 10 ? <p className='bg-[#00A71180] w-1/2 rounded-3xl text-center text-white font-normal'>aviable </p> : <p>`Only ${card.rating.count} left` </p>} <article className='text-[#00A71180]'>{card.rating.rate}% off</article>
              </div>
              <p className='font-bold text-[#474747]'>₹{card.price} <button id={card.id} onClick={() => SetLike(like.concat(card.id))}>
                {splitted.map((like)=>(
                  like === card.id ? "liked":"like"
                ))}
                </button></p>


            </div>
          </div>

        ))}
      </div>
    </main>

  )
}

export default Main