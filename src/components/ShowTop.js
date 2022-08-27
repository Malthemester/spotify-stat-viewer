import { useState, useEffect } from "react"
import { useSpring, animated } from "react-spring";

import fillHistory from "./ShowHistory"

let timeRange = 'long_term'
let type = 'tracks'
let time_period = 'current'

let first = true

function ShowTop() {

    const contentProps = useSpring({
        to: [
            { y: -720, opacity: 0, immediate: first },
            { y: -600, delay: 0, opacity: 1, immediate: false },
            { y: -480, delay: 0 },
            { y: -360, delay: 350 },
            { y: -240, delay: 350 },
            { y: -120, delay: 350 },
            { y: 0, delay: 350 }
        ],
        from: { opacity: 0, immediate: first }
    })

    const [topList, setTopList] = useState();

    function handleChangeTimeRange(e) {
        timeRange = e.target.value
    }

    function handleChangeType(e) {
        type = e.target.value
    }

    function handleChangeTimePeriod(e) {
        console.log(e.target.value)
        time_period = e.target.value
    }


    function fetchTop() {
        let access_token = localStorage.getItem("accessToken")

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
                first = false
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function fetchHistory() {

        let history = JSON.parse(localStorage.getItem("history")) ?? []

        let haveToday = false
        history.forEach((entry) => {
            console.log(new Date(Date.now()).toDateString())
            if (entry["Date"] == new Date(Date.now()).toDateString()) {
                setTopList(fillHistory(history, type, timeRange))
                haveToday = true
                return
            }
        })

        if (haveToday) {
            return
        }

        let access_token = localStorage.getItem("accessToken")

        const endpoints_Histroy = [
            `https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=long_term`,
            `https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=medium_term`,
            `https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term`,
            `https://api.spotify.com/v1/me/top/artists?limit=5&time_range=long_term`,
            `https://api.spotify.com/v1/me/top/artists?limit=5&time_range=medium_term`,
            `https://api.spotify.com/v1/me/top/artists?limit=5&time_range=short_term`
        ]

        const entrys = []
        var promises = [];

        endpoints_Histroy.forEach(endpoint => {

            promises.push(fetch(
                endpoint, {
                headers: {
                    Authorization: "Bearer " + access_token,
                    "Content-Type": "application/json"
                },
            })
                .then(response => response.json())
                .then(data => {
                    type = endpoint.includes('artists') ? 'artists' : 'tracks'
                    timeRange = endpoint.includes('long_term') ? 'long_term' : endpoint.includes('medium_term') ? 'medium_term' : 'short_term'
                    entrys.push({ type: type, timeRange: timeRange, data: data })
                })
                .catch((error) => {
                    console.log(error)
                })
            )
        })
        Promise.all(promises).then(() => {
            let history = JSON.parse(localStorage.getItem("history")) ?? []

            let today = new Date(Date.now()).toDateString()

            history.push({ Entrys: entrys, Date: today })

            localStorage.setItem("history", JSON.stringify(history))

            setTopList(fillHistory(history, type, timeRange))

        })
    }

    function history() {
        let history = JSON.parse(localStorage.getItem("history")) ?? []
        setTopList(fillHistory(history, type, timeRange))

    }

    function fillTop(data) {
        let topList = []

        if (type === 'tracks') {
            data?.items.forEach((track, i) => {

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
                col.push(<img alt="albumImg" key={'tImage' + i} className="trackImage" src={track.album.images[1].url} />)

                topList.push(<a key={'a' + i} href={track.external_urls.spotify} target="_blank" rel="noreferrer" className="track">{col}</a>)
            })
        }
        else {
            data?.items.forEach((artist, i) => {

                let paragrafs = []
                let col = []
                let genres = ''

                artist.genres.forEach((artist, i) => {
                    genres += (i > 0 ? ', ' : '') + artist
                })

                col.push(<p className="topNumber">{i + 1}</p>)

                paragrafs.push(<p key={i}>{artist.name}</p>)
                paragrafs.push(<p key={'genres' + i}>{genres}</p>)

                col.push(<div key={'margin' + i} className="margin" >{paragrafs}</div>)
                col.push(<img alt="artistImg" key={'tImage' + i} className="trackImage" src={artist.images[1].url} />)

                topList.push(<a key={'akey' + i} href={artist.external_urls.spotify} target="_blank" rel="noreferrer" className="track">{col}</a>)
            })
        }

        return (
            <animated.div key={Math.random(1000)} className="animTop" style={contentProps}>
                {topList}
            </animated.div>
        )
    }

    return (
        <div>
            <div className="selectText">
                <div className="line">
                    <p>Your
                        <select onChange={handleChangeTimePeriod} name="current" id="time_period" placeholder="Source Type">
                            <option value="current">current</option>
                            <option value="past">past</option>
                        </select> top
                        <select onChange={handleChangeType} name="Type" id="type" placeholder="Source Type">
                            <option value="tracks">tracks</option>
                            <option value="artists">artists</option>
                        </select> for
                        <select onChange={handleChangeTimeRange} name="Time period" id="time_period" placeholder="Source Type">
                            <option value="long_term">several years</option>
                            <option value="medium_term">6 months</option>
                            <option value="short_term">4 weeks</option>
                        </select>
                    </p>

                    <button className="buttonStart" onClick={() => {
                        console.log(time_period)
                        time_period == "current" ? fetchTop() : fetchHistory()
                    }}>Show</button>
                </div>
            </div>

            <div className="maskTop">
                {topList}
            </div>
        </div>
    )
}

export default ShowTop;