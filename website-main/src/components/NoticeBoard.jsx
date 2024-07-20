import { ArrowOutward } from "@mui/icons-material";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../backend/setup";


function NoticeBoard(){
    var width = screen.width;
    // var smol = 
    // const [smol, setSmol] = useState()

    var smol = (width<767);

    const [list, setList] = useState([
      
        {'title':'Closing of Exam form !', 'date':'10/03/2024', 'link':'https://google.com'}, 
        {'title':'Closing of Exam form !', 'date':'10/03/2024', 'link':'https://google.com'},
        {'title':'Closing of Exam form !', 'date':'10/03/2024', 'link':'https://google.com'}, 
        {'title':'Closing of Exam form !', 'date':'10/03/2024', 'link':'https://google.com'}, 
    
    ]);

    const [elist, setelist] = useState([
        {'title':'', 'date':'', 'link':''}
    ])

    async function getNotices(){
        await getDocs(collection(db, 'collegecoll/notice/_all_notices'))
        .then((res)=>{
            const docs = []
            res.forEach(doc=>{
                docs.push({id: doc.id, ...doc.data()})
            })
            // const data = res.docs.map((doc)=>{({...doc.data(), id: doc.id})})
            // console.log(docs)
            setList(docs)
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
            // console.log(docs)
            setelist(docs)
            // console.log(images)
        })
    }

    useEffect(()=>{
        getNotices()
        getEvents()
    },[])





    return(
        <div>
            <div style={{
                // height: (smol)?'150vh':'102vh', 
                // minHeight: '105vh',
                // height: '',
                width: '100%',
                minWidth: (smol)?'200':'900px',
                // height: '40vh',
                backgroundColor: 'transparent',
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'start'
                

            }}>
                <div className="title" style={{
                    fontSize: (smol)?'1.5rem':'1.8rem', 
                    fontWeight: 'bold',
                    color: 'black',
                    // paddingTop: smol?'3rem':'0rem',
                    paddingLeft: smol?'0rem':'3rem',
                    paddingTop: smol?'2rem':'3rem',
                    paddingBottom: smol?'1rem':'0rem',
                    alignSelf: smol?'center':'start', 
                    display: 'flex'
                }}>
                    <div>Notice Board</div>
                    <div style={{marginLeft: '2rem', cursor: 'pointer'}}><ArrowOutward  /></div>
                </div>

                <div className="board" style={{
                    backgroundColor: 'transparent', 
                    width: '95%', 
                    // height: '100%', 
                    minHeight: '70vh',
                    margin: '2%',
                    marginBottom: '3%', 
                    borderRadius: '10px', 
                    overflowY: 'scroll',
                    scrollbarWidth: 'none', 
                    border: '1px solid black'
                }}>

                    <div className="list" style={{padding: '1rem', 
                        // overflowY: 'scroll',
                        // overflow: 'clip',
                        // overflowWrap: 'break-word',
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        justifyContent: smol?'center':'start',
                        textOverflow: 'clip'
                        }}>
                        {
                            list.map((item)=>(
                                <div key={item['id']} className="list-item"
                                    style={{
                                        height: '6rem',
                                        // width: '10em',
                                        fontSize: '1.3rem',
                                        padding: '1rem', 
                                        paddingRight: '5rem',
                                        // border: '1px solid white',
                                        borderRadius: '10px',
                                        margin: '1rem', 
                                        display: 'flex', 
                                        flexDirection: 'column',
                                        justifyContent: 'space-between', 
                                        textOverflow: 'clip',
                                        textWrap: 'wrap', 
                                        // backgroundColor: '#cc9a04',
                                        backgroundColor: '#800000cf'
                                    }}
                                >
                                    <div>
                                    <a href={item['link']} style={{color: 'white', textOverflow: 'clip'}} >{item['title']}</a>
                                    </div>
                                    <div >
                                        {item['date']}
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>



                <div className="title" style={{
                    fontSize: (smol)?'1.5rem':'1.8rem', 
                    fontWeight: '600',
                    color: 'black',
                    // paddingTop: smol?'3rem':'0rem',
                    paddingLeft: smol?'0rem':'3rem',
                    paddingTop: smol?'2rem':'3rem',
                    paddingBottom: smol?'1rem':'0rem',
                    alignSelf: smol?'center':'start', 
                    textAlign: 'center' ,
                    display: 'flex', 
                    alignItems: 'center'
                    
                }}>
                    <div id="news">Events & Announcements</div>
                    <div style={{marginLeft: '2rem', cursor: 'pointer'}}><ArrowOutward/></div>
                </div>

                <div className="board" style={{
                    backgroundColor: 'transparent', 
                    width: '95%', 
                    // height: '100%', 
                    minHeight: '70vh',
                    margin: '2%',
                    marginBottom: '3%', 
                    borderRadius: '10px', 
                    overflowY: 'scroll',
                    scrollbarWidth: 'none', 
                    border: '1px solid black'
                }}>

                    <div className="list" style={{padding: '1rem', 
                        // overflowY: 'scroll',
                        // overflow: 'clip',
                        // overflowWrap: 'break-word',
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        justifyContent: smol?'center':'start',
                        textOverflow: 'clip', 
                        }}>
                        {
                            elist.map((item)=>(
                                <div key={item['id']} className="list-item"
                                    style={{
                                        height: '6rem',
                                        // width: '10em',
                                        fontSize: '1.3rem',
                                        padding: '1rem', 
                                        paddingRight: '5rem',
                                        // border: '1px solid white',
                                        borderRadius: '10px',
                                        margin: '1rem', 
                                        display: 'flex', 
                                        flexDirection: 'column',
                                        justifyContent: 'space-between', 
                                        textOverflow: 'clip',
                                        textWrap: 'wrap', 
                                        backgroundColor: '#cc9a04',
                                        color: 'black'
                                    }}
                                >
                                    <div>
                                    <a href={item['link']} style={{color: 'black', textOverflow: 'clip'}} >{item['title']}</a>
                                    </div>
                                    <div>
                                        {item['date']}
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

                




            </div>
        </div>
    )
}


export default NoticeBoard