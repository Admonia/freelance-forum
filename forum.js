const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];
//create a function for a header
function main() {
    const root = document.getElementById("root")
    const heading = document.createElement("h1");
    heading.textContent = "FREELANCERS";
    root.appendChild(heading);
//initialize variables
    const users = [
        { name: "John", age: 25, occupation: "gardener" },
        { name: "Lenny", age: 51, occupation: "programmer" },
        { name: "Andrew", age: 43, occupation: "teacher" },
        { name: "Peter", age: 81, occupation: "teacher" },
        { name: "Anna", age: 43, occupation: "teacher" },
        { name: "Albert", age: 76, occupation: "programmer" },
        { name: "Adam", age: 47, occupation: "teacher" },
        { name: "Robert", age: 72, occupation: "driver" },
    ];
    const userList = document.createElement("ul");

    // Loop through the users array
    for (const user of users) {
        //Create a list item for each users
        const listItem = document.createElement("li");
        //Set the content of the list item to display user details
        listItem.textContent = `${user.name}, ${user.age}, ${user.occupation}`;
        //Append the list item to the unordered list
        userList.appendChild(listItem);
    }

    // Append the unordered list to the HTML document body
    document.body.appendChild(userList);
}

//call the main function
main();
