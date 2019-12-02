jQuery(document).ready(function($) {
 

  var menuLeft = document.getElementById('cbp-spmenu-s1'),
  menuRight = document.getElementById('cbp-spmenu-s2'),
  menuTop = document.getElementById('cbp-spmenu-s3'),
  menuBottom = document.getElementById('cbp-spmenu-s4'),
  showLeft = document.getElementById('showLeft'),
  showRight = document.getElementById('showRight'),
  showTop = document.getElementById('showTop'),
  showBottom = document.getElementById('showBottom'),
  showLeftPush = document.getElementById('showLeftPush'),
  showRightPush = document.getElementById('showRightPush'),
  body = document.body;

showRightPush.onclick = function() {
  classie.toggle(this, 'active');
  classie.toggle(body, 'cbp-spmenu-push-toleft');
  classie.toggle(menuRight, 'cbp-spmenu-open');
  disableOther('showRightPush');
};

function disableOther(button) {

  if (button !== 'showRightPush') {
      classie.toggle(showRightPush, 'disabled');
  }
}
 

});

