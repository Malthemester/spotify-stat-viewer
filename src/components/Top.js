import { useEffect, useState } from "react/cjs/react.development";
import { useSpring, animated } from "react-spring";

function DisplayTop() {

    const [topList, setTopList] = useState(null)

    let timeRange = 'long_term'
    let type = 'tracks'

    const contentProps = useSpring({
        to: async (next, cancel) => {
            await next({ color: 'green', y: -0, delay: 0, opacity: 0, immediate: true })
            await next({ y: -600, delay: 0, opacity: 0 })
            await next({ y: -480, delay: 50, opacity: 1 })
            await next({ y: -360, delay: 400 })
            await next({ y: -240, delay: 400 })
            await next({ y: -120, delay: 400 })
            await next({ y: 0, delay: 400 })
        }
    })


    let access_token = localStorage.getItem("accessToken")

    function handleChange(e) {
        timeRange = e.target.value
    }

    function fetchTop() {
        const ENDPOINT_TOP_TRACKS = `https://api.spotify.com/v1/me/top/${type}?limit=5&time_range=${timeRange}`;

        fetch(ENDPOINT_TOP_TRACKS, {
            headers: {
                Authorization: "Bearer " + access_token,
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then(data => {
                setTopList(fillTop(data))
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        // fetchTop()
    }, [])

    function fillTop(data) {
        let topList = []
        data.items.forEach((track, i) => {

            let paragrafs = []
            let col = []
            let artists = ''

            track.artists.forEach((artist, i) => {
                artists += (i > 0 ? ', ' : '') + artist.name
            })

            col.push(<p className="topNumber">{i + 1}</p>)

            paragrafs.push(<p key={i}>{track.name}</p>)
            paragrafs.push(<p key={'by' + i}>{artists}</p>)

            col.push(<div key={'margin' + i} className="margin" >{paragrafs}</div>)
            col.push(<img key={'tImage' + i} className="trackImage" src={track.album.images[1].url} />)

            topList.push(<div key={'top' + i} className="track">{col}</div>)
        })

        return (
            <animated.div style={contentProps}>
                {topList}
            </animated.div>
        )
    }

    return (
        <div>
            <div className="selectText">
                <p>Your's top artists or tracks for a</p>
                <select onChange={handleChange} name="Time period" id="time_period" placeholder="Source Type">
                    <option value="long_term">long period</option>
                    <option value="medium_term">medium period</option>
                    <option value="short_term">short period</option>
                </select>

                <button className="buttonStart" onClick={() => {
                    // setDisplay(a => !a)
                    fetchTop()
                }}>Go</button>
            </div>

            <div style={contentProps} className="maskTop">
                {topList}
            </div>
        </div>
    )
}

export default DisplayTop