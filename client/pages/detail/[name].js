import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_PERSON } from "../../graphql/queries";
import CharacterHero from "../../components/CharacterHero";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from 'react-bulma-components';
import Loader from "../../components/Loader";

export default function Detail() {
    const [page, setPage] = useState(0)

    useEffect(() => {
        setPage(parseInt(window.sessionStorage.getItem('page')))
    })

    // Get the name value
    const router = useRouter()
    let { name } = router.query

    // Load data for the person
    const { loading, error, data } = useQuery(GET_PERSON, {
        variables: { name },
    });

    if (loading) return (<Loader />);
    if (error) return (`Error! ${error.message}`);

    const style = {
      width: "50%"
    }

    const buttonStyle = {
        marginTop: "50px"
    }

    const buttonContainer = {
        display: "grid"
    }

    return (
        <div style={style}>
            {data ?
                data.person.map( (person, index) => (
                    <CharacterHero key={index} person={person} />
                ))
                : <div/>}
            <div style={buttonContainer}>
                <Link href={"/?page=" + page}>
                    <Button style={buttonStyle} color="">Back</Button>
                </Link>
            </div>
        </div>
    )
}
