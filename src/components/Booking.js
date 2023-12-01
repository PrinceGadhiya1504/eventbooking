import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Booking = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
    date: '',
  })

  const [error, setError] = useState({
    status: false,
    type: '',
    msg: ''
})

const navigate = useNavigate();

const [data, setData] = useState();

useEffect(() => {
  axios.get("http://localhost:8000/booking")
  .then((res) => setData(res.data))
  .catch(err => console.log(err))
},[setData])


  const handleSubmit = ((e) => {
    e.preventDefault();

    const val = new FormData(e.currentTarget);
    const actualData = {
      name: val.get('name'),
      email: val.get('email'),
      phone: val.get('phone'),
      comments: val.get('comments'),
      date: val.get('date'),
    }
    let a = true;
    if (actualData.name && actualData.email && actualData.phone && actualData.comments && actualData.date) {
      data.map((d) => {
        if(actualData.date !== d.date &&  a===true){
          a=true;
        }
        else{
          console.log("Error");
          setError({ status: true, msg: "Date already bookked", type: "Error" })
          a=false;
        }
        return 0;
      })
      if(a===true){
        axios.post("http://localhost:8000/booking", values)
        .then(navigate('/'))
        .catch(err => console.log(err))
      }
  } else {
      setError({ status: true, msg: "All fields are require", type: "Error" })
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
              <div className='col-md-9 col-lg-7 col-xl-5 mt-3'>
              <div className='mb-3'>
                  <input type='text' name='name' onChange={e => setValues({ ...values, name: e.target.value })} className='form-control' placeholder='Enter Name' autoComplete='off' autoFocus/>
                </div>
                <div className='mb-3'>
                  <input type='text' name='email' onChange={e => setValues({ ...values, email: e.target.value })} className='form-control' placeholder='Enter Email' autoComplete='off' />
                </div>
                <div className='mb-3'>
                  <input type='text' name='phone' onChange={e => setValues({ ...values, phone: e.target.value })} className='form-control' placeholder='Enter Phone No' autoComplete='off' />
                </div>
                <div className='mb-3'>
                  <textarea name='comments' onChange={e => setValues({ ...values, comments: e.target.value })} className='form-control' rows="4" cols="50" placeholder='Enter Comments.....' autoComplete='off'>
                  </textarea>
                </div>
                <div className='mb-3'>
                  <input type='date' name='date' onChange={e => setValues({ ...values, date: e.target.value })} className='form-control' autoComplete='off' />
                </div>
                {error.status ? <div className='mb-3 alert alert-danger'>{error.type}, {error.msg}</div> : ''}
                <div className='mb-3'>
                  <button className='btn btn-success'>Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Booking
