import React,{useEffect,useState,useRef} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Onemusic = () => {
    const {id} = useParams()
    const [onedata, setonedata] = useState({})
    const [isplaying, setisplaying] = useState(false)
    console.log(id);
     const audioref = useRef()
     console.log(audioref.current)

     useEffect(() => {
     axios.get(`https://robo-music-api.onrender.com/music/my-api/${id}`)
     .then((res)=>{
        console.log(res.data);
        setonedata(res.data.data[0])
        console.log(onedata);
     }).catch((err)=>{
        console.log(err);
     })
       
     }, [])
     
     const playaudio = ()=>{
        let music = audioref.current
        console.log(music);
       if (!isplaying) {
        music.play()
        setisplaying(true)
       }else{
        music.pause()
        setisplaying(false)
       }
     }


  return (
    <div className='big-onemusic'>
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
        <div className='onemusic'>
        <audio ref={audioref} src={onedata.songUrl}></audio>
        <img src={onedata.songImage} alt="" />
        <h1 className='mysongtitle'> Songname: {onedata.songTitle}</h1>
        <p className='myartist'>Artist: {onedata.artistName}</p>
        <button className='btn btn-success' onClick={()=>playaudio()}>{isplaying? <i className="fa fa-pause"></i>: <i className="fa fa-play"></i>}</button>


        </div>

    </div>
  )
}

export default Onemusic