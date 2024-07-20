import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {storage, db} from '../../backend/setup.js'
// import Acts from '../components/Acts.jsx';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { DeleteOutline } from '@mui/icons-material';
import './pagestyles.css'













                        // LOGIC


function Admin(){
    // const fileListRef = ref(storage, "act_images/")
    const nav = useNavigate()

    const [images, setImages] = useState([{'link':'', 'cap': 'Something'}]);
    const [notices, setNotices] = useState([{'link':'', 'title':'', 'desc':''}])
    const [events, setEvents] = useState([{'link':'', 'title':'', 'desc':''}])
    const [docus, setDocus] = useState([{'name': '', 'url':''}])
    const [csvs, setCsvs] = useState([{'name':'', 'url':''}])

    const [loading, setLoading] = useState(false);
    const [txt, setTxt] = useState('')
    const [desc, setDesc] = useState('')
    const [link, setLink] = useState('')

    const [etxt, setEventTxt] = useState('')
    const [edesc, setEventDesc] = useState('')

    const [csvFile, setCsvFile] = useState(null);
    // const [errorMessage, setErrorMessage] = useState('');
    const [resText, setRestext] = useState('')


    const [fromDate, setFrom] = useState('')
    const [toDate, setTo] = useState('')


    const [valid, setValid] = useState(false)




    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setCsvFile(file);
      };
    
      
    

    async function getImages(){
        await getDocs(collection(db, 'collegecoll/images/_all_images'))
        .then((res)=>{
            const docs = []
            res.forEach(doc=>{
                docs.push({id: doc.id, ...doc.data()})
            })
            // const data = res.docs.map((doc)=>{({...doc.data(), id: doc.id})})
            console.log(docs)
            setImages(docs)
            // console.log(images)
        })
    }

    async function getNotices(){
        await getDocs(collection(db, 'collegecoll/notice/_all_notices'))
        .then((res)=>{
            const docs = []
            res.forEach(doc=>{
                docs.push({id: doc.id, ...doc.data()})
            })
            // const data = res.docs.map((doc)=>{({...doc.data(), id: doc.id})})
            console.log(docs)
            setNotices(docs)
            // console.log(images)
        })
    }
    async function getEvents(){
        await getDocs(collection(db, 'collegecoll/event/_all_events'))
        .then((res)=>{
            const docs = []
            res.forEach(doc=>{
                docs.push({id: doc.id, ...doc.data()})
            })
            // const data = res.docs.map((doc)=>{({...doc.data(), id: doc.id})})
            console.log(docs)
            setEvents(docs)
            // console.log(images)
        })
    }

    async function getDocus(){
        await getDocs(collection(db, 'collegecoll/document/_all_documents'))
        .then((res)=>{
            const docs = []
            res.forEach(doc=>{
                docs.push({id: doc.id, ...doc.data()})
            })
            // const data = res.docs.map((doc)=>{({...doc.data(), id: doc.id})})
            console.log(docs)
            setDocus(docs)
            // console.log(images)
        })
    }

    const docRef = doc(db, "collegecoll","dates")

    async function getDates(){
        const docSnap =  getDoc(docRef);
        if((await docSnap).exists()){
            console.log((await docSnap).data())
            setFrom((await docSnap).data().fromDate)
            setTo((await docSnap).data().toDate)
            // console.log((await docSnap).data().fromDate)
            // console.log((await docSnap).data().toDate)
        }else{
            alert('db error !')
        }
    }


    async function updateDates(){
        await updateDoc(doc(db, 'collegecoll', 'dates'),{
            'fromDate': fromDate,
            'toDate': toDate,
        }).then((res)=>{
            alert('Dates updated !!!')
        })
    }


    async function getCsvs(){
        await getDocs(collection(db, 'collegecoll/results/_all_results'))
        .then((res)=>{
            const docs = []
            res.forEach(doc=>{
                docs.push({id: doc.id, ...doc.data()})
            })
            // const data = res.docs.map((doc)=>{({...doc.data(), id: doc.id})})
            console.log(docs)
            setCsvs(docs)
            // console.log(images)
        })
    }



    async function deleteImage(id){
        if(confirm('Are you sure you want to delete this image ?')==true){
            await deleteDoc(doc(db, 'collegecoll/images/_all_images/', id))
        .then(()=>{
            alert('Image '+id+' deleted !')
            // console.log(res);
            location.reload()
        })
        }
        
    }   // deleteImage()


    async function deleteNotice(id){
        if(confirm('Are you sure you want to delete this image ?')==true){
            await deleteDoc(doc(db, 'collegecoll/notice/_all_notices/', id))
        .then(()=>{
            alert('Notice '+id+' deleted !')
            // console.log(res);
            location.reload()
        })
        }
        
    }   // deleteImage()


    async function deleteEvent(id){
        if(confirm('Are you sure you want to delete this image ?')==true){
            await deleteDoc(doc(db, 'collegecoll/event/_all_events/', id))
        .then(()=>{
            alert('Event '+id+' deleted !')
            // console.log(res);
            location.reload()
        })
        }
        
    }   // deleteImage()



    async function deleteDocu(id){
        if(confirm('Are you sure you want to delete this image ?')==true){
            await deleteDoc(doc(db, 'collegecoll/document/_all_documents/', id))
        .then(()=>{
            alert('Document '+id+' deleted !')
            // console.log(res);
            location.reload()
        })
        }
        
    }   // deleteImage()

    async function deleteCSV(id){
        if(confirm('Are you sure you want to delete this CSV ?')==true){
            await deleteDoc(doc(db, 'collegecoll/results/_all_results/', id))
        .then(()=>{
            alert('Document '+id+' deleted !')
            // console.log(res);
            location.reload()
        })
        }
        
    }   // deleteImage()


    // async function deleteImage(id){
    //     if(confirm('Are you sure you want to delete this image ?')==true){
    //         await deleteDoc(doc(db, 'collegecoll/images/_all_images/', id))
    //     .then(()=>{
    //         alert('Image '+id+' deleted !')
    //         // console.log(res);
    //         location.reload()
    //     })
    //     }
        
    // }   // deleteImage()








    useEffect(()=>{
        // listAll(fileListRef).then((res)=>{
        //     res.items.forEach((item)=>{
        //         // console.log(item);
        //         getDownloadURL(item).then((i)=>{
        //             console.log(i);
        //         })
        //     })
        // })
        
        
        getImages()
        getNotices()
        getEvents()
        getDocus()
        getCsvs()
        getDates()

        if(prompt('Enter Admin Security code : ')=='abc123'){
            setValid(true);
        }else{
            setValid(false);
        }


    },[])


    async function addFiles(files){
        if(images.length >= 5){alert("Can't add more than 5 images !")}else{
        setLoading(true)
        var dt = new Date();
        var now = `${dt.getDay() +'-'+ dt.getMonth() + '-' + dt.getFullYear() +'---'+ dt.getHours() + '-' + dt.getMinutes() +'-'+ dt.getMilliseconds()}`;
        files.forEach((oneFile)=>{
            var caption = prompt('Caption for this image...')
            const fileRef = ref(storage, `act_images/${oneFile.name+'%'+now}`)
            if(caption!=""){
                uploadBytes(fileRef, oneFile).then((snap)=>{
                    getDownloadURL(snap.ref).then((url)=>{
                        
                        setDoc(doc(db, 'collegecoll/images/_all_images', oneFile.name+'%'+now), {
                            link: url.toString(), 
                            cap: caption,
                        })
                        
                    })
                    setTimeout(() => {
                        alert('Image added !!')
                        location.reload()    
                    }, 6000);
                    
                })
            }
            
        })
    }
    }


    async function addPdfFiles(files){
        
        setLoading(true)
        var dt = new Date();
        var now = `${dt.getDay() +'-'+ dt.getMonth() + '-' + dt.getFullYear() +'---'+ dt.getHours() + '-' + dt.getMinutes() +'-'+ dt.getMilliseconds()}`;
        files.forEach((oneFile)=>{
            // var caption = prompt('Caption for this image...')
            const fileRef = ref(storage, `pdf_files/${oneFile.name+'%'+now}`)
                uploadBytes(fileRef, oneFile).then((snap)=>{
                    getDownloadURL(snap.ref).then((url)=>{
                        setDoc(doc(db, 'collegecoll/document/_all_documents', oneFile.name+'%'+now), {
                            name: oneFile.name,
                            url: url.toString(),
                        })
                        
                    })
                    setTimeout(() => {
                        alert('Image added !!')
                        location.reload()    
                    }, 6000);
                    
                })
            
            
        })
    }


    async function addCSVFile(){
        try {
          if (!csvFile) {
            // setErrorMessage('Please select a CSV file.');
            alert('Please select a file !')
            return;
          }

          if(resText==''){
            alert('Enter some result name !')
            return;
          }



        var dt = new Date();
        setLoading(true)
        var now = `${dt.getDay() +'-'+ dt.getMonth() + '-' + dt.getFullYear() +'---'+ dt.getHours() + '-' + dt.getMinutes() +'-'+ dt.getMilliseconds()}`;
        // files.forEach((oneFile)=>{
            // var caption = prompt('Caption for this image...')
            const fileRef = ref(storage, `csv_files/${now+'%'+csvFile.name}`)
                uploadBytes(fileRef, csvFile).then((snap)=>{
                    getDownloadURL(snap.ref).then((url)=>{
                        // setDoc(doc(db, 'collegecoll/document/_all_documents', csvFile.name+'%'+now), {
                        //     name: csvFile.name,
                        //     url: url.toString(),
                        // })
                        console.log('\n\n\n\nFILE UPLOADEDDDDDDDD _____________________________')

                        const reader = new FileReader();
                    reader.onload = async (e) => {
                        console.log(e.target.result);
                    const text = e.target.result;
                    const rows = text.split('\n');
                    
                    // Assuming the CSV has a header row
                    const headers = rows[0].split(',');
                    console.log('rows are : ',rows.length)
                    
                    // Initialize Firebase
                    // const db = firebase.firestore();

                    await setDoc(doc(db, `collegecoll/results/_all_results/`, resText),{
                        name: resText,
                        // data: data, 
                        link: url, 
                        date: now
                    }).then(()=>{


                        // alert('Results Added !')
                        // setLoading(false)
                        // setTxt('')
                        // setDesc('')
                        // setLink('')
                        // location.reload()
                    })
                    
                    
                    
                    // Parse CSV data and add to Firestore
                    for (let i = 1; i < rows.length-1; i++) {
                      const values = rows[i].split(',');
                      const data = {};
                      for (let j = 0; j < headers.length; j++) {
                        data[headers[j].toString().trim()] = values[j].toString().trim();
                      }
                      console.log(data)

                    //   console.log(data['m_name'])
                      var mname = String(data['m_name']).toUpperCase()
                      var enroll = String(data['enrollment_no']).toUpperCase()
                  
                      await setDoc(doc(db, `collegecoll/results/_all_results/${resText}/_all_entries`, `${enroll}_${mname}`),{
                        'data': data
                      }).then(()=>{
                        // alert('Result added !')
                        // setLoading(false)
                        // location.reload()
                      })
                  
                  
                    
 
                        // document.write(data);
                        // console.log(data)
                }
                setLoading(false);
                location.reload()
                alert('Result uploaded successfully!');
            
          };
    
          reader.readAsText(csvFile);













                        
                        
                    })
                    setTimeout(() => {
                        // alert('Result added !!')
                        // location.reload()    
                    }, 6000);
                    
                })
            
            
        // })













    
          
        } catch (error) {
          console.error('Error uploading CSV:', error);
        //   setErrorMessage('An error occurred while uploading the CSV.');
        }
      }
    

    var dt = new Date()
    var now = dt.getDate() + '/' + dt.getMonth() + '/' + dt.getFullYear()

    async function addNotice(){
        
        if(txt!='' && desc!=''){
            setLoading(true)
            setDoc(doc(db, 'collegecoll/notice/_all_notices/', txt),{
                title: txt, 
                desc: desc, 
                link: '', 
                date: now
            }).then(()=>{
                alert('Notice Added !')
                setLoading(false)
                setTxt('')
                setDesc('')
                setLink('')
                location.reload()
            })
        }
    }

    async function addEvent(){
        if(etxt!='' && edesc!=''){
            setLoading(true)
            setDoc(doc(db, 'collegecoll/event/_all_events/', etxt),{
                title: etxt, 
                desc: edesc, 
                link: '',
                date: now
            }).then(()=>{
                alert('Notice Added !')
                setLoading(false)
                setEventTxt('')
                setEventDesc('')
                // location.reload()
                nav('/admin')
            })
        }
    }
















                        // UI



    return(
        <div>

            {loading && <div style={{
                position: 'fixed', 
                width: '100vw', 
                height: '100vh', 
                backgroundColor: 'rgba(255, 255, 255, 0.493)',
                zIndex: '999', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center'
            }}>
                <center>
                <img src="https://64.media.tumblr.com/f69c9dfa038665a274bd438c83f9e822/tumblr_om086g92Eq1runoqyo4_250.gif" alt="" />
                </center>
            </div>}

     {(valid==true)?   

        <div style={{
            display: 'flex', 
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: 'grey', 
            padding: '1rem'
        }}>

            

            <div style={{
                fontSize: '2rem', 
                margin: '2rem',
            }}>Admin Section</div>

            <div className="image-section" style={{
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'ButtonText', 
                padding: '1rem', 
                border: '1px solid white', 
                borderRadius: '10px', 
                width: '90%', 
                marginBottom: '3rem'
                
            }}>
                <div style={{padding: '2rem', fontSize: '1.6rem'}}>Upload / Update Images</div>
                {/* <div style={{
                    // alignSelf: 'center', 
                    width: '70%',
                    // backgroundColor: 'white'
                }}> <center> <Acts/> </center> </div>     */}


                <div className="image-list">
                    <div className="images" style={{
                        margin: '1rem',
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        gap: '1rem', 
                        textAlign: 'center'
                    }}>
                        {images.map((item)=>(
                            <div key={item['link']} style={{
                                position: 'relative', 
                                border: '1px solid black', 
                                padding: '2rem',
                                borderRadius: '5px' , 
                                maxWidth: '370px'
                            }}>
                                <a href={item['link']} target='_blank'>  <img src={item['link']} style={{objectFit: 'contain'}} height={100} width={200} alt="" />     </a>
                                <div className="caption">{item['cap']}</div>
                                <div className="delete" onClick={()=>{deleteImage(item['id'])}} style={{
                                    position: 'absolute', 
                                    top: 0, 
                                    right: 0,
                                    cursor: 'pointer', 
                                    padding: '5px'
                                }}><DeleteOutline color='red'style={{color: 'red'}}/></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="add-image" style={{
                    border: '1px dashed black', 
                    padding: '1rem', 
                    borderRadius: '10px', 

                }}>
                    <input type="file" multiple={false} accept='image/png' onChange={(e)=>{addFiles(Array.from(e.target.files))}}/>
                </div>



            </div>
























                {/* THE NOTICE SECTION */}




            <div className="image-section" style={{
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'ButtonText', 
                padding: '1rem', 
                border: '1px solid white', 
                borderRadius: '10px', 
                width: '90%', 
                marginBottom: '3rem'

                
            }}>
                <div style={{padding: '2rem', fontSize: '1.6rem', color: 'black'}}>Add / Delete Notices</div>
                

                <div className="add-image" style={{
                    // border: '1px dashed black', 
                    padding: '1rem', 
                    borderRadius: '10px',
                    width: '75%'     

                }}>
                    <p style={{paddingLeft: '.5rem', color: 'black'}}>Title</p>
                    <input type="text" style={{padding: '.7rem',width: '95%', outline: 'none', outlineColor: 'pink'}} value={txt} onChange={(e)=>{setTxt(e.target.value); console.log(txt)}}/>
                </div>

                <div className="add-image" style={{
                    // border: '1px dashed black', 
                    padding: '1rem', 
                    borderRadius: '10px',
                    width: '75%'     

                }}>
                    <p style={{paddingLeft: '.5rem', color: 'black'}}>Description</p>
                    {/* <input type="text"  style={{padding: '.7rem',width: '95%', outline: 'none', outlineColor: 'pink'}} onChange={(e)=>{setTxt(e.target.value); console.log(txt)}}/> */}
                    <textarea name="" id="" cols="30" rows="10" value={desc} onChange={(e)=>{setDesc(e.target.value)}} 
                    style={{
                        padding: '.7rem', 
                        width: '95%', 
                        outline: 'none'
                    }} ></textarea>

                                   
                </div>

                <div className="add-image" style={{
                    // border: '1px dashed black', 
                    // padding: '1rem', 
                    borderRadius: '10px',
                    width: '75%', 

                }}>
                    <p style={{paddingLeft: '.5rem', color: 'black'}}>Link</p>
                    <input type="text" style={{padding: '.7rem',width: '95%', outline: 'none', outlineColor: 'pink'}} value={link}  onChange={(e)=>{setLink(e.target.value);}}/>



                    <center><div className='add-btn' onClick={()=>{addNotice()}}>ADD</div></center>
                </div>



                <p style={{paddingLeft: '.5rem', color: 'black'}}>All Notices</p>
                    <div style={{
                        display: 'flex', 
                        gap: '1rem', 
                        flexWrap: 'wrap', 
                        justifyContent: 'center'
                    }}>
                    
                        {
                            notices.map((item)=>(
                                <div key={item['title']}
                                    style={{
                                        backgroundColor: 'black', 
                                        'padding': '1rem', 
                                        display: 'flex', 
                                        justifyContent: "space-between",
                                        alignItems: 'center', 
                                        borderRadius: '7px'
                                    }}
                                >
                                    <div style={{paddingRight: '1rem'}}>{item['title']}</div>
                                    <div onClick={()=>{deleteNotice(item['id'])}}><DeleteOutline style={{cursor: 'pointer', color: 'red'}}/></div>
                                </div>
                            ))
                        }

                    </div>
            </div>



















                {/* THE EVENTS & ANNOUNCEMENTS SECTION */}




                <div className="image-section" style={{
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'ButtonText', 
                padding: '1rem', 
                border: '1px solid white', 
                borderRadius: '10px', 
                width: '90%'
                
            }}>
                <div style={{padding: '2rem', fontSize: '1.6rem', color: 'black'}}>Events & Announcements</div>
                

                <div className="add-image" style={{
                    // border: '1px dashed black', 
                    padding: '1rem', 
                    borderRadius: '10px',
                    width: '75%'     

                }}>
                    <p style={{paddingLeft: '.5rem', color: 'black'}}>Title</p>
                    <input type="text" style={{padding: '.7rem',width: '95%', outline: 'none', outlineColor: 'pink'}} onChange={(e)=>{setEventTxt(e.target.value); console.log(txt)}}/>
                </div>

                <div className="add-image" style={{
                    // border: '1px dashed black', 
                    padding: '1rem', 
                    borderRadius: '10px',
                    width: '75%'     

                }}>
                    <p style={{paddingLeft: '.5rem', color: 'black'}}>Description</p>
                    {/* <input type="text"  style={{padding: '.7rem',width: '95%', outline: 'none', outlineColor: 'pink'}} onChange={(e)=>{setTxt(e.target.value); console.log(txt)}}/> */}
                    <textarea name="" id="" cols="30" rows="10" onChange={(e)=>{setEventDesc(e.target.value)}} 
                    style={{
                        padding: '.7rem', 
                        width: '95%', 
                        outline: 'none'
                    }} ></textarea>



                    <center><div className='add-btn' onClick={()=>{addEvent()}}>ADD</div></center>

                    
                </div>


                <p style={{paddingLeft: '.5rem', color: 'black', fontSize: '1.3rem'}}>All Events</p>
                    <div style={{
                        display: 'flex', 
                        gap: '1rem', 
                        flexWrap: 'wrap', 
                        justifyContent: 'center',
                    }}>
                    
                        {
                            events.map((item)=>(
                                <div key={item['title']}
                                    style={{
                                        backgroundColor: 'black', 
                                        'padding': '1rem', 
                                        display: 'flex', 
                                        justifyContent: "space-between",
                                        alignItems: 'center', 
                                        borderRadius: '7px'
                                    }}
                                >
                                    <div style={{paddingRight: '1rem'}}>{item['title']}</div>
                                    <div onClick={()=>{deleteEvent(item['id'])}}><DeleteOutline style={{cursor: 'pointer', color: 'red'}}/></div>
                                </div>
                            ))
                        }

                    </div>
            </div>

















                {/* DOCUMENTS SECTION */}




                <div className="image-section" style={{
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'ButtonText', 
                padding: '1rem', 
                border: '1px solid white', 
                borderRadius: '10px', 
                width: '90%'
                
            }}>
                <div style={{padding: '2rem', fontSize: '1.6rem', color: 'black'}}>Documents</div>
                


                <div className="add-image" style={{
                    border: '1px dashed black', 
                    padding: '1rem', 
                    borderRadius: '10px', 

                }}>
                    <input type="file" multiple={false} accept='application/pdf' onChange={(e)=>{addPdfFiles(Array.from(e.target.files))}}/>
                </div>

                



                <p style={{paddingLeft: '.5rem', color: 'black', fontSize: '1.3rem'}}>All Events</p>
                    <div style={{
                        display: 'flex', 
                        gap: '1rem', 
                        flexWrap: 'wrap', 
                        justifyContent: 'center'
                    }}>
                    
                        {
                            docus.map((item)=>(
                                <div key={item['name']}
                                    style={{
                                        backgroundColor: 'black', 
                                        'padding': '1rem', 
                                        display: 'flex', 
                                        justifyContent: "space-between",
                                        alignItems: 'center', 
                                        borderRadius: '7px'
                                    }}
                                >
                                    <div style={{paddingRight: '1rem', color: 'white'}}> <a target='_blank' style={{color: 'white'}} href={item['url']}>{item['name']}</a> </div>
                                    <div onClick={()=>{deleteDocu(item['id'])}}><DeleteOutline style={{cursor: 'pointer', color: 'red'}}/></div>
                                </div>
                            ))
                        }

                    </div>
            </div>
























                            {/* RESULTS SECTION */}




                            <div className="image-section" style={{
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'ButtonText', 
                padding: '1rem', 
                border: '1px solid white', 
                borderRadius: '10px', 
                width: '90%'
                
            }}>
                <div style={{padding: '2rem', fontSize: '1.6rem', color: 'black'}}>Add a Result Data in CSV Format</div>
                


                <div className="add-image" style={{
                    border: '1px dashed black', 
                    padding: '1rem', 
                    borderRadius: '10px', 

                }}>
                    {/* <input type="file" multiple={false} accept='application/pdf' onChange={(e)=>{addPdfFiles(Array.from(e.target.files))}}/> */}
                    <input type="file" accept=".csv" onChange={handleFileChange} />
                </div>

                <div className="add-image" style={{
                    // border: '1px dashed black', 
                    padding: '1rem', 
                    borderRadius: '10px',
                    width: '35%',

                }}>
                    <p style={{paddingLeft: '.5rem', color: 'black'}}>Name</p>
                    <input type="text" placeholder='Enter Result Name' required style={{padding: '.7rem',width: '95%', outline: 'none', outlineColor: 'pink'}} value={resText} onChange={(e)=>{setRestext(e.target.value); console.log(resText)}}/>


                    <center><div className='add-btn' onClick={()=>{addCSVFile()}}>ADD</div></center>


                </div>



                <p style={{paddingLeft: '.5rem', color: 'black', fontSize: '1.3rem'}}>All Uploaded Results</p>
                    <div style={{
                        display: 'flex', 
                        gap: '1rem', 
                        flexWrap: 'wrap', 
                        justifyContent: 'center'
                    }}>
                    
                        {
                            csvs.map((item)=>(
                                <div key={item['link']}
                                    style={{
                                        backgroundColor: 'black', 
                                        'padding': '1rem', 
                                        display: 'flex', 
                                        justifyContent: "space-between",
                                        alignItems: 'center', 
                                        borderRadius: '7px'
                                    }}
                                >
                                    <div style={{paddingRight: '1rem', color: 'white'}}> <a target='_blank' style={{color: 'white'}} href={item['link']}>{item['name']}</a> </div>
                                    <div onClick={()=>{deleteCSV(item['id'])}}><DeleteOutline style={{cursor: 'pointer', color: 'red'}}/></div>
                                </div>
                            ))
                        }

                    </div>
            </div>








































                            {/* DOCUMENTS SECTION */}




                            <div className="image-section" style={{
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'ButtonText', 
                padding: '1rem', 
                border: '1px solid white', 
                borderRadius: '10px', 
                width: '90%'
                
            }}>
                <div style={{padding: '2rem', fontSize: '1.6rem', color: 'black'}}>Add Admission Dates</div>
                


                <div className="add-image" style={{
                    // border: '1px dashed black', 
                    padding: '1rem', 
                    borderRadius: '10px', 
                    display: 'flex', 
                    gap: '1rem'

                }}>
                    <input type="text" placeholder='Enter From Date' required style={{padding: '.7rem',width: '95%', outline: 'none', outlineColor: 'pink'}} value={fromDate} onChange={(e)=>{setFrom(e.target.value); console.log(fromDate)}}/>
                    <input type="text" placeholder='Enter To Date' required style={{padding: '.7rem',width: '95%', outline: 'none', outlineColor: 'pink'}} value={toDate} onChange={(e)=>{setTo(e.target.value); console.log(toDate)}}/>
                </div>

                




                    <div style={{
                        display: 'flex', 
                        gap: '1rem', 
                        flexWrap: 'wrap', 
                        justifyContent: 'center'
                    }}>

                    </div>
                    <center><div className='add-btn' onClick={()=>{updateDates()}}>Update</div></center>
            </div>















            
            
        </div>
        : 
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', backgroundColor: 'black', height: '100vh'}}>
            <img src="https://img.freepik.com/free-vector/flat-design-enter-sign_23-2149283137.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1713916800&semt=ais" alt="" />
        </div>
        }
        </div>
    );
}

export default Admin;