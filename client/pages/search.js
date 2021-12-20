export default function Home() {
    const style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "between",
        marginLeft: "10px"
    }

    return (
        <div style={style}>
            <input className="input" type="text" placeholder="Search..." />
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
        </div>
    )
}
