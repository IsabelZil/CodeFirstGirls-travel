document.addEventListener('DOMContentLoaded', function() {

    const paragraph = document.getElementById('card-text');
  
    paragraph.addEventListener('mouseover', function() {
      this.style.color = '#ff5252';
    });
  
    paragraph.addEventListener('mouseout', function() {
      this.style.color = '';
    });
  });