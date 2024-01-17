import logo from './logo.svg';
import './App.css';
import {useRef, useState} from 'react';
import { MdOutlineFileUpload } from "react-icons/md";
import { TbPdf } from "react-icons/tb";
import { TbPng } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

function App() {

  const [files,setFiles] = useState([])

  console.log(files)

  const hiddenFileInput = useRef(null)

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    
    setFiles([...files,...event.target.files])
  }

  const handlePress = (val) => {
    setFiles((files) => {
      return files.filter((value,i) => i !== val)
    })
  }
  
  return (
    <div className='parent-tag'>
        <div className='child-tag'>
          <button onClick={handleClick} className='button-upload'><MdOutlineFileUpload className='logo' size={25} color='white'/><br></br>
           <span className='text' style={{color:'white'}}>Select a file or drop it here!</span>
          </button>
          <input 
           accept="image/png,application/pdf"
          multiple
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }} 
      />
          <h4 className='document'>Upload documents</h4>
          <p style={{color:'white',textAlign:'left',marginLeft:'26px',marginTop:'0'}}>( Only png and pdf )</p>
          {
            files.map((val,ind) => (
              <div key={ind} className='control'>
                <div style={{display:'flex'}}>
                {val.type == 'image/png' ? <span style={{padding:'10px'}}>{<TbPng style={{background:'rgba(255,255,255,0.5)',borderRadius:'5px'}} size={30} color='white'/>}</span> : <span  style={{padding:'10px'}}>{<TbPdf style={{background:'rgba(255,255,255,0.5)',borderRadius:'5px'}} size={30} color='white'/>}</span>}
                <p style={{color:'white',fontSize:'1rem'}}> {val.name}</p>
                </div>
                <div>
                <span onClick={(e) => {handlePress(ind)}} style={{marginTop:'15px',cursor:'pointer'}}>{<IoClose  style={{marginTop:'15px'}} color='white' size={20}/>}</span>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  );
}

export default App;
