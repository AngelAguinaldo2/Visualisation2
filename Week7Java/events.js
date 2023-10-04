//function declarations

function incrementCounter(){
    //gets span element counter declared in events.html
    var spanElement = document.getElementById('counter');
    //creates a variable count using the span element attribute
    var count = spanElement.getAttribute('numberOfClicks');
    //updates count
    count++;
    //updates the text of the span element with current count
    spanElement.innerText = count;
    //updates attribute with current count
    spanElement.setAttribute('numberOfClicks', count);
}

function toggleVisibility(){
    var chartImage = document.getElementById("chart1");
    if(chartImage.style.display === "none"){
        chartImage.style.display = "block";
    } else{
        chartImage.style.display = "none";
    }
}

//script calls
//adding event to button element 'incrementButton' -> increment counter called on click.
document.getElementById('incrementButton').addEventListener('click',incrementCounter);
document.getElementById('chartToggle').addEventListener('click',toggleVisibility);