document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.category-bar .chip').forEach(function(chip) {
    var img = chip.querySelector('img');
    if (img) {
      var text = img.getAttribute('alt') || '';
      text = text.toUpperCase();
      chip.innerHTML = '<span class="letter">' + text + '</span>';
    }
  });
  // Remove underline slider if present
  var underline = document.querySelector('.chip-underline');
  if (underline) underline.style.display = 'none';
});
