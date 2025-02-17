let projetData;
let container = document.querySelector(".container");

fetch("./NSRSMutt_Links .json")
    .then(response => response.json())
    .then(data => {
        projetData = data;
        createElements(projetData);
    })

const createElements = (data) => {


    data.map((obj) => {
        const { Area, WebTour, GoogleLocation, Class_Name } = obj;

        let box = document.createElement("div");
        box.classList.add("box", Class_Name);
        container.appendChild(box);

        let title = document.createElement("h1");
        title.classList.add("title");
        title.innerHTML = Area;
        box.appendChild(title);

        let buttonsContainer = document.createElement("div")
        buttonsContainer.classList.add("buttonsContainer");
        box.appendChild(buttonsContainer);

        const webtourButton = document.createElement("button");
        webtourButton.classList.add("button");
        webtourButton.innerHTML = "Web Tour";

        !WebTour && webtourButton.setAttribute("disabled", true);

        webtourButton.addEventListener('click', () => {
            window.open(WebTour, "_blank");
        })

        buttonsContainer.appendChild(webtourButton);

        const locationButton = document.createElement("button");
        locationButton.classList.add("button");
        locationButton.innerHTML = "Google Location";
        buttonsContainer.appendChild(locationButton);

        locationButton.addEventListener('click', () => {
            window.open(GoogleLocation, "_blank");
        })




    })
}