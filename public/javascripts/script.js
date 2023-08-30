function toggleSection(sectionNumber) {
  var content = document.getElementById('content' + sectionNumber);
  if (content.classList.contains('active')) {
    content.classList.remove('active');
  } else {
    content.classList.add('active');
  }
}
