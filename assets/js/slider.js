var currentIndex = 1;

function nextPage()
{
    var slider = document.getElementById("slider");
    var images = slider.getElementsByClassName("carousel-item");
    if(currentIndex < images.length)
    {
        currentIndex++;
        goPage(currentIndex);
    }
    else
    {
        goPage(1);
    }
}
function prevPage()
{
    var slider = document.getElementById("slider");
    var images = slider.getElementsByClassName("carousel-item");
    if(currentIndex > 1)
    {
        currentIndex--;
        goPage(currentIndex);
    }
    else
    {
        goPage(3);
    }
}
function goPage(index)
{
    var slider = document.getElementById("slider");
    var images = slider.getElementsByClassName("carousel-item");
    var lines = slider.getElementsByClassName("carousel-line");
    currentIndex = index;
    for(let i = 0; i < images.length; i++)
    {
        images[i].classList.remove("active");
        lines[i].classList.remove("active");
    }
    images[currentIndex - 1].classList.add("active");
    lines[currentIndex - 1].classList.add("active");
    var roomNames = document.getElementById("roomNames");
    if(currentIndex === 1)
    {
        roomNames.text = "Single Room (200$)";
    }
    else if(currentIndex === 2)
    {
        roomNames.text = "Double Room (400$)";
    }
    else if(currentIndex === 3)
    {
        roomNames.text = "Luxury Room (800$)";
    }
}