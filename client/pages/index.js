import { useQuery, gql } from "@apollo/client";
import { GET_PEOPLE } from "../graphql/queries";
import CharacterNameCard from "../components/CharacterNameCard";
import Loader from "../components/Loader";
import { useRouter } from 'next/router'
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
    // Get the page value
    const router = useRouter()
    let { page } = router.query

    // Prepare the page number
    page = Number.parseInt(page) || 1

    // Save the page we are working with
    useEffect(() => {
        window.sessionStorage.setItem('page', page)
    })

    // Load data for the relevant page
    const { loading, error, data } = useQuery(GET_PEOPLE, {
        variables: { page },
    });

    if (loading) return (<Loader />);
    if (error) return (`Error! ${error.message}`);

    const style = {
      width: "95%"
    }

    const cardStyle = {
        width: "300px",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "2px",
        marginRight: "2px"
    }

    const cardGridStyle = {
        display: "inline-flex",
        /* width: 80%; */
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-start"
    }

  return (
    <div style={style} className="">
        <div style={cardGridStyle}>
            {data.people.map( (person, index) => (
                <CharacterNameCard style={cardStyle} key={index} page={page} person={person} />
            ))}
        </div>

        <nav className="pagination" role="navigation" aria-label="pagination">
            {page === 1
                ? <div />
                : <Link href={"/?page=" + (page - 1) }><a className="pagination-previous">Previous</a></Link>}

            {data
                ? (data.people_has_next
                    ? <Link href={"/?page=" + (page + 1) }><a className="pagination-next">Next page</a></Link>
                    : <div/> )
                : <div/>}
        </nav>
    </div>
  )
}
