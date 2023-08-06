import React, { useState } from 'react'
import './Home.css'
import axios from 'axios'
const Home = () => {
  const[name,showName] = useState("");
  const[phone,showPhone] = useState("");
  const[email,showEmail] = useState("");
  const[date,showDate] = useState("");
  const[time,showTime] = useState("");
  const[area,showArea] = useState("");
  const[city,showCity] = useState("");
  const[state,showState] = useState("");
  const[post,showPost] = useState("");
  const handleClick = async (event) =>  {
    event.preventDefault();
    try{
        await axios.post("http://localhost:8080/api/users/",{
          userid : name,
          userphone : phone,
          useremail : email,
          userdate : date,
          usertime : time,
          userarea : area,
          usercity : city,
          userstate : state,
          userpost : post
        });
        alert("Your appointment has succesfully Booked");
        showName("");
        showPhone("");
        showEmail("");
        showDate("");
        showTime("");
        showArea("");
        showCity("");
        showState("");
        showPost("");

    }
    catch(err){
      alert("Appointment not successully completed");
    }
  }
  return (
  <div class="formbold-main-wrapper">
  <div class="formbold-form-wrapper">
    <form onSubmit={handleClick}>
      <div class="formbold-mb-5">
        <label for="name" class="formbold-form-label"> Full Name </label>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          class="formbold-form-input"
          onChange={(event) =>{
            showName(event.target.value);
          }}
        />
      </div>
      <div class="formbold-mb-5">
        <label for="phone" class="formbold-form-label"> Phone Number </label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter your phone number"
          class="formbold-form-input"
          onChange={(event) =>{
            showPhone(event.target.value);
          }}
        />
      </div>
      <div class="formbold-mb-5">
        <label for="email" class="formbold-form-label"> Email Address </label>
        <input
          type="email"
          name="email"
          
          placeholder="Enter your email"
          class="formbold-form-input"
          onChange={(event) =>{
            showEmail(event.target.value);
          }}
        />
      </div>
      <div class="flex flex-wrap formbold--mx-3">
        <div class="w-full sm:w-half formbold-px-3">
          <div class="formbold-mb-5 w-full">
            <label for="date" class="formbold-form-label"> Date </label>
            <input
              type="text"
              name="date"
              placeholder='year-month-day'
              class="formbold-form-input"
              onChange={(event) =>{
                showDate(event.target.value);
              }}
            />
          </div>
        </div>
        <div class="w-full sm:w-half formbold-px-3">
          <div class="formbold-mb-5">
            <label for="time" class="formbold-form-label"> Time </label>
            <input
              type="text"
              name="time"
              placeholder='00.00'
              class="formbold-form-input"
              onChange={(event) =>{
                showTime(event.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div class="formbold-mb-5 formbold-pt-3">
        <label class="formbold-form-label formbold-form-label-2">
          Address Details
        </label>
        <div class="flex flex-wrap formbold--mx-3">
          <div class="w-full sm:w-half formbold-px-3">
            <div class="formbold-mb-5">
              <input
                type="text"
                name="area"
                
                placeholder="Enter area"
                class="formbold-form-input"
                onChange={(event) =>{
                  showArea(event.target.value);
                }}
              />
            </div>
          </div>
          <div class="w-full sm:w-half formbold-px-3">
            <div class="formbold-mb-5">
              <input
                type="text"
                name="city"
                
                placeholder="Enter city"
                class="formbold-form-input"
                onChange={(event) =>{
                  showCity(event.target.value);
                }}
              />
            </div>
          </div>
          <div class="w-full sm:w-half formbold-px-3">
            <div class="formbold-mb-5">
              <input
                type="text"
                name="state"
                
                placeholder="Enter state"
                class="formbold-form-input"
                onChange={(event) =>{
                  showState(event.target.value);
                }}
              />
            </div>
          </div>
          <div class="w-full sm:w-half formbold-px-3">
            <div class="formbold-mb-5">
              <input
                type="text"
                name="post"
          
                placeholder="Post Code"
                class="formbold-form-input"
                onChange={(event) =>{
                  showPost(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <button class="formbold-btn">Book Appointment</button>
      </div>
    </form>
  </div>
</div>
  )
}

export default Home
