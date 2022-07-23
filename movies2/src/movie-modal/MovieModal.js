import React from 'react'
import kungfu from './img/kung_fu_panda_3.jpg'
import kungfu_logo from './img/kung_fu_panda_3_logo.webp'
import plus_icon from './img/plus_icon.png'
import play_button from './img/play_button.png'

function MovieModal() {
  console.log(kungfu);
  console.log(kungfu_logo)
  // var obj = document.createElement('kungfu');
  return (
    <>
    <div className={kungfu}>
      {/* <img src={kungfu} alt="Kung Fu Panda 3" height={500} width={1000} /> */}
      <img
          src={kungfu}
          alt="Kung Fu Panda 3"
          style={{
            height:"525px",
            width: "1150px",
            position:'absolute',
            borderRadius: '0px',
            // border: '10px solid rgba(255,255,255,.5)', 
            // padding: '10px',
            // borderWidth: '10px 0',
            boxShadow: '0px 0px 70px 10px rgba(0,0,0,0.6)',
            backdropFilter: 'blur(1000px)',
            backdropFilter: 'opacity(100%)'
          }}
        />
    </div>

    <div className={kungfu_logo}>
        {/* <img src={kungfu_logo} alt="Kung Fu Panda 3 Logo" height={140} width={320} /> */}
        <img
          src={kungfu_logo}
          alt="Kung Fu Panda 3 Logo"
          style={{
            height:"160px",
            position: 'absolute',
            width: "320px",
            display:'flex',
            marginTop: "82px",
            marginLeft: "50px"
          }}
        />
      </div>

      <div className={plus_icon}>
      {/* <img src={kungfu} alt="Kung Fu Panda 3" height={500} width={1000} /> */}
      <img
          src={plus_icon}
          alt="Plus Icon"
          style={{
            height:"55px",
            width: "55px",
            position:'absolute',
            display:'flex',
            marginTop: "515px",
            marginLeft: "150px"
          }}
        />
    </div>

    <div className='close_icon'>
      {/* <img src={kungfu} alt="Kung Fu Panda 3" height={500} width={1000} /> */}
      <img
          src={plus_icon}
          alt="Plus Icon"
          style={{
            height:"55px",
            width: "55px",
            position:'absolute',
            display:'flex',
            transform: 'rotate(45deg)',
            marginTop: "30px",
            marginLeft: "20px"
          }}
        />
    </div>

    <div className={play_button}>
      {/* <img src={kungfu} alt="Kung Fu Panda 3" height={500} width={1000} /> */}
      <img
          src={play_button}
          alt="Play Button"
          style={{
            height:"75px",
            width: "75px",
            position:'absolute',
            display:'flex',
            marginTop: "505px",
            marginLeft: "50px"
          }}
        />
    </div>
      
      {/* <button>
        style={{
            border: 'none',
            display: 'inline-block',
            padding: '8px 16px',
            verticalAlign: 'middle',
            overflow: 'hidden',
            textDecoration: 'none',
            color: 'inherit',
            backgroundColor: 'inherit',
            textAlign: 'center',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
        }}
        </button> */}

      </>
  
   
  )
}


export default MovieModal