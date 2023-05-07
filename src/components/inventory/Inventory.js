import React from 'react'
import imag1 from "../static/imag1.png"
import imag2 from "../static/imag2.png"
import img3 from "../static/img3.png"
import img4 from "../static/img4.png"
import img5 from "../static/img5.png"
import img6 from "../static/img6.png"

const Inventory = () =>   {
  const styles = {
    
    background: "#0f0",
    fontSize: "15px",
    
    m: "auto"
};



  return (
<div className='bg-light'>

  <br/>
    {/* <div className="card text-bg-dark mb-3" style={styles} >
  <div className="card-header text-center">Header</div>
  <div className="card-body text-center">
    <h5 className="card-title text-center">Dark card title</h5>
    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}
<img src={imag1} width={"100%"}/>

<img src={imag2} width={"100%"}/>
<img src={img3} width={"100%"}/>
<img src={img4} width={"100%"}/>
<img src={img5} width={"100%"}/>
<img src={img6} width={"100%"}/>

{/* <figure className="text-center">
  <blockquote className="blockquote" style={{fontSize:"40px"}}>
    <p>من نحن</p>
  </blockquote>
  <blockquote className="blockquote" style={{fontSize:"30px"}}>
    مرحبا شركة ايتس
  </blockquote>
</figure> */}

<div class="d-grid gap-2 col-6 mx-auto mb-4 mt-5">
{/* <button type="button" className="btn btn-warning btn-lg " style={{alignItems: "center"}}>للتسجيل كامستثمر</button> */}


<div className="container py-5 px-70 mx-0 min-w-full flex flex-col items-center">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9lal1wXyV2WjaDBtAU_tn0jo1x21j7uDvqEh10u7-6XdGLA/viewform?usp=sf_link" className="bg-yellow-300 text-white font-bold py-2 px-6 rounded" tabindex="-1" role="button" aria-disabled="true">للتسجيل كامستثمر اضغط هنا</a>
</div>

</div>
<br/>
</div>

  )
}

export default Inventory