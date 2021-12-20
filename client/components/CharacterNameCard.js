import Link from "next/link";
import { Button } from "react-bulma-components";
export default function CharacterNameCard(props) {
    return (
            <div style={props.style} className="card is-8">
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{props.person.name}</p>
                        </div>
                    </div>
                    <div className="content">
                        <Link href={"/detail/" + props.person.name}>
                            <Button color="primary">View Detail</Button>
                        </Link>
                    </div>
                </div>

            </div>
    )
}
