import { useEffect, useState } from "react/cjs/react.development";
import { useSpring, animated } from "react-spring";

let timeRange = 'long_term'
let type = 'tracks'
function DisplayTop() {

    const [topList, setTopList] = useState(null)


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

    function handleChangeTimeRange(e) {
        timeRange = e.target.value
    }

    function handleChangeType(e) {
        type = e.target.value
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
                console.log(data)
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

        if (type == 'tracks') {
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

                topList.push(<a href={track.external_urls.spotify} target="_blank" key={'top' + i} className="track">{col}</a>)
            })
        }
        else {
            data.items.forEach((artist, i) => {

                let paragrafs = []
                let col = []
                let genres = ''

                artist.genres.forEach((artist, i) => {
                    genres += (i > 0 ? ', ' : '') + artist
                })

                col.push(<p className="topNumber">{i + 1}</p>)

                paragrafs.push(<a key={i}>{artist.name}</a>)
                paragrafs.push(<p key={'genres' + i}>{genres}</p>)

                col.push(<div key={'margin' + i} className="margin" >{paragrafs}</div>)
                col.push(<img key={'tImage' + i} className="trackImage" src={artist.images[1].url} />)

                topList.push(<a href={artist.external_urls.spotify} target="_blank" key={'top' + i} className="track">{col}</a>)
            })
        }

        return (
            <animated.div style={contentProps}>
                {topList}
            </animated.div>
        )
    }

    return (
        <div>
            <div className="selectText">
                <div className="line">
                    <p>Your's top
                        <select onChange={handleChangeType} name="Time period" id="time_period" placeholder="Source Type">
                            <option value="tracks">tracks</option>
                            <option value="artists">artists</option>
                        </select> for a
                        <select onChange={handleChangeTimeRange} name="Time period" id="time_period" placeholder="Source Type">
                            <option value="long_term">long period</option>
                            <option value="medium_term">medium period</option>
                            <option value="short_term">short period</option>
                        </select>
                    </p>

                    <button className="buttonStart" onClick={() => {
                        fetchTop()
                    }}>Show</button>
                </div>
            </div>

            <div style={contentProps} className="maskTop">
                {topList}
            </div>
        </div>
    )
}

export default DisplayTop