import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import Props from './Props'
import { useNavigate } from 'react-router-dom'


const Fetch = () => {

  const navigate = useNavigate()
    const [islaoding, setislaoding] = useState(false)
    const [data, setdata] = useState([])
    const [playing, setplaying] = useState(null)
    const useref = useRef(new Audio())
    console.log(useref.current);
  
  

    useEffect(() => {
      axios.get("https://robo-music-api.onrender.com/music/my-api")
      .then((res)=>{
        setislaoding(true)
        setdata(res.data)
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
      })
    
     
    }, [])

    const next = (ele)=>{
      console.log(ele);
    let id = ele.id
    navigate(`/${id}`)

    }

    const playSong = (i,song, ev) => {
     ev.stopPropagation()
   const audio = new Audio(song)
    if (playing === i) {
    if (!useref.current.paused) {
    useref.current.pause()
    setplaying(null)
  }
  
   }else{
   if (useref.current) {
    useref.current.pause()
  }
  useref.current = audio
  useref.current.play()
  setplaying(i)
  }

 };
  
    
  return (
    <div className='fecth'>
      <div className='side-div'>
      <div className='inner-one'>
        <div className='home'>
        <i className="fa fa-home"></i>
          <p>Home</p>
        </div>
        <div className='home'>
        <i className="fa fa-search"></i>       
         <p>Search</p>
        </div>
      </div>

        <div className='inner-two'>
          <div className='icon-div'>

            <div className='clone'>
            <i className="fa fa-clone"></i>
            <p>Your Library</p>
            </div>
            <div className='plus'>
            <i className="fa fa-plus"></i>
            <i className="fa fa-arrow-right"></i>
            </div>
          </div>

        </div>
      </div>
        <div className='biggest'>
        <h1 className='app-h1'>Made for you</h1>
        <div className='big-card'>
        { !islaoding ? <div className="spinner-grow loading " role="status">
          <span className="visually-hidden">Loading...</span>
        </div> :data.map((el,i)=>(
            <div key={i}>
              <div onClick={()=>next(el)} className='card' >
                <div className='card-img'>
           <Props image={el.songImage} />

                </div>
                <audio ref={useref} src={el.songUrl}></audio>
                <button className='btn btn-success butoon' onClick={(event) => playSong(i, el.songUrl, event)}> {playing? <i className="fa fa-pause"></i>: <i className="fa fa-play"></i>}</button>
            <Props text={el.artistName}/>
            <Props title={el.songTitle}/>
            <Props cont={el.albumName}/>
            <Props cont={el.release}/>

            </div>
            </div>
        ))}
        </div>
        </div>
    </div>
  )
}

export default Fetch