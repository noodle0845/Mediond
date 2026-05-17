// Mediond — interactive
(function(){
  // mobile nav toggle
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.querySelector('.nav__menu');
  if(toggle && menu){
    toggle.addEventListener('click', function(){
      menu.classList.toggle('is-open');
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq__q').forEach(function(q){
    q.addEventListener('click', function(){
      var item = q.closest('.faq__item');
      item.classList.toggle('is-open');
    });
  });

  // Reveal on scroll
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {threshold: .12});
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }
})();
