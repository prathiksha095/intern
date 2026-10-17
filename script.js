function viewProfile(name) {

    let info = document.getElementById(name + "-info");

    if (name === "Priya") {

        info.textContent =
            "Priya is a BCA student skilled in HTML, CSS and JavaScript.";

    } else if (name === "Arun") {

        info.textContent =
            "Arun is interested in Python, Machine Learning and SQL.";

    } else if (name === "Divya") {

        info.textContent =
            "Divya is a creative designer interested in UI/UX and Figma.";

    }

}