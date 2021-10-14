document.getElementById('inputs').onsubmit = function() {

    if (document.getElementById("borb").value == "siblings") {

        document.getElementById("siblings").style.display = "block";
        document.getElementById("borb").value = "";
        document.getElementsByClassName("amphibiaa")[0].style.display = "none";
        document.getElementsByClassName("amphibiaa")[1].style.display = "none";
        document.getElementsByClassName("amphibiaa")[2].style.display = "none";
        document.getElementsByTagName("h3")[0].innerHTML = "";

    } else if (document.getElementById("borb").value == "amphibia"){

        document.getElementsByClassName("amphibiaa")[0].style.display = "block";
        document.getElementsByClassName("amphibiaa")[1].style.display = "block";
        document.getElementsByClassName("amphibiaa")[2].style.display = "block";
        document.getElementById("borb").value = "";
        document.getElementsByTagName("h3")[0].innerHTML = "";
        document.getElementById("siblings").style.display = "none";

    } else {

        document.getElementById("siblings").style.display = "none";
        document.getElementsByClassName("amphibiaa")[0].style.display = "none";
        document.getElementsByClassName("amphibiaa")[1].style.display = "none";
        document.getElementsByClassName("amphibiaa")[2].style.display = "none";

        var number = Math.random();
        number = Math.round(number);

        // 0 = yes | 1 = no

        if (number == 0) {
            var text = document.getElementById("borb").value;
            document.getElementsByTagName("h3")[0].innerHTML = "You: " + text + "<br>" + "Steve: Yes!";
        } else if (number == 1) {
            var text = document.getElementById("borb").value;
            document.getElementsByTagName("h3")[0].innerHTML = "You: " + text + "<br>" + "Steve: No.";
        }

        document.getElementById("borb").value = "";
    }
    return false;
}