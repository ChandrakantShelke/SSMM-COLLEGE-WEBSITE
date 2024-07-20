import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import {storage, db} from '../../backend/setup.js'
import './pagestyles.css';
import {useNavigate} from 'react-router-dom'
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

function Results(){
    const [loading, setLoading] = useState(false);
    const [mname, setMname] = useState('')
    const [enroll, setEnroll] = useState('')
    const [visible, setVisible] = useState(false)
    const [op, setOp] = useState('Select an examination')
    const [result, setResult] = useState({'subject':'abc'})
    const [resBtn, setResBtn] = useState(true)

    const [ops, setOps] = useState([''])

    async function getOps(){
        await getDocs(collection(db, 'collegecoll/results/_all_results'))
        .then((res)=>{
            const docs = []
            res.forEach(doc=>{
                docs.push({id: doc.id, ...doc.data()})
            })
            // const data = res.docs.map((doc)=>{({...doc.data(), id: doc.id})})
            console.log(docs)
            // setOps(docs)
            const abc = [{'id':'Select an examination'}, ...docs];
            setOps(abc)
            // console.log(images)
        })  
    }   // getOps()

    const nav = useNavigate()

    useEffect(()=>{
        getOps()


        const handleReload = (e) => {
            e.preventDefault();
            e.returnValue = '';
            nav('/')
            // window.location.replace('https://localhost:5173')
            // window.removeEventListener('beforeunload', handleReload)
        }

        window.addEventListener('beforeunload', handleReload)
        
        return()=>{
            window.removeEventListener('beforeunload', handleReload)
            
        }


    },[nav])

    



    function printResult(){
        // setResBtn(false)
        window.print();
    }

    

    async function showResult(){
        setLoading(true)
        if(mname=='' || enroll=='' || op=='Select an examination'){
            alert('Enter all fields please !')
            setLoading(false)
            return
        }

        // setTimeout(() => {
        //     setLoading(true);
        // }, 1000);



        const docc = doc(db, `collegecoll/results/_all_results/${op}/_all_entries`, `${enroll}_${mname}`)
        const docSnap = await getDoc(docc)

        if(docSnap.exists()){
            // alert(docSnap.data())
            setResult(docSnap.data()['data'])
            console.log(result['name'])
            alert('Found result : '+result['m_name'])
            setLoading(false)
            setVisible(true)
        }else{
            alert('Result not found !')
            setLoading(false)
        }

    }   // showResult()




    function handleChange(event){
        setOp(event.target.value);
        console.log(op)
        // console.log(event.target.value)
    }



    return(
        <div>
            <Header/>
        <div className='resclass'>

            {loading && <div style={{
                    position: 'fixed', 
                    width: '100vw', 
                    height: '100vh', 
                    backgroundColor: 'rgba(255, 255, 255, 0.493)',
                    zIndex: '999', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                }}>
                <center>
                <img src="https://64.media.tumblr.com/f69c9dfa038665a274bd438c83f9e822/tumblr_om086g92Eq1runoqyo4_250.gif" alt="" />
                </center>
            </div>}


            {
                visible 
                && 
                <div style={{
                    position: 'fixed', 
                    backgroundColor: 'black', 
                    top: '0', 
                    left: '0', 
                    width: '100%', 
                    height: '100%',
                    // display: 'none'
                    // padding: '1rem', 
                    // margin: '1rem', 
                    display: 'flex',
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    textAlign: 'center'
                }}>
                    <div style={{fontSize: '1.3rem'}}>SHRI. SHETH MURLIDHARJI MANSINGKA ARTS, SCIENCE & COMMERCE COLLEGE, PACHORA</div>
                    <div>
                        <div style={{
                            // backgroundColor: 'white',
                            padding: '2rem',
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            width: '75vw',
                        }}>
                            <div>
                                Mother&apos;s Name : {result['m_name']}
                            </div>
                            <div>
                                Student Name : {result['name']}
                            </div>
                        </div>
                        {Object.entries(result).map(([item, value])=>(
                            (item!='grade' && item!='enrollment_no' && item!='m_name' && item!='name' && item!='percent') && 
                           <center key={item}> <div key={item} style={{
                                fontSize: '1.2rem',
                                border: '1px solid white', 
                                padding: '1rem',
                                width: '50%',
                                alignSelf: 'center'
                            }}>
                                {item} : {value}
                            </div></center>
                            
                        ))}
                        <div style={{
                            padding: '2rem'
                        }}>
                            Percentage : {result['percent']} %
                        </div>


                        {(resBtn==true) && <center><div onClick={()=>{printResult()}} className="print-result">
                            Print Result
                        </div></center>}
                    </div>
                </div>
            }



            <div style={{
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center',
                gap: '2rem',
                margin: '1rem',
                padding: '1rem',
                height: '70vh', 
                textAlign: 'center', 
            }}>
                
                <div style={{fontSize: '1.4rem', border: '2px solid black', padding: '1rem', borderRadius: '5px', paddingLeft: '5rem', paddingRight: '5rem', color: 'black'}}>RESULTS</div>

                <div>
                    {/* Mother&apos;s Name<br />  */}
                    <input type="text" placeholder="Mother's Name" value={mname} onChange={(e)=>{setMname(e.target.value)}}  style={{fontSize: '.9rem', textAlign: 'center', padding: '.7rem', borderRadius: '10px'}} />
                </div>
                <div>
                    {/* Enrollment Number : <br /> */}
                    <input type="text" placeholder="Enrollment Number" value={enroll} onChange={(e)=>{setEnroll(e.target.value)}}  style={{fontSize: '.9rem', textAlign: 'center', padding: '.7rem',borderRadius: '10px'}} />
                </div>

                <div style={{}}>
                    <select name="" id="result-set" onChange={handleChange} value={op}>
                       {
                        ops.map((item)=>(
                            <option style={{padding: '1rem'}} value={item['id']}  key={item['id']}> {item['id']} </option>
                        ))
                       } 
                    </select>
                </div>

                <div className="get-result-btn" onClick={()=>{showResult()}}>
                    Get Result
                </div>



            </div>






        </div>

        <Footer/>
        </div>
    )
}

export default Results;