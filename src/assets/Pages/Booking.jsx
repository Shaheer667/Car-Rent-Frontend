import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom'
import { getCar, reservation } from '../http'

const Booking = () => {
  const param = useParams();
  const [car, setCar] = useState([])
  const [first_name, setFirst_name] = useState();
  const [last_name, setLast_name] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [pickup_location , setPickup_location] = useState();
  const [drop_location , setDrop_location] = useState();
  const [pickup_date , setPickup_date] = useState();
  const [pickup_time, setPickup_time] = useState();
  const [message, setMessage] = useState();
  const [payment, setPayment] = useState('');
  
  useEffect(()=>{
    const load = async ()=>{
      const {data} = await getCar({id: param.id});
      console.log(data);
      setCar(data)
    }
    load();
  },[])
console.log(payment)
  const submit = async()=>{
    const {data} = await reservation({first_name, last_name, email, phone, pickup_location, pickup_time, drop_location, pickup_date, message, payment});
    console.log(data);
  }
  return (
    <div>
        <Navbar/>

        <div>
        <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">Car Booking</h1>
        <div className="d-inline-flex text-white">
            <h6 className="text-uppercase m-0 text-white"><a className="text-white" href="">Home</a></h6>
            <h6 className="m-0 px-3 text-white">/</h6>
            <h6 className="text-uppercase m-0 text-white">Car Booking</h6>
        </div>
        </div>
        </div>


        <div>
        <div className="container-fluid pt-5">
        <div className="container pt-5 pb-3">
            <h1 className="display-4 text-uppercase mb-5">{car.name}</h1>
            <div className="row align-items-center pb-2">
                <div className="col-lg-6 mb-4">
                    <img className="img-fluid car-image-size2" src={car.image} alt=""/>
                </div>
                <div className="col-lg-6 mb-4">
                    <h4 className="mb-2">{car.price}</h4>
                    <div className="d-flex mb-3">
                        <h6 className="mr-2">Rating:</h6>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-warning mr-1"></small>
                            <small className="fa fa-star text-warning mr-1"></small>
                            <small className="fa fa-star text-warning mr-1"></small>
                            <small className="fa fa-star text-warning mr-1"></small>
                            <small className="fa fa-star-half-alt text-warning mr-1"></small>
                            <small>(250)</small>
                        </div>
                    </div>
                    <p>{car.description}</p>
                    <div className="d-flex pt-1">
                        <h6>Share on:</h6>
                        <div className="d-inline-flex icons">
                            <a className="px-2" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="px-2" href=""><i className="fab fa-twitter"></i></a>
                            <a className="px-2" href=""><i className="fab fa-linkedin-in"></i></a>
                            <a className="px-2" href=""><i className="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-n3 mt-lg-0 pb-4">
                <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-car text-warning mr-2"></i>
                    <span>Model: 2015</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-cogs text-warning mr-2"></i>
                    <span>Automatic</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-road text-warning mr-2"></i>
                    <span>20km/liter</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-eye text-warning mr-2"></i>
                    <span>GPS Navigation</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-car text-warning mr-2"></i>
                    <span>Model: 2015</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-cogs text-warning mr-2"></i>
                    <span>Automatic</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-road text-warning mr-2"></i>
                    <span>20km/liter</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-eye text-warning mr-2"></i>
                    <span>GPS Navigation</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-car text-warning mr-2"></i>
                    <span>Model: 2015</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-cogs text-warning mr-2"></i>
                    <span>Automatic</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-road text-warning mr-2"></i>
                    <span>20km/liter</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-eye text-warning mr-2"></i>
                    <span>GPS Navigation</span>
                </div>
            </div>
        </div>
    </div>
    </div>


    <div>
    <div className="container-fluid pb-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <h2 className="mb-4">Personal Detail</h2>
        <div className="mb-5">
          <div className="row">
            <div className="col-6 form-group">
              <input
                type="text"
                className="form-control p-4"
                placeholder="First Name"
                required="required"
                onChange={(e)=>{
                  setFirst_name(e.target.value.toString())
                }}
              />
            </div>
            <div className="col-6 form-group">
              <input
                type="text"
                className="form-control p-4"
                placeholder="Last Name"
                required="required"
                onChange={(e)=>{
                  setLast_name(e.target.value.toString())
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 form-group">
              <input
                type="email"
                className="form-control p-4"
                placeholder="Your Email"
                required="required"
                onChange={(e)=>{
                  setEmail(e.target.value.toString())
                }}
              />
            </div>
            <div className="col-6 form-group">
              <input
                type="text"
                className="form-control p-4"
                placeholder="Mobile Number"
                required="required"
                onChange={(e)=>{
                  setPhone(e.target.value.toString())
                }}
              />
            </div>
          </div>
        </div>
        <h2 className="mb-4">Booking Detail</h2>
        <div className="mb-5">
          <div className="row">
            <div className="col-6 form-group">
              <select className="custom-select px-4" style={{ height: 50 }} onChange={(e)=>{
                setPickup_location(e.target.value.toString())
              }}>
                <option selected="">Pickup Location</option>
                <option value={"Karachi"}>Karachi</option>
                <option value={"Lahore"}>Lahore</option>
                <option value={"Islamabad"}>Islamabad</option>
              </select>
            </div>
            <div className="col-6 form-group">
              <select className="custom-select px-4" style={{ height: 50 }} onChange={(e)=>{
                setDrop_location(e.target.value.toString())
              }}>
                <option selected="">Drop Location</option>
                <option value={"Karachi"}>Karachi</option>
                <option value={"Lahore"}>Lahore</option>
                <option value={"Islamabad"}>Islamabad</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-6 form-group">
              <div className="date" id="date2" data-target-input="nearest">
                <input
                  type="text"
                  className="form-control p-4 datetimepicker-input"
                  placeholder="Pickup Date"
                  data-target="#date2"
                  data-toggle="datetimepicker"
                  onChange={(e)=>{
                    setPickup_date(e.target.value.toString())
                  }}
                />
              </div>
            </div>
            <div className="col-6 form-group">
              <div className="time" id="time2" data-target-input="nearest">
                <input
                  type="text"
                  className="form-control p-4 datetimepicker-input"
                  placeholder="Pickup Time"
                  data-target="#time2"
                  data-toggle="datetimepicker"
                  onChange={(e)=>{
                    setPickup_time(e.target.value.toString())
                  }}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea
              className="form-control py-3 px-4"
              rows={3}
              placeholder="Special Request"
              required="required"
              defaultValue={""}
              onChange={(e)=>{
                setMessage(e.target.value.toString())
              }}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="bg-secondary myNavBar p-5 mb-5">
          <h2 className="text-warning mb-4">Payment</h2>
          <div className="form-group">
            <div className="custom-control custom-radio whiteText">
              <input
                type="radio"
                className="custom-control-input"
                name="payment"
                value='paypal'
                id="paypal"
                onChange={(e)=>{
                  setPayment(e.target.value.toString())
                }}
              />
              <label className="custom-control-label" htmlFor="paypal">
                Paypal
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="custom-control custom-radio whiteText">
              <input
                type="radio"
                className="custom-control-input"
                name="payment"
                id="directcheck"
                onChange={(e)=>{
                  setPayment(e.target.value.toString())
                }}
              />
              <label className="custom-control-label" htmlFor="directcheck">
                Direct Check
              </label>
            </div>
          </div>
          <div className="form-group mb-4">
            <div className="custom-control custom-radio whiteText">
              <input
                type="radio"
                className="custom-control-input"
                name="payment"
                id="banktransfer"
                onChange={(e)=>{
                  setPayment(e.target.value.toString())
                }}
              />
              <label className="custom-control-label" htmlFor="banktransfer">
                Bank Transfer
              </label>
            </div>
          </div>
          <button className="btn btn-block btn-warning py-3" onClick={submit}>
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>

    <Footer/>
    </div>
  )
}

export default Booking