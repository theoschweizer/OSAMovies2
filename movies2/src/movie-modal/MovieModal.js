import React from 'react'
import kungfu from './img/kung_fu_panda_3.jpg'
import kungfu_logo from './img/kung_fu_panda_3_logo.webp'

function MovieModal() {
  console.log(kungfu);
  console.log(kungfu_logo)
  // var obj = document.createElement('kungfu');
  return (
    <><div className={kungfu}>
      {/* <img src={kungfu} alt="Kung Fu Panda 3" height={500} width={1000} /> */}
      <img
          src={kungfu}
          alt="Kung Fu Panda 3"
          style={{
            height:"500px",
            width: "1000px",
            position:'absolute',
          }}
        />
    </div><div className={kungfu_logo}>
        {/* <img src={kungfu_logo} alt="Kung Fu Panda 3 Logo" height={140} width={320} /> */}
        <img
          src={kungfu_logo}
          alt="Kung Fu Panda 3 Logo"
          style={{
            height:"140px",
            position: 'absolute',
            width: "320px",
            display:'flex',
            marginTop: "80px",
            marginLeft: "40px"
          }}
        />
      </div></>
  
   
  )
}


export default MovieModal