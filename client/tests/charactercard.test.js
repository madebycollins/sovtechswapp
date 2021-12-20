/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CharacterCard from "../components/CharacterCard";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders character data", () => {
    const fakePerson = {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/"
    };

    // Use the asynchronous version of act to apply resolved promises
    act(() => {
        render(<CharacterCard person={fakePerson} />, container);
    });

    expect(container.querySelector(".card-content > .card-content--name").textContent).toBe(fakePerson.name);
    expect(container.querySelector(".content--height").textContent).toBe(fakePerson.height);
    expect(container.querySelector(".content--mass").textContent).toBe(fakePerson.mass);
    expect(container.querySelector(".content--gender").textContent).toBe(fakePerson.gender);
    expect(container.querySelector(".content--homeworld").textContent).toBe(fakePerson.homeworld);
    expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
    expect(container.textContent).toContain(fakeUser.address);

});
