import './App.css'

function App() {

  return (
    <>
    <div className='container-fluid' >
      <div className="row d-flex justify-content-center align-items-center "style={{height:"100vh"}}>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className='p-3 border border-2 border-dark rounded'>
            <div className='d-flex justify-content-between'>
              <h4 className='inputlabels'  >Full Name</h4>
              <input type="text" className='form-control w-50 ' />
            </div>

            <div className='d-flex justify-content-between mt-2'>
              <h4 className='inputlabels'  >Email Address</h4>
              <input type="text" className='form-control w-50 ' />
            </div>

            <div className='d-flex justify-content-between mt-2'>
              <h4 className='inputlabels'   >Description</h4>
             <textarea name="" id="" className='form-control w-50 '></textarea>
            </div>

            <div className='d-flex justify-content-between mt-2'>
              <div className='d-flex justify-content-center align-items-center'>
              <h4 className='inputlabels'  >Upload Photos</h4>
              </div>
              <label htmlFor="" className='w-50'>
                <input type="file" />
                 <img src="https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Image-Transparent-Free-PNG.png" alt="" className='w-100' />
              </label>
                
              
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
