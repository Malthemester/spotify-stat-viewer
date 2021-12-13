import { useEffect, useState } from "react";
import followersImg from '../Followers.png'
import DisplayTop from "./Top";

const ENDPOINT_ME = "https://api.spotify.com/v1/me";

function Stats() {
    const [image, setImage] = useState(null)
    const [userName, setUserName] = useState("")
    const [followers, setFollowers] = useState(0)

    let access_token = localStorage.getItem("accessToken")

    useEffect(() => {
        fetch(ENDPOINT_ME, {
            headers: {
                Authorization: "Bearer " + access_token,
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then(data => {
                setUserName(data.display_name)
                setFollowers(data.followers.total)
                setImage(data.images[0].url)
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <div className="header">
                <img className="userImage" src={image} />
                <h1>{userName}</h1>
                <img className="followerImage" src={followersImg} />
                <p className="followerText">{followers}</p>
            </div>

            <DisplayTop></DisplayTop>
        </div>
    )

}

export default Stats;
