import React from 'react'
import serchImg from '../images/serach.png'
// import { Link } from 'react-router-dom'

const CheckBooking = () => {

const handleSubmit = ((e) => {
    e.preventDefault();

    const val = new FormData(e.currentTarget)
    const acualData = {
        date1: val.get('date1'),
        date2: val.get('date2'),
    }
    const d1 = new Date(acualData.date1);
    const d2 = new Date(acualData.date2);
    
    console.log(getDatesInRange(d1, d2));

    function getDatesInRange(startDate, endDate) {
        const date = new Date(startDate.getTime());
      
        const dates = [];
      
        while (date <= endDate) {
          dates.push(new Date(date));
          date.setDate(date.getDate() + 1);
        }
        console.log(dates);
      }
})
  return (
    <div>
    {/* Serching hall : https://www.suratmunicipal.gov.in/OnlineServices/CommunityHallBook/CheckAvailability */}

    <div className="card d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h2 className='text-secondary'><u>PARTY PLOT BOOKING AVAILABILITY</u></h2>
        <form onSubmit={handleSubmit}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className='col-md-8 col-lg-5 col-xl-5'>
                <img src={serchImg} alt="..." style={{ width: 300 }} />
            </div>
            <div className='col-md-9 col-lg-7 col-xl-5 mt-3'>
                {/* <button className='btn btn-success'>Available Date</button>
                <Link to="/booking" className='btn btn-secondary ms-4'>Booking</Link> */}
                <h5>*Select date</h5>
                <input type='date' name='date1' className='form-control mt-3'/>
                <input type='date' name='date2' className='form-control mt-3'/>
                <button className='btn btn-success mt-2'>Available Date</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default CheckBooking
