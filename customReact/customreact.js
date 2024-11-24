function customRender(reactElement, container) {
    // Create a DOM element based on the type property
    const domElement = document.createElement(reactElement.type);

    // Set the innerHTML to the children property
    domElement.innerHTML = reactElement.children;

    // Loop through the props and set attributes
    for (const prop in reactElement.props) {
        if (prop === 'children') continue; // Skip the children property
        domElement.setAttribute(prop, reactElement.props[prop]); // Correct method call
    }

    // Append the created DOM element to the container
    container.appendChild(domElement);
}

// Define a React-like element structure
const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit Google"
};

// Get the main container by its ID (without the #)
const mainContainer = document.getElementById("root");

// Render the React-like element into the container
customRender(reactElement, mainContainer);
