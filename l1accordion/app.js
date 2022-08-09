var getacctitles = document.getElementsByClassName('acctitle');
//console.log(getacctitles); //HTML Collection can't used array forEach
var getacccontents = document.querySelectorAll(".acctitle");
// console.log(getacccontents); //NodeList

for (var x = 0 ; x < getacctitles.length ; x++){
    // console.log(x);

    getacctitles[x].addEventListener('click',function (e) {
        // console.log(e.target);
        // console.log(this);

        this.classList.toggle('active');
        var getcontents = this.nextElementSibling;
        // console.log(getcontents);

        if (getcontents.style.height){
            //getcontents.style.height = "0";  //can't set 0 to height
            getcontents.style.height = null;
        }else{
            // console.log(getcontents.scrollHeight);

            getcontents.style.height = getcontents.scrollHeight + "px";
        }
    });

    if (getacctitles[x].classList.contains('active')){
        getacccontents[x].style.height = getacccontents[x].scrollHeight + "px";
    }

}