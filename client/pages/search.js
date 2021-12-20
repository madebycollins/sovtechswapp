import { useLazyQuery } from "@apollo/client";
import { GET_PERSON } from "../graphql/queries";
import { useState } from "react"
import CharacterNameCard from "../components/CharacterNameCard";
import Loader from "../components/Loader";

export default function Home() {
    const [value, setValue] = useState("");

    const [getPerson, { loading, error, data }] = useLazyQuery(GET_PERSON);

    if (loading) return (<Loader />);
    if (error) return `Error! ${error}`;

    const style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "between",
    }

    const button_style = {
        marginLeft: "20px"
    }

    function handleChange(event){
        // Update the state value
        setValue(event.target.value);
    }

    function handleClick() {

        // Load data for the relevant user
        getPerson({ variables: { name: value } })

        if (loading) return (<Loader />);
        if (error) {
            console.log('error', error);
            return (`Error! ${error}`);
        }
    }

    return (
        <div>
            <div style={style}>
                <input className="input" type="text" value={value} onChange={handleChange} placeholder="Search..." />
                <div style={button_style} className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" onClick={handleClick}>Submit</button>
                    </div>
                </div>
            </div>

            <br />
            {data ?
                data.person.map( (person, index) => (
                    <CharacterNameCard key={index} person={person} />
                ))
                : <div/>}
        </div>
    )
}
