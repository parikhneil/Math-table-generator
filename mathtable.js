function GenerateTable() {
    document.getElementById("output").innerHTML = ""
    let number = document.getElementById("number").value;    
    for (let i = 0; i <= 10; i++) {
       console.log(number + "x" + i + "=" + i * number);
       document.getElementById("output").innerHTML += `<p>${number} x ${i} = ${i * number}</p>`;
    }
}