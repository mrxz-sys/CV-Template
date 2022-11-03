var imgBtn = document.getElementById("outer_image")
var fileInp = document.querySelector('[type="file"]');
imgBtn.addEventListener('click', function() {
fileInp.click();
})

    imgInp.onchange = evt => {
      const [file] = imgInp.files
      if (file) {
        blah.src = URL.createObjectURL(file)
        blah.style.position="absolute";
        blah.style.top="120px";
        blah.style.right="160px";
        blah.style.width="200px";
        blah.style.height="200px";
        blah.style.borderRadius ="50%";
      }
    }
