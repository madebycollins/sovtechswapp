import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_PERSON } from "../../graphql/queries";
import CharacterHero from "../../components/CharacterHero";

export default function Detail() {
    // Get the name value
    const router = useRouter()
    let { name } = router.query

    // Load data for the person
    const { loading, error, data } = useQuery(GET_PERSON, {
        variables: { name },
    });

    if (loading) return ('Loading...');
    if (error) return (`Error! ${error.message}`);

    const style = {
      width: "50%"
    }

    return (
        <div style={style}>
            {data ?
                data.person.map( (person, index) => (
                    <CharacterHero key={index} person={person} />
                ))
                : <div/>}
        </div>
    )
}
