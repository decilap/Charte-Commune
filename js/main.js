(function(){
   //données apprenants
   var array = [
    'Farima Doumbia',
    'Adil Rmili',
    'Alexis Van Neyenhoff',
    'Alicia Derradji',
    'Asad Tahir',
    'Bamba gaye',
    'Caroline F',
    'Charles Chrismann',
    'Dasilve David',
    'Decilap Denis',
    'DOUCARA Lafferrière',
    'Elesse',
    'Flora Lafferrière',
    'Gaëlle COUE',
    'Jules Grand',
    'Le Pollotec Jonathan',
    'Mohamed Abdeloifi',
    'Abdoulaye',
    'Adoulaye'
    ];
  
    //carrousel
    function carrousel(elem){
      var list = document.querySelectorAll(elem);
      var i=0;
      while (i < list.length) {
        list[i].addEventListener("click", function () {
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
        i++;
      }
    }

    //retourne un apprenant
    function random(array, target){
      document.querySelector(target).onclick = function(e){
        var index = Math.floor(Math.random() * 19);
        e.target.nextElementSibling.textContent = array[index];
      }
    }

    carrousel('.card h2');
    random(array, '.random button');
})();