var getprogresbar = document.querySelector('.progress-bar');
var getdownloadbtn = document.querySelector('.download-btn');
var seturl = "https://linkedin.com";

getdownloadbtn.addEventListener('click',function () {
    // console.log('hi');

    getdownloadbtn.setAttribute('disabled',true);

    var setWidth = 0;

    var setinv = setInterval(progressinc,100);

    function progressinc(){

        setWidth++;

        if (setWidth >= 100){
            clearInterval(setinv);
            window.location.href = seturl;
            setWidth = 0;
        }else{
            setWidth++;

            getprogresbar.style.width = `${setWidth}%`;
            getprogresbar.setAttribute('data-inc',`${setWidth}%`);
        }

    }


});