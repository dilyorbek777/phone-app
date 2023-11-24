import React from 'react'
const cte = [
  {name:'All', href:'/'},
  {name:'Mac', href:'/'},
  {name:'iPhone', href:'/'},
  {name:'iPad', href:'/'},
  {name:'Samsung', href:'/'},
  {name:'Tv', href:'/'},
  {name:'Redmi', href:'/'},
  {name:'Oppo', href:'/'},
  {name:'Poco', href:'/'},
  {name:'infinix', href:'/'}

]

export default function Header() {
  return (
    <header className='max-w-[1728px] almarai px-28 mx-auto text-[#fff] py-6 flex  flex-col items-center justify-between pt-[71px]'>
      <form action="/" className='flex shadow-md px-10 py-6 w-4/5 mx-auto justify-between rounded-[30px] gap-3 border border-[#9494946b]'>
        <input type="text" className='w-full outline-none text-[#949494] text-2xl' placeholder='Search' />
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="30" viewBox="0 0 44 30" fill="none">
          <path d="M26.3685 7.2H2.18333C1.16918 7.2 0.347046 6.39411 0.347046 5.4C0.347046 4.40589 1.16918 3.6 2.18333 3.6H26.3685C27.1247 1.50265 29.1653 0 31.5639 0C33.9625 0 36.003 1.50265 36.7593 3.6H41.3574C42.3715 3.6 43.1937 4.40589 43.1937 5.4C43.1937 6.39411 42.3715 7.2 41.3574 7.2H36.7593C36.003 9.29735 33.9625 10.8 31.5639 10.8C29.1653 10.8 27.1247 9.29735 26.3685 7.2Z" fill="#6A6A6A" />
          <path d="M41.3574 26.4C42.3715 26.4 43.1937 25.5941 43.1937 24.6C43.1937 23.6059 42.3715 22.8 41.3574 22.8H17.1722C16.416 20.7027 14.3754 19.2 11.9768 19.2C9.57826 19.2 7.53771 20.7027 6.78146 22.8H2.18333C1.16918 22.8 0.347046 23.6059 0.347046 24.6C0.347046 25.5941 1.16918 26.4 2.18333 26.4H6.78146C7.53771 28.4973 9.57826 30 11.9768 30C14.3754 30 16.416 28.4973 17.1722 26.4H41.3574Z" fill="#6A6A6A" />
        </svg>

      </form>
      <div className="buttons flex items-center justify-between max-w-[1728] bg-black">
      {cte.map((ctel, i) => (
        <div className="flex" key={i}>
          {ctel.name}
        </div>
      ))}
      </div>
    </header>
    
  )
}
