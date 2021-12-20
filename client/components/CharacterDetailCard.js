import Link from "next/link";
import { useEffect, useState } from "react";
export default function CharacterDetailCard(props) {
    const [page, setPage] = useState(0)

    useEffect(() => {
        setPage(parseInt(window.sessionStorage.getItem('page')))
    })

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
                    <Link href={"/?page=" + page}>Back</Link>
                </div>
            </div>
        </div>
    )
}
