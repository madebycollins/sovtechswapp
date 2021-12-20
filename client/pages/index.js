import { useQuery, gql } from "@apollo/client";
import { GET_PEOPLE } from "../graphql/queries";
import CharacterNameCard from "../components/CharacterNameCard";
import { useRouter } from 'next/router'

export default function Home() {
    // Get the page value
    const router = useRouter()
    let { page } = router.query

    // Prepare the page number
    page = Number.parseInt(page) || 1

    // Load data for the relevant page
    const { loading, error, data } = useQuery(GET_PEOPLE, {
        variables: { page },
    });

    if (loading) return ('Loading...');
    if (error) return (`Error! ${error.message}`);

  return (
    <div className="">
        {data.people.map( (person, index) => (
            <CharacterNameCard key={index} person={person} />
        ))}
        <nav className="pagination" role="navigation" aria-label="pagination">
            <a className="pagination-previous">Previous</a>
            <a className="pagination-next">Next page</a>
        </nav>
    </div>
  )
}
