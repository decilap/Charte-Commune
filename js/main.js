(function(){
    var list = document.querySelectorAll(".card h2");
    var i=0;
    while (i < list.length) {
      
      list  [i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
      i++;
    }

    document.querySelector('.random button').onclick=function(e){
      var index = Math.floor(Math.random() * 19);
      e.target.nextElementSibling.textContent = array[index];
    }
})();