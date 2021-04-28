let cpuimg = document.querySelector(".cpu-img");
let showresult = document.querySelector(".show-winner");
var resultnum = document.querySelectorAll(".result-number");


document.querySelector(".rock-img").addEventListener("click", function(){
    document.querySelector(".user-img").setAttribute("src", "images/1.jpg");
    let randnum = Math.floor(Math.random()*3)+1;
    let getimg = "images/" + randnum + ".jpg";
    cpuimg.setAttribute("src", getimg);

    if(randnum == 1)
    {
        showresult.innerHTML = "Draw!";
        var count = resultnum[1].innerHTML;  
        count++;
        resultnum[1].innerHTML = count;
    
    }

    else if(randnum == 2)
    {
        showresult.innerHTML = "CPU wins!";
        var count1 = resultnum[2].innerHTML;
        count1++;
        resultnum[2].innerHTML = count1;
    }

    else if(randnum == 3)
    {
        showresult.innerHTML = "You win!";
        var count2 = resultnum[0].innerHTML;
        count2++;
        resultnum[0].innerHTML = count2;
    }

})

document.querySelector(".scissors-img").addEventListener("click", function(){
    document.querySelector(".user-img").setAttribute("src", "images/3.jpg");
    let randnum = Math.floor(Math.random()*3)+1;
    let getimg = "images/" + randnum + ".jpg";
    cpuimg.setAttribute("src", getimg);

    if(randnum == 1)
    {
        showresult.innerHTML = "CPU wins!";
        let x =document.querySelectorAll(".result-number")[2].innerHTML;
        x++;
        document.querySelectorAll(".result-number")[2].innerHTML = x;
    }

    else if(randnum == 2)
    {
        showresult.innerHTML = "You win!";
        var count3 = resultnum[0].innerHTML;
        count3++;
        resultnum[0].innerHTML = count3;
    }

    else if(randnum == 3)
    {
        showresult.innerHTML = "Draw!";
        var count4 = resultnum[1].innerHTML;
        count4++;
        resultnum[1].innerHTML = count4;
    }

    
})

document.querySelector(".paper-img").addEventListener("click", function(){
    document.querySelector(".user-img").setAttribute("src", "images/2.jpg");
    let randnum = Math.floor(Math.random()*3)+1;
    let getimg = "images/" + randnum + ".jpg";
    document.querySelector(".cpu-img").setAttribute("src", getimg);
    
    if(randnum == 1)
    {
        showresult.innerHTML = "You win!";
        var count = resultnum[0].innerHTML;
        count++;
        resultnum[0].innerHTML = count;
    }

    else if(randnum == 2)
    {
        showresult.innerHTML = "Draw!";
        var count = resultnum[1].innerHTML;
        count++;
        resultnum[1].innerHTML = count;
    }

    else if(randnum == 3)
    {
        showresult.innerHTML = "CPU Wins!";
        var count = resultnum[2].innerHTML;
        count++;
        resultnum[2].innerHTML = count;
    }
})

document.querySelector(".reset-score").addEventListener("click", function(){
    let head = document.querySelector(".game-container span").innerHTML;
    head++;
    document.querySelector(".game-container span").innerHTML = head;
    resultnum[0].innerHTML = 0;
    resultnum[1].innerHTML = 0;
    resultnum[2].innerHTML = 0;
    document.querySelector(".user-img").setAttribute("src", "images/1.jpg");
    document.querySelector(".cpu-img").setAttribute("src", "images/1.jpg");
    showresult.innerHTML = "";
})