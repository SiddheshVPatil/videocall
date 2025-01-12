import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"


function Room() {

    const { roomId } = useParams();
    const [id, setId] = useState();

    const mymeeting = async (element) => {
        const appID = 614133477;
        const serverSecret = "dd26883cb1d86fb1d56fee1ba8fa7323";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "sid")
    
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container:element,
            sharedLinks:[
                {
                    name:'Copy Link',
                    url: `http:localhost:3000/room/${roomId}`
                }
            ],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall
            }
        })
    }


    return (

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 p-4">
      <div className="max-w-7xl mx-auto">
        <div 
           ref={mymeeting}
          className="aspect-video w-full bg-black rounded-xl shadow-2xl overflow-hidden border border-gray-700"
         />
       </div>
    </div>

        // <div>
        //     {/* <input value={id} onChange={e=>setId(e.target.value)} type="text" placeholder='room id'/> */}
        //     <div ref={mymeeting}/>
        // </div>
    )
}

export default Room



