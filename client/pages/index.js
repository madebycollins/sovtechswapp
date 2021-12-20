import { useQuery, gql } from "@apollo/client";
import { GET_PEOPLE } from "../graphql/queries";
import CharacterNameCard from "../components/CharacterNameCard";
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

    if (loading) return ('Loading...');
    if (error) return (`Error! ${error.message}`);

  return (
    <div className="">
        {data.people.map( (person, index) => (
            <CharacterNameCard key={index} page={page} person={person} />
        ))}
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
