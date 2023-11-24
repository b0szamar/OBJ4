let heroes = [
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
    {firstName: "Han", lastName: "Solo", job: "csempész"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor"},
    {firstName: "Luke", lastName: "Skywalker", job: "jedi"} ];

    let templateLiteral=``
    for (let i = 0; i < heroes.length; i++) {
        templateLiteral +=`
        <h2>${heroes[i].firstName} ${heroes[i].lastName}, ${heroes[i].job}</h2>
        `
    }

let szoveg = document.getElementById('szoveg');
szoveg.innerHTML=templateLiteral
