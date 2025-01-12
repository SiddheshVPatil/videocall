import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"


function Room() {

    const { roomId } = useParams();

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
                    url: `https://videocallmedemo.onrender.com/room/${roomId}`
                }
            ],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall
            }
        })
    }


    return (
        <div>
            <div ref={mymeeting}/>
        </div>
    )
}

export default Room
