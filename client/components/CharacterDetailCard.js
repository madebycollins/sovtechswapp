export default function CharacterDetailCard(props) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.person.name}</p>
                    </div>
                </div>

                <div className="content">
                    <a>Height</a>: {props.person.height}
                    <br />
                    <a>Mass</a>: {props.person.mass}
                    <br />
                    <a>Gender</a>: {props.person.gender}
                    <br />
                    <a>Home World</a>: {props.person.homeworld}
                    <br />
                </div>
                <div className="">
                    Footer
                </div>
            </div>
        </div>
    )
}
