import React, { useState, useEffect, useMemo } from 'react'
import { FaCheck } from 'react-icons/fa'
import { FiCircle } from 'react-icons/fi'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { AxiosApi } from "../api/AxiosApi"


// country
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { Address } from '@/Json/Address';
import BloodGroup from '@/utils/BloodGroup';
import InputField from '@/utils/InputField';

const Multipart = () => {
  //  form array
  const FormArray = [1, 2, 3];
  const [FormNo, setFormNo] = useState(FormArray[0])

  // personal information  
  const [company_id, setCompanyID] = useState("")
  const [full_name, setFullName] = useState("")
  const [name_bn, setNameBN] = useState("")
  const [fathers_name, setFatherName] = useState("")
  const [mothers_name, setMotherName] = useState("")
  const [birth_date, setBirthDate] = useState("")
  const [gender, setGender] = useState("male")
  const [blood_group, setGroup] = useState("O+")

  // contact information  
  const [phone_number, setPhone] = useState("")
  const [emergency_contact_person, setEmergencycontactperson] = useState("")
  const [emergency_contact_relationship, setEmergencycontactrelationship] = useState("Select Your Relationship")
  const [emergency_contact_number, setEmergencycontactnumber] = useState("")

  // parmanent address  
  const [house, setHouse] = useState("")
  const [country, setCountry] = useState("")
  const [division, setDivision] = useState("")
  const [district, setDistrict] = useState("")
  const [postal_code, setPostal_code] = useState("")

  // present address
  const [present_house, setPresent_house] = useState("")
  const [present_division, setPresent_division] = useState("")
  const [present_district, setPresent_district] = useState("")
  const [present_postal_code, setPresent_postal_code] = useState("")

  // same as and new details parmanent address
  const [present_address, setPresent_address] = useState("")

  useEffect(() => {
    if (present_address === "same as parmanent") {
      setPresent_house(house)
      setPresent_division(division)
      setPresent_district(district)
      setPresent_postal_code(postal_code)
    } else {
      setPresent_house("")
      setPresent_division("")
      setPresent_district("")
      setPresent_postal_code("")
    }
  }, [present_address])

  // others
  const [formal_picture, setFormalpicture] = useState("")
  const [profile_picture, setProfilepicture] = useState("")
  const [nid_number, setNidnumber] = useState("")
  const [nid_front_photo, setNidfontphoto] = useState("")
  const [nid_back_photo, setNidbackphoto] = useState("")

  // access token
  const [accesstoken, setAccesstoken] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("id")
    if (token) {
      setAccesstoken(JSON.parse(token))
    }

  }, [])

  // upload image

  const handleFormalPic = (e) => {
    setFormalpicture(e.target.files[0]);
  };

  const handleProfilePic = (e) => {
    setProfilepicture(e.target.files[0]);
  };

  const handleNidFrontPic = (e) => {
    setNidfontphoto(e.target.files[0]);
  };

  const handleNidBackPic = (e) => {
    setNidbackphoto(e.target.files[0]);
  };

  // handle country list 
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = (country) => {
    setCountry(country)
  }

  const isBangladesh = country && country.label === 'Bangladesh';

  // css for country list
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      // color: state.isSelected ? 'red' : '#03698E',
      border: 'none',
      boxShadow: state.isFocused ? null : null,
      '&:hover': {
        border: 'none'
      }
    }),
    menu: (provided, state) => ({
      ...provided,
      color: isBangladesh ? '#03698E' : '#03698E',
      border: 'none',
      boxShadow: 'none',
    }),
  }


  // handle user signup
  const handleUserSignup = (e) => {
    e.preventDefault();

    const form = new FormData();

    form.append("company_id", company_id);
    form.append("full_name", full_name);
    form.append("name_bn", name_bn);
    form.append("fathers_name", fathers_name);
    form.append("mothers_name", mothers_name);
    form.append("birth_date", birth_date);
    form.append("gender", gender);
    form.append("blood_group", blood_group);
    form.append("phone_number", phone_number);
    form.append("emergency_contact_person", emergency_contact_person);
    form.append("emergency_contact_relationship", emergency_contact_relationship);
    form.append("emergency_contact_number", emergency_contact_number);
    form.append("house", house);
    form.append("country", country);
    form.append("division", division);
    form.append("district", district);
    form.append("postal_code", postal_code);
    form.append("formal_picture", formal_picture);
    form.append("profile_picture", profile_picture);
    form.append("nid_front_photo", nid_front_photo);
    form.append("nid_number", nid_number);
    form.append("nid_back_photo", nid_back_photo);
    form.append("present_division", present_division);
    form.append("present_district", present_district);
    form.append("present_house", present_house);
    form.append("present_postal_code", present_postal_code);



    const options = {
      method: 'POST',
      url: '/organization/api/v1/employee-signup/',
      headers: {
        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        Authorization: `Bearer ${(accesstoken)}`
      },
      data: form
    };

    AxiosApi.request(options).then(function (response) {
    }).catch(function (error) {
      console.error(error);
    });
  }

  // next button fuction

  const next = () => {
    if (FormNo === 1 && company_id && full_name && name_bn && birth_date && gender && blood_group) {
      setFormNo(FormNo + 1)
    }
    else if (FormNo === 2 && phone_number && emergency_contact_person && emergency_contact_relationship && emergency_contact_number && country && division && district && postal_code && present_address
      && present_division && present_district && present_house && present_postal_code) {
      setFormNo(FormNo + 1)
    }
    else if (FormNo === 3 && formal_picture && profile_picture && nid_front_photo && nid_number && nid_back_photo) {
      setFormNo(FormNo + 1)
    }
    else {
      alert("Please fill up all the field")
    }
  }

  // previous button fuction
  const pre = () => {
    setFormNo(FormNo - 1)
  }

  // parmanent division
  let divisionSet = new Set();
  for (let i = 0; i < Address.length; i++) {
    divisionSet.add(Address[i].division);
  }
  const divisionArray = [...divisionSet];

  // filter parmanent division wise parmanent district
  let districtSet = new Set();
  for (let i = 0; i < Address.length; i++) {
    if (Address[i].division === division) {
      districtSet.add(Address[i].district);
    }
  }
  const districtArray = [...districtSet];

  // present division
  let presentDivisionSet = new Set();
  for (let i = 0; i < Address.length; i++) {
    presentDivisionSet.add(Address[i].division);
  }
  const presentDivisionArray = [...presentDivisionSet];

  // filter present division wise present district
  let presentDistrictSet = new Set();
  for (let i = 0; i < Address.length; i++) {
    if (Address[i].division === present_division) {
      presentDistrictSet.add(Address[i].district);
    }
  }
  const presentDistrictArray = [...presentDistrictSet];

  return (
    <div>

      <div className='text-center'>


        {/* title of pages */}
        <div>
          {
            FormNo === 1 && <h1 className='text-2xl sm:text-3xl font-bold text-primary'>Personal Information</h1>
          }
          {
            FormNo === 2 && <h1 className='text-2xl sm:text-3xl font-bold text-primary'>Contact Info</h1>
          }
          {
            FormNo === 3 && <h1 className='text-2xl sm:text-3xl font-bold text-primary'>Others</h1>
          }
        </div>

        {/* progress bar */}
        <span>
          <div className='flex justify-center items-center lg:mt-12 mt-4 gap-4 mb-4'>
            {
              FormArray.map((v, i) =>
                <div key={i} className="flex  items-center justify-around">
                  <div
                    className={`w-[30px] sm:w-[30px]  my-3 text-white  rounded-full ${FormNo - 1 === i ? 'border-4 border-primary bg-primary' : 'bg-white border-primary border-8'} h-[30px] flex justify-center items-center mr-2`} >
                    {FormNo > i + 1 &&
                      <FaCheck className='text-white bg-primary  text-3xl rounded-full' />
                    }
                    {FormNo == i + 1 &&
                      <FiCircle className='text-white text-4xl' />
                    }
                  </div>
                  <div
                  >
                    {
                      i !== FormArray.length - 1 && <div className={`w-[85px] sm:w-[60px] h-[2px] ${FormNo === i + 2 || FormNo === FormArray.length ? 'bg-primary' : 'bg-secondary'}`}></div>
                    }
                  </div>

                </div>)
            }
          </div>
        </span>
      </div>
      <form onSubmit={handleUserSignup}>
        {/* Form */}
        <div className='h-[330px] w-[600px] md:h-[60vh] lg:w-[500px] overflow-y-scroll sm:overflow-hidden sm:w-[300px] sm:h-[850px]'>



          {/* personal information */}
          {FormNo === 1 && <div>

            {/* Company ID field */}
            <InputField label="Company ID" value={company_id} onChange={(e) => setCompanyID(e.target.value)} placeholder="Enter Your Company ID" required />

            {/* Full Name field */}
            <InputField type="text" label="Full Name" value={full_name} onChange={(e) => setFullName(e.target.value)} placeholder="Enter Your Full Name" required />

            {/* Name (BN) field */}
            <InputField type="text" label="Name (BN)" value={name_bn} onChange={(e) => setNameBN(e.target.value)} placeholder="Enter Your Name (BN)" required />

            {/* Father’s Name field */}
            <InputField type="text" label="Father's Name" value={fathers_name} onChange={(e) => setFatherName(e.target.value)} placeholder="Enter Your Father’s Name" />

            {/* Mother’s Name field */}
            <InputField type="text" label="Mother's Name" value={mothers_name} onChange={(e) => setMotherName(e.target.value)} placeholder="Enter Your Mother’s Name" />
            {/* birthday field */}
            <InputField type="date" label="Birth Date" value={birth_date} onChange={(e) => setBirthDate(e.target.value)} placeholder="Enter Your Birth Date" required />

            {/* Gender field */}
            <div>
              <label
                className="text-primary input flex flex-1  flex-col p-3 shadow  rounded-md">
                <p>Gender <sup className="text-red-600">*</sup></p>
                <p className='bg-transparent outline-none text-[#478298] placeholder:text-thin py-3'>{gender} </p>
              </label>

              {/* male */}
              <div className='flex gap-6'>
                <div className='flex items-center gap-2 shadow cursor-pointer transition duration-300 rounded-md p-4 flex-1 text-md font-hold text-primary hover:shadow-md'>
                  <input className='hidden' id="radio1" type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} defaultChecked required />
                  <label htmlFor='radio1'
                    className="flex gap-6 items-center cursor-pointer text-xl">
                    <span className="w-4 h-4 inline-block mr-2 rounded-full border border-primary flex-no-shrink "></span>
                    male
                  </label>
                </div>

                {/* female */}
                <div className='flex items-center gap-2 shadow cursor-pointer transition duration-300 rounded-md p-4 flex-1 text-md font-hold text-primary hover:shadow-md'>
                  <input className='hidden' id="radio2" type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} required />
                  <label htmlFor='radio2'
                    className="flex gap-6 items-center cursor-pointer text-xl">
                    <span className="w-4 h-4 inline-block mr-2 rounded-full border border-primary flex-no-shrink"></span>
                    female
                  </label>

                </div>

              </div>

            </div>
            {/* blood group field */}
            <div>
              <label
                className="text-primary input flex flex-1  flex-col p-4 shadow  rounded-md">
                <p>Blood Group <sup className="text-red-600">*</sup></p>
                <p className='bg-transparent outline-none text-[#478298] placeholder:text-thin'>{blood_group}</p>
              </label>

              <div className='grid grid-cols-6 gap-4'>
                <BloodGroup id="O+" name="group" value="O+" label="O+" checked={blood_group === 'O+'} onChange={(e) => setGroup(e.target.value)} required />
                <BloodGroup id="O-" name="group" value="O-" label="O-" checked={blood_group === 'O-'} onChange={(e) => setGroup(e.target.value)} required />
                <BloodGroup id="A+" name="group" value="A+" label="A+" checked={blood_group === 'A+'} onChange={(e) => setGroup(e.target.value)} required />
                <BloodGroup id="A-" name="group" value="A-" label="A-" checked={blood_group === 'A-'} onChange={(e) => setGroup(e.target.value)} required />
                <BloodGroup id="B+" name="group" value="B+" label="B+" checked={blood_group === 'B+'} onChange={(e) => setGroup(e.target.value)} required />
                <BloodGroup id="B-" name="group" value="B-" label="B-" checked={blood_group === 'B-'} onChange={(e) => setGroup(e.target.value)} required />
                <BloodGroup id="AB+" name="group" value="AB+" label="AB+" checked={blood_group === 'AB+'} onChange={(e) => setGroup(e.target.value)} required />
                <BloodGroup id="AB-" name="group" value="AB-" label="AB-" checked={blood_group === 'AB-'} onChange={(e) => setGroup(e.target.value)} required />
              </div>

            </div>
          </div>
          }
          {/* Contact information */}
          {
            FormNo === 2 && <div>
              {/* your phone number */}
              <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                <label
                  className="bg-transparent outline-none text-[#478298] placeholder:text-thin">
                  Your Phone Number <span className='text-red-500'>*</span>
                </label>
                <PhoneInput
                  value={phone_number}
                  onChange={setPhone}
                  international
                  defaultCountry="BD"
                  type="tel"
                  name='phone'
                  placeholder='Phone Number'
                  id="phone"
                  className='px-5 className="bg-transparent outline-none text-[#478298] placeholder:text-thin py-3"'
                  required
                />
              </div>

              {/* emergency contact person */}
              <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                <label
                  className="bg-transparent py-3 outline-none text-[#478298] placeholder:text-thin">
                  Emergency Contact Person Name<span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  value={emergency_contact_person}
                  onChange={(e) => setEmergencycontactperson(e.target.value)}
                  placeholder='Emergency Contact Person'
                  className="bg-transparent outline-none text-primary placeholder:text-thin py-3"
                  required
                />
              </div>

              {/* emergency contact relationship */}
              <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                <label
                  className="bg-transparent outline-none text-[#478298] placeholder:text-thin">
                  Emergency Contact Relationship <span className='text-red-500'>*</span>
                </label>
                <select
                  name="person"
                  value={emergency_contact_relationship}
                  onChange={(e) => setEmergencycontactrelationship(e.target.value)}
                  id="person"
                  className="bg-transparent py-3 outline-none text-primary placeholder:text-thin"
                  required
                >
                  <option>Select your relationship</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Sister">Sister</option>
                  <option value="Brother">Brother</option>
                  <option value="Uncle">Uncle</option>
                  <option value="Aunt">Aunt</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Causin">Causin</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* emergency contact number */}
              <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                <label
                  className="bg-transparent outline-none text-[#478298] placeholder:text-thin">
                  Emergency Contact Number <span className='text-red-500'>*</span>
                </label>
                <PhoneInput
                  value={emergency_contact_number}
                  onChange={setEmergencycontactnumber}
                  international
                  defaultCountry="BD"
                  type="tel"
                  name='phone'
                  placeholder='Phone Number'
                  id="phone"
                  className='px-5 className="bg-transparent outline-none text-[#478298] placeholder:text-thin py-3"'
                  required
                />
              </div>

              {/* permanent address */}
              <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                <label
                  className="bg-transparent outline-none text-[#478298] py-2 placeholder:text-thin">
                  Permanent Address
                </label>
              </div>

              {/* country dropdown field */}

              <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                <label
                  className="bg-transparent outline-none text-[#478298] placeholder:text-thin">
                  Country <span className='text-red-500'>*</span>
                </label>

                <Select className="bg-transparent outline-none text-[#478298] placeholder:text-thin" styles={customStyles} options={options} value={country} onChange={changeHandler} required />

              </div>

              {isBangladesh && (<div>

                {/* house/holding */}
                <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                  <label
                    className="bg-transparent outline-none text-[#478298] placeholder:text-thin">
                    House/Holding <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type="number"
                    value={house}
                    onChange={(e) => setHouse(e.target.value)}
                    placeholder='House/Holding'
                    className="bg-transparent outline-none text-[#478298] placeholder:text-thin"
                    required
                  />
                </div>

                {/* Division dropdown input field */}
                <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                  <label
                    className="bg-transparent outline-none text-[#478298] placeholder:text-thin">
                    Division <span className='text-red-500'>*</span>
                  </label>
                  <select
                    name="division"
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    id="division"
                    className="bg-transparent outline-none text-primary placeholder:text-thin"
                    required
                  >
                    {
                      divisionArray.map((division, index) => (
                        <option key={index} value={division}>{division}</option>
                      ))
                    }
                  </select>

                </div>

                {/* District input field */}
                <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                  <label
                    className="bg-transparent outline-none text-[#478298] placeholder:text-thin">
                    District <span className='text-red-500'>*</span></label>
                  <select
                    name="district"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    id="district"
                    className="bg-transparent outline-none text-primary placeholder:text-thin"
                    required
                  >
                    {
                      districtArray.map((district, index) => (
                        <option key={index} value={district}>{district}</option>
                      ))
                    }
                  </select>
                </div>

                {/* post code */}
                <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                  <label
                    className="bg-transparent outline-none text-[#478298] placeholder:text-thin">
                    Post Code <span className='text-red-500'>*</span></label>
                  <input
                    type="number"
                    value={postal_code}
                    onChange={(e) => setPostal_code(e.target.value)}
                    placeholder='Post Code'
                    className="bg-transparent outline-none text-[#478298] placeholder:text-thin"
                    required
                  />
                </div>
              </div>)}

              {/* present address */}

              {isBangladesh && (
                <div>
                  <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                    <label
                      className="bg-transparent py-2 outline-none text-[#478298] placeholder:text-thin">
                      Present Address
                    </label>
                  </div>

                  {/* same as and newdetails dropdown field */}
                  <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                    <select
                      name="present_address"
                      value={present_address}
                      onChange={(e) => setPresent_address(e.target.value)}
                      id="present_country"
                      className="bg-transparent py-3 outline-none text-primary placeholder:text-thin"
                      required
                    >
                      <option>Select...</option>
                      <option value="same as parmanent">Same As Parmanent</option>
                      <option value="new details">Add New Details</option>
                    </select>
                  </div>

                  {/* present Country */}
                  <div>

                    {/* present house */}
                    {present_address === 'new details' && (
                      <div>
                        <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                          <label
                            className="bg-transparent outline-none text-[#478298] placeholder:text-thin">
                            Present House <span className='text-red-500'>*</span></label>
                          <input
                            type="text"
                            value={present_house}
                            onChange={(e) => setPresent_house(e.target.value)}
                            placeholder='House'
                            className="bg-transparent outline-none text-[#478298] placeholder:text-thin"

                          />
                        </div>

                        {/* present division  */}
                        <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                          <label
                            className="bg-transparent outline-none text-[#478298] placeholder:text-thin">
                            Present Division <span className='text-red-500'>*</span>
                          </label>
                          <select
                            name="present_division"
                            value={present_division}
                            onChange={(e) => setPresent_division(e.target.value)}
                            id="present_division"
                            className="bg-transparent outline-none text-primary placeholder:text-thin"

                          >
                            {
                              presentDivisionArray.map((division, index) => (
                                <option key={index} value={division}>{division}</option>
                              ))
                            }

                          </select>
                        </div>

                        {/* present district */}
                        <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                          <label
                            className="bg-transparent outline-none text-[#478298] placeholder:text-thin">
                            Present District <span className='text-red-500'>*</span></label>
                          <select
                            name="present_district"
                            value={present_district}
                            onChange={(e) => setPresent_district(e.target.value)}
                            placeholder='present_district'
                            className="bg-transparent outline-none text-[#478298] placeholder:text-thin"

                          >
                            {
                              presentDistrictArray.map((district, index) => (
                                <option key={index} value={district}>{district}</option>
                              ))
                            }
                          </select>
                        </div>

                        {/* present postal code */}
                        <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                          <label
                            className="bg-transparent outline-none text-[#478298] placeholder:text-thin">
                            Postal Code <span className='text-red-500'>*</span></label>
                          <input
                            type="text"
                            value={present_postal_code}
                            onChange={(e) => setPresent_postal_code(e.target.value)}
                            placeholder='Postal Code'
                            className="bg-transparent outline-none text-[#478298] placeholder:text-thin"

                          />
                        </div>
                      </div>)}
                  </div>
                </div>)}
            </div>
          }
          {/* others */}
          {
            FormNo === 3 && <div>
              {/* formal picture */}
              <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                <label
                  className="bg-transparent outline-none text-[#478298] placeholder:text-thin">
                  Formal Picture <span className='text-red-500'>*</span>
                </label>
                <div className="custom-file-input">
                  <button>Upload</button>
                  <input type="file" id="file-input" onChange={handleFormalPic} />
                </div>
              </div>

              {/* profile picture */}
              <div className="input flex flex-1  flex-col p-2 shadow  rounded-md ">
                <label
                  className="bg-transparent outline-none text-[#478298] placeholder:text-thin">
                  Profile Picture <span className='text-red-500'>*</span>
                </label>
                <div className="custom-file-input">
                  <button>Upload</button>
                  <input type="file" id="file-input" onChange={handleProfilePic} />
                </div>
              </div>

              {/* nid number */}
              <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                <label
                  className="bg-transparent outline-none text-[#478298] placeholder:text-thin">
                  NID Number <span className='text-red-500'>*</span>
                </label>
                <input
                  value={nid_number}
                  onChange={(e) => setNidnumber(e.target.value)}
                  type="number"
                  placeholder='NID Number'
                  className="bg-transparent outline-none text-primary placeholder:text-thin py-3"
                />
              </div>

              {/* nid font photo */}
              <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                <label
                  className="bg-transparent outline-none text-[#478298] placeholder:text-thin">
                  NID Font Photo <span className='text-red-500'>*</span>
                </label>
                <div className="custom-file-input">
                  <button>Upload</button>
                  <input type="file" id="file-input" onChange={handleNidFrontPic} />
                </div>
              </div>

              {/* nid back photo */}
              <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
                <label
                  className="bg-transparent outline-none text-[#478298] placeholder:text-thin">
                  NID Back Photo <span className='text-red-500'>*</span>
                </label>
                <div className="custom-file-input">
                  <button>Upload</button>
                  <input type="file" id="file-input" onChange={handleNidBackPic} />
                </div>
              </div>

            </div>
          }


        </div>


        {/* Button control */}
        <div>
          {
            FormNo === 1 && <div className='mt-10 sm:mt-10 flex justify-center items-center'>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-primary'>Next</button>
            </div>
          }
          {
            FormNo === 2 && <div className='mt-10 sm:mt-12 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-primary'>Back</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-primary'>Next</button>
            </div>
          }
          {
            FormNo === 3 && <div className='mt-10 sm:mt-12 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-primary'>Back</button>
              <button type="submit" className='px-3 py-2 text-lg rounded-md w-full text-white bg-primary'>Next</button>
            </div>
          }
        </div>
      </form>

    </div >
  )
}

export default Multipart