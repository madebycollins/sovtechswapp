export default function CharacterCard(props) {
    return (
        <div className="card is-8">
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4 card-content--name">{props.person.name}</p>
                    </div>
                </div>

                <div className="content">
                    <a className="content--height">Height</a>: {props.person.height}
                    <br />
                    <a className="content--mass">Mass</a>: {props.person.mass}
                    <br />
                    <a className="content--gender">Gender</a>: {props.person.gender}
                    <br />
                    <a className="content--homeworld">Home World</a>: {props.person.homeworld}
                    <br />
                </div>
                <div className="">
                    Footer
                </div>
            </div>
        </div>
    )
}
