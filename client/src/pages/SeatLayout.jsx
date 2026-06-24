import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import Loading from '../components/Loading'
import { ArrowRightIcon, Clock3Icon } from 'lucide-react'
import IsoTimeFormat from '../lib/IsoTimeFormat'
import BlurCircle from '../components/BlurCircle'
import toast from 'react-hot-toast'

const SeatLayout = () => {
const groupRows =[["A","B"],
["C","D"],
["E","F"],
["G","H"],
["I","J"],
]



  const { id, date } = useParams()

  const [selectedSeat, setSelectedSeat] = useState([])
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedShow, setSelectedShow] = useState(null)

  const navigate = useNavigate()

  const getShow = () => {
    const show = dummyShowsData.find(
      (show) => String(show._id) === String(id)
    )

    if (show) {
      setSelectedShow({
        movie: show,
        dateTime: dummyDateTimeData
      })
    }
  }
  const handleSeatClick=(seatId )=>{
    if(!selectedTime){
      return toast("Please Select time First")
    }
    if(!selectedSeat.includes(seatId)&& selectedSeat.length>4){
      return toast("You can only select 5 seats")
    }
     setSelectedSeat(prev=>prev.includes(seatId)? prev.filter(seat=>seat!==seatId):[...prev,seatId])
  }
  const renderSeats=(row,count=9)=>
    (
      <div key={row} className='flex gap-2 mt-2'>
        <div className='flex flex-wrap items-center justify-center gap-2'>{
          Array.from({length:count},(_,i)=>{
            const seatId=`${row}${i+1} `;
            return(
              <button
              key={seatId}
              onClick={()=>handleSeatClick(seatId)}
              className={`h-8 w-8 rounded border border-primary/60 cursor-pointer ${selectedSeat.includes(seatId)&& "bg-primary text-white"} `}>{seatId}</button>
            )
          })
          
          }</div>
      </div>



    )
  useEffect(() => {
    getShow()
  }, [id])

  if (!selectedShow) {
    return <Loading />
  }

  return (
    <div className="flex flex-col md:flex-row gap-10 px-6 md:px-16 lg:px-40 py-30 md:pt-50">

      {/* Available Timings */}
      <div className="w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30">

        <p className="text-lg font-semibold px-6">
          Available Timings
        </p>

        <div className="mt-4 space-y-1">

          {selectedShow?.dateTime?.[date]?.map((item) => (
            <div
              key={item.time}
              onClick={() => setSelectedTime(item)}
              className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${
                selectedTime?.time === item.time
                  ? 'bg-primary text-white'
                  : 'hover:bg-primary/20'
              }`}
            >
              <Clock3Icon className="w-4 h-4" />

              <p className="text-sm">
                {IsoTimeFormat(item.time)}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* Seat Layout */}
      <div className="relative flex-1 flex flex-col items-center max-md:mt-10">

        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle bottom="0" right="0" />

        <h1 className="text-2xl font-semibold mb-4">
          Select Your Seat
        </h1>

        <img
          src={assets.screenImage}
          alt="screen"
          className="w-full max-w-3xl"
        />

        <p className="text-gray-400 text-sm mb-8">
          SCREEN SIDE
        </p>
         <div className='flex flex-col items-center mt-10 text-xs text-gray-300'>
         <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6'>
          {groupRows[0].map(row=>renderSeats(row))}
         </div>
    <div className='grid grid-cols-2 gap-11'>
          {groupRows.slice(1).map((group,index)=>(
            <div key={index }>
              {group.map(row=>renderSeats(row))}
            </div>
          ))} 

         </div>
         </div>
         <button onClick={()=>navigate('/my-bookings')}className='flex items-center gap-1 mt-20 px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer active:scale-95'>Proceed to Checkout
          <ArrowRightIcon strokeWidth={3} className='w-4 h-4'/>
         </button>
        {/* Seats will come here */}

      </div>
    </div>
  )
}

export default SeatLayout