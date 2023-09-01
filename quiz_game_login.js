function addUser() {
    player1 = document.getElementById("p1").innerHTML;
    console.log(player1);
    localStorage.setItem("player1_name", player1);


    player2 = document.getElementById("p2").innerHTML;
    console.log(player2);
    localStorage.setItem("player2_name", player2);

    window.location("game_page.html")
}