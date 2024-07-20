import { useNavigate } from "react-router-dom";
import SwipeableTemporaryDrawer from "./Drawer";

function Header(){
    const collegeNameEng = "SHRI. SHETH MURLIDHARJI MANSINGKA ARTS, SCIENCE & COMMERCE COLLEGE, PACHORA";
    const nav = useNavigate()
    return(
        <center className="container-fluid" style={{backgroundColor: '#B2BEB5'}}>
        <div className="" style={{
            display: "flex", 
            justifyContent: 'space-between', 
            alignItems: 'center',  
            padding: '1.5rem',
            paddingLeft: '3rem',
            paddingRight: '3rem', 
            marginBottom: '1rem',
            border: '1px solid black'
            // color: 'white'
        }}>
            {/* <div className="headermain"> */}
            
        <div className="logo" id='sdf' style={{cursor: 'pointer'}} onClick={()=>{nav('/')}}>
          <img className='logoimg' src="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/logoo_copy.png?alt=media&token=44f50c71-415e-40b5-bb3d-d7af73810204" alt="" />
          {/* <img className='logoimg' src="src\assets\logoo.png" alt="" /> */}
        </div> 

        {(screen.width<767)?<></>:<div style={{
            fontSize: '1.2rem',
            letterSpacing: '1px', 
            backgroundColor: '#800000cf', 
            // backgroundColor: 'grey',
            padding: '1rem', 
            color: 'white', 
            borderRadius: '10px'
        }}>
            {collegeNameEng}
        </div>}
        
        
        <div>
            <SwipeableTemporaryDrawer/>
        </div>
        
      
      </div>
            
      </center>

    )
}

export default Header;