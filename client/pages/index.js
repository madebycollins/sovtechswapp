import { useQuery, gql } from "@apollo/client";
import { GET_PEOPLE } from "../graphql/queries";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
    const { loading, error, data } = useQuery(GET_PEOPLE);

    if (loading) return ('Loading...');
    if (error) return (`Error! ${error.message}`);

  return (
    <div className="">
        {data.people.map( person => (
            <CharacterCard person={person} />
        ))}
    </div>
  )
}
