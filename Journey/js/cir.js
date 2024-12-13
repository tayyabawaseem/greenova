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
  