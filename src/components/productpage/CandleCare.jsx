import React from 'react'
import img from "../../assets/images/productpage/image1.png"
// import img2 from "../../assets/images/productpage/161a738b0be7db16053c9cd407048a9a.png"

import img1 from "../../assets/images/scentedcandles/1.jpg"
import img2 from "../../assets/images/scentedcandles/2.jpg"
import img3 from "../../assets/images/scentedcandles/3.jpg"
import img4 from "../../assets/images/scentedcandles/4.jpg"
const CandleCare = () => {
    return (
        <div className='p-10 flex justify-between items-center gap-5 lg:gap-2 candle-care h-full'>

            {/* images */}
            <div className='hidden sm:block images sm:w-2/5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 overflow-hidden'>
                    <img className='w-60 lg:w-full' src={img1} alt="" />
                    <img className='w-60 lg:w-full' src={img2} alt="" />
                    <img className='w-60 lg:w-full' src={img3} alt="" />
                    <img className='w-60 lg:w-full' src={img4} alt="" />
                </div>

            </div>
            {/* text */}
            <div className='flex flex-col justify-center  gap-10 text w-full lg:w-1/2 '>
                <h1 className='uppercase text-xl'>5 Ways To Take Care of Your Candles</h1>
                <h1 className='text-3xl'>Candle Care</h1>
                <div>
                    <ol className='flex flex-col gap-10 justify-center'>
                        <li className='w-full xlg:w-2/3'><span>1. Trim The Wick:</span> <p> Before lighting, trim the wick to 1/4" using scissors for a clean,safe burn and increased candle lifespan.</p></li>
                        <li className='w-full xlg:w-2/3'><span>2. Trim The Wick:</span> <p> Before lighting, trim the wick to 1/4" using scissors for a clean,safe burn and increased candle lifespan.</p></li>
                        <li className='w-full xlg:w-2/3'><span>3. Trim The Wick:</span> <p> Before lighting, trim the wick to 1/4" using scissors for a clean,safe burn and increased candle lifespan.</p></li>
                        <li className='w-full xlg:w-2/3'><span>4. Trim The Wick:</span> <p> Before lighting, trim the wick to 1/4" using scissors for a clean,safe burn and increased candle lifespan.</p></li>
                        <li className='w-full xlg:w-2/3'><span>5. Trim The Wick:</span> <p> Before lighting, trim the wick to 1/4" using scissors for a clean,safe burn and increased candle lifespan.</p></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default CandleCare
