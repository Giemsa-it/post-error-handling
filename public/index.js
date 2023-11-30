const pokemonList = document.querySelector("#all-pokemon");
const submitButton = document.querySelector("#submit");

fetch("http://localhost:3000/all")
    .then(response => response.json())
    .then(data => {
        data.forEach(e => {
            const newElement = document.createElement("li");
            newElement.innerText = e.name;
            pokemonList.appendChild(newElement);
        });
    });

//headers {'Content-type':'application/json'}

//This is how to submit data by a fetch call
submitButton.addEventListener("click",()=>{
    const nameFromForm = document.querySelector("#name").value;
    const primaryTypeFromForm = document.querySelector("#primary").value;

    const jsonObjectToPost = {
        name:nameFromForm,
        primary:primaryTypeFromForm
    }

    const fetchConfiguration = {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(jsonObjectToPost)
    }

    fetch("http://localhost:3000/new", fetchConfiguration)
        .then(res => res.json())
        .then(res => console.log(res));
});



