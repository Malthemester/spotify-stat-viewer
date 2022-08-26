import { useState } from "react"



function fillTrack(data) {

    let tracks = []
    data?.items.forEach((track, i) => {

        let paragrafs = []
        let col = []
        let artists = ''

        track?.artists?.forEach((artist, i) => {
            artists += (i > 0 ? ', ' : '') + artist.name
        })

        col.push(<p className="topNumber">{i + 1}</p>)

        paragrafs.push(<p key={i}>{track.name}</p>)
        paragrafs.push(<p key={'by' + i}>{artists}</p>)

        col.push(<div key={'margin' + i} className="margin" >{paragrafs}</div>)
        col.push(<img alt="albumImg" key={'tImage' + i} className="trackImage" src={track.album.images[1].url} />)

        tracks.push(<a key={'a' + i} href={track.external_urls.spotify} target="_blank" rel="noreferrer" className="historyTrack">{col}</a>)
    })

    return tracks
}

function fillArtist(data) {
    let artists = []

    data?.items.forEach((artist, i) => {

        let paragrafs = []
        let col = []
        let genres = ''

        artist?.genres?.forEach((artist, i) => {
            genres += (i > 0 ? ', ' : '') + artist
        })

        col.push(<p className="topNumber">{i + 1}</p>)

        paragrafs.push(<p key={i}>{artist.name}</p>)
        paragrafs.push(<p key={'genres' + i}>{genres}</p>)

        col.push(<div key={'margin' + i} className="margin" >{paragrafs}</div>)
        col.push(<img alt="artistImg" key={'tImage' + i} className="trackImage" src={artist.images[1].url} />)

        artists.push(<a key={'akey' + i} href={artist.external_urls.spotify} target="_blank" rel="noreferrer" className="historyTrack">{col}</a>)
    })

    return artists
}

function fillHistory(entrys, type, time_range) {
    let historyList = []
    let fillFunction = type === 'tracks' ? fillTrack : fillArtist

    console.log(type)
    console.log(time_range)
    entrys.forEach(history => {

        history["Entrys"].forEach((entry) => {
            console.log(entry)
            console.log(entry["type"])
            console.log(entry["timeRange"])
            if (entry["type"] === type && entry["timeRange"] == time_range) {
                // let date = new Date(history["Date"]).toDateString()

                // console.log(date)

                let fill = fillFunction(entry.data)
                historyList.push(<div className="historyChild">{history["Date"]}{fill}</div>)
            }
        })
    })

    console.log(historyList)

    return (
        <div className="historyContainter">

            {historyList}

        </div>
    )
}

export default fillHistory;