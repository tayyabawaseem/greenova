document.getElementById('toggle-btn').addEventListener('click', function() {
  var sidebar = document.getElementById('sidebar');
  var toggleBtn = document.getElementById('toggle-btn');
  sidebar.classList.toggle('active');
  toggleBtn.classList.toggle('hidden');
});

// Close sidebar when clicking outside of it
document.addEventListener('click', function(event) {
  var sidebar = document.getElementById('sidebar');
  var toggleBtn = document.getElementById('toggle-btn');
  if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target) && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      toggleBtn.classList.remove('hidden');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggle-btn');
  let isIconVisible = true;

  function toggleContent() {
    if (isIconVisible) {
      toggleBtn.innerHTML = 'Find Out'; // Replace icon with text
      toggleBtn.style.fontSize = '12px'; // Adjust the font size for the text
      toggleBtn.style.width = 'auto'; // Adjust width to fit text
      toggleBtn.style.padding = '0 10px'; // Add some padding for better appearance
    } else {
      toggleBtn.innerHTML = '<i class="fa-solid fa-xmark fa-beat-fade" style="color: #ffffff;"></i>'; // Replace text with icon
      toggleBtn.style.fontSize = ''; // Reset font size
      toggleBtn.style.width = '50px'; // Reset width
      toggleBtn.style.padding = ''; // Reset padding
    }
    isIconVisible = !isIconVisible;
  }

  // Toggle between icon and text every 2 seconds
  setInterval(toggleContent, 1000);
});
