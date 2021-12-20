export default function Home() {
    const style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "between",
    }

    const button_style = {
        marginLeft: "20px"
    }

    return (
        <div style={style}>
            <input className="input" type="text" placeholder="Search..." />
            <div style={button_style} className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
        </div>
    )
}
