document.addEventListener("DOMContentLoaded", function() {
    const words = document.querySelectorAll('.cd-words-wrapper b');
    let wordIndex = 0;

    function changeWord() {
        const currentWord = words[wordIndex];
        const nextWord = words[(wordIndex + 1) % words.length];

        currentWord.classList.remove('is-visible');
        currentWord.classList.add('is-hidden');

        nextWord.classList.remove('is-hidden');
        nextWord.classList.add('is-visible');

        wordIndex = (wordIndex + 1) % words.length;
    }
    setInterval(changeWord, 2000);
});

// ======================//
(function() {
  
  var skillsBar = function( bars ) {
    this.bars = document.querySelectorAll( bars );
    if( this.bars.length > 0 ) {
      this.init();
    } 
  };
  
  skillsBar.prototype = {
    init: function() {
      var self = this;
      self.index = -1;
      self.timer = setTimeout(function() {
        self.action();
      }, 500);
      
      
    },
    select: function( n ) {
      var self = this,
        bar = self.bars[n];
        
        if( bar ) {
          var width = bar.parentNode.dataset.percent;
        
          bar.style.width = width;
          bar.parentNode.classList.add( "complete" ); 
        }
    },
    action: function() {
      var self = this;
      self.index++;
      if( self.index == self.bars.length ) {
        clearTimeout( self.timer );
      } else {
        self.select( self.index );  
      }
      
      setTimeout(function() {
        self.action();
      },500);
    }
  };
  window.SkillsBar = skillsBar;
})();

(function() {
  document.addEventListener( "DOMContentLoaded", function() {
    var skills = new SkillsBar( ".skillbar-bar" );
  });
})();
// ----------------//
function downloadCV() {
    const button = document.querySelector('.botao');
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
      const link = document.createElement('a');
      link.href = 'Resume.pdf';
      link.download = 'MEHAK RESUME';
      link.click();
    }, 3000);
  }
  
  // ==================//
  document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll('.nav-link');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menuItems.forEach(function(menuItem) {
                menuItem.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});
// ========================//
document.addEventListener("DOMContentLoaded", function() {
  var preloader = document.querySelector('.preloader');
  preloader.style.display = 'block';
  setTimeout(function() {
      preloader.style.display = 'none';
  }, 2000);
});
window.addEventListener('beforeunload', function() {
  var preloader = document.querySelector('.preloader');
  preloader.style.display = 'block';
});
// ===================//
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.bar_icon');
  const mainMenu = document.querySelector('.main_menu_2');
  const closeMenu = document.querySelector('.close_icon');

  menuIcon.addEventListener('click', function (event) {
    event.stopPropagation(); // Stop the event from propagating to the document
    mainMenu.classList.toggle('show_menu');
    menuIcon.style.display = mainMenu.classList.contains('show_menu') ? 'none' : 'inline-block';
    closeMenu.style.display = mainMenu.classList.contains('show_menu') ? 'inline-block' : 'none';
  });

  document.addEventListener('click', function () {
    if (mainMenu.classList.contains('show_menu')) {
      mainMenu.classList.remove('show_menu');
      menuIcon.style.display = 'inline-block';
      closeMenu.style.display = 'none';
    }
  });

  closeMenu.addEventListener('click', function (event) {
    event.stopPropagation(); // Stop the event from propagating to the document
    mainMenu.classList.remove('show_menu');
    menuIcon.style.display = 'inline-block';
    closeMenu.style.display = 'none';
  });
});



