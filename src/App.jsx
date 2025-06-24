import { useEffect, useState } from 'react'
import './App.css'

function App() {
  //img
  const [preview, setPreview] = useState("")
  // details
  const [details, setDetails] = useState({
    name: "",
    email: "",
    description: "",
    photo: ""
  })
  console.log(details);

  const handleCancel = () => {
    setDetails({
      name: "",
      email: "",
      description: ""
    })
    setPreview("")
  }


  const handleSubmit = ()=>{
    const { name,email,description,photo} = details

    if(!name || !email || !description || !photo){
      alert("Fill the form completely")
    }else{
      alert("Details successfully submitted")
    }
  }
  

  const Profile = (e)=>{
    setDetails({...details,photo:e.target.files[0]})
  }

  useEffect(()=>{
    if(details.photo){
      setPreview(URL.createObjectURL(details.photo))
    }
  },[details.photo])


  return (
    <>
      <div className='container-fluid' >
        <div className="row d-flex justify-content-center align-items-center " style={{ height: "100vh" }}>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className='p-3 border border-2 border-dark rounded'>
              <div className='d-flex justify-content-between'>
                <h4 className='inputlabels'  >Full Name</h4>
                <input type="text" className='form-control w-50 ' value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} />
              </div>

              <div className='d-flex justify-content-between mt-2'>
                <h4 className='inputlabels'  >Email Address</h4>
                <input type="email" className='form-control w-50 ' value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} />
              </div>

              <div className='d-flex justify-content-between mt-2'>
                <h4 className='inputlabels'   >Description</h4>
                <textarea name="" id="" className='form-control w-50 ' value={details.description} onChange={(e) => setDetails({ ...details, description: e.target.value })}></textarea>
              </div>

              <div className='d-flex justify-content-between mt-2'>

                {/* for imgage */}
                <div className="row ">
                  <div className="col-5 d-flex justify-content-center align-items-center">
                    <div className=''>
                      <h4 className='inputlabels'  >Upload Photos</h4>
                    </div>
                  </div>
                  <div className="col-2">

                  </div>
                  {/* img section */}
                  <div className="col-4 ">
                    <label htmlFor="profilepic" className='w-100' onChange={(e)=>Profile(e)} >
                      <input type="file" id='profilepic' style={{ display: "none" }} />
                      <img src={preview?preview : "https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Image-Transparent-Free-PNG.png" } alt="" className='w-100 pe-3' />
                    </label>
                  </div>
                  <div className='col-1'></div>
                </div>

              </div>

              {/* buttons */}
              <div className='d-flex justify-content-around mt-4'>
                <button className='btn btn-success px-3 py-1 rounded' onClick={handleSubmit}>Submit</button>
                <button className='btn btn-danger px-3 py-1 rounded' onClick={handleCancel}>Cancel</button>
              </div>
            </div>

          </div>
          <div className="col-md-4"></div>



        </div>
      </div>
    </>
  )
}

export default App
