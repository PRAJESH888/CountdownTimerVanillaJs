const endDate = "16 February 2024 9:00 PM";

//when our page gets load so we update date time 
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
//now we want to run counters we need Js dateobject - which gives miliseconds timestamp of particular date

// const clock = () => {}

function clock(){
    const end = new Date(endDate); //end is to convert our date into miliseconds at that time
    const now = new Date(); //now is for time onwords rightnow
    // console.log(end);
    // console.log(now); lets calculate difference between this two 
     //convert into days 1d=>24hrs=>1hr=>3600seconds
    const diff = (end - now)/1000;

    if(diff<0) return;

    inputs[0].value = Math.floor(diff/3600/24); //how many no of days are remaining   
    inputs[1].value = Math.floor(diff/3600) % 24;
    inputs[2].value = Math.floor(diff/60) % 60;
    inputs[3].value = Math.floor(diff)%60;
}

clock();
setInterval(()=>{clock()}, 1000)