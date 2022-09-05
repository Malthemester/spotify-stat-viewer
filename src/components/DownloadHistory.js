function DownloadHistory() {
    return <div className="dropdown">
        <div className="dropdown-content">

            <button onClick={Download} className="historyDownload">Download history</button >

            <input
                type="file"
                id="historyFile" name="historyFile"
                accept=".txt"
                onChange={(e) => {
                    console.log(e)
                    LoadHistory(e.target.files[0])
                }} />
        </div>
    </div>
}

function LoadHistory(histroyText) {

    let history = JSON.parse(localStorage.getItem("history")) ?? []

    var reader = new FileReader();
    reader.readAsText(histroyText)

    reader.onload = function () {

        let newHistroy = JSON.parse(reader.result)
        history = [...history, ...newHistroy]

        history.sort((a, b) => {
            let aDate = new Date(a["Date"]).getTime()
            let bDate = new Date(b["Date"]).getTime()
            return aDate > bDate ? 1 : -1
        })
        localStorage.setItem("history", JSON.stringify(history))
    };
}

function Download() {
    const history = localStorage.getItem("history")

    const element = document.createElement("a");
    const file = new Blob([history], {
        type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myHistory.txt";
    document.body.appendChild(element);
    element.click();
}

export default DownloadHistory;
