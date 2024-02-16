"use client";
import PickDate from "@/components/date_picker/DatePicker";
import Link from "next/link";
import React, { useState } from "react";


type user_data = {
  first_name: string;
  last_name: string;
  id_number: string;
};

function BookingForm() {
  const [user_data, setUserData] = useState<user_data>({
    first_name: "",
    last_name: "",
    id_number: "",
  });

  const [submitted, setSubmitted] = useState(false)

  const handle_input_change = (e:any) => {
    const { name, value } = e.target;
    

    setUserData({ ...user_data, [name]: value });
  };

  const handleSubmit = (e:any) => {

  e.preventDefault();
    //  this will push the data to the db
    console.log("data submitted")
    
    console.log(user_data)
    setUserData({
      first_name: "",
      last_name: "",
      id_number: ""
    })
    setSubmitted(true)

  };
  return (
    <div className="w-3/4">
      <div className="flex flex-col items-start justify-center w-full gap-10">
        {
          submitted ? <h1 className="text-1xl font-bold text-red-300">
          Appointment Booked successfuly
        </h1> : ""
        }
        <h1 className="text-2xl font-bold text-main_green">
          Fill the details correctly
        </h1>
        <form
          action=""
          className="flex flex-col items-start w-full justify-center gap-5"
        >
          <label htmlFor="Enter first">Enter First Name</label>

          <input
            type="text"
            className="border outline-none  py-1 text-[1.2rem] border-main_green w-full"
            name="first_name"
            value={user_data.first_name}
            onChange={handle_input_change}
          />

          <label htmlFor="">Enter last Name</label>
          <input
            type="text"
            className="border outline-none  py-1 text-[1.2rem] border-main_green w-full"
            name="last_name"
            value={user_data.last_name}
            onChange={handle_input_change}
          />
          <label htmlFor="">Enter Reg number/ id number</label>
          <input
            type="text"
            className="border outline-none  py-1 text-[1.2rem] border-main_green w-full"
            name="id_number"
            value={user_data.id_number}
            onChange={handle_input_change}
          />
          <PickDate />


          <input
            type="submit"
            className="bg-main_green rounded-md text-[1.1rem] text-white py-2 px-4 text-bold"
            value={"Book Appointmednt"}
            onClick={handleSubmit}
          />

        </form>
      </div>
    </div>
  );
}

export default BookingForm;
