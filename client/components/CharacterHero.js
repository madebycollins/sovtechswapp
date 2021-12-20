export default function CharacterHero(props) {
    const style = {
        width: "100%"
    }
    return (
        <div style={style}>
            <h1 className="title">{props.person.name}</h1>
            <nav className="level">
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Height</p>
                        <p className="title">{props.person.height}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Mass</p>
                        <p className="title">{props.person.mass}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Gender</p>
                        <p className="title">{props.person.gender}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Home World</p>
                        <p className="title">{props.person.homeworld}</p>
                    </div>
                </div>
            </nav>

        </div>
    )
}
