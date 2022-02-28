import { useEffect, useState } from "react";
import ShowTop from '../components/ShowTop'

const ENDPOINT_ME = "https://api.spotify.com/v1/me";

function Stats() {
    const [image, setImage] = useState(null)
    const [userName, setUserName] = useState("Your username")

    useEffect(() => {
        let access_token = localStorage.getItem("accessToken")
        fetch(ENDPOINT_ME, {
            headers: {
                Authorization: "Bearer " + access_token,
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setUserName(data.display_name)
                setImage(data.images[0].url)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <div className="header">
                <img alt="userImg" className="userImage" src={image} />
                <h1>{userName}</h1>
            </div>

            <ShowTop></ShowTop>
        </div>
    )
}

export default Stats;
