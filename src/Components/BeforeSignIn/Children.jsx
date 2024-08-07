import React from 'react'

const Children = () => {
  return (
    <div className="w-full border-t-[8px] border-t-[#302f2f] bg-black sm:py-[70px] py-[50px]">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center ">
            <div className='md:order-1 order-2'>
                <img src="image/children.png" alt="" />
            </div>


            <div className='grid text-white md:text-left text-center md:order-2 order-1 md:mr-32 mx-5'>
                <h1 className='sm:text-5xl text-3xl font-bold '>Create profiles for kids</h1>
                <p className='sm:text-2xl text-lg sm py-5'>
                Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Children