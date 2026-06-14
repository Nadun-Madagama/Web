document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.d2');
  const sections = document.querySelectorAll('.dept-content');
  const deptGrid = document.querySelector('.d1');
  const backButtons = document.querySelectorAll('.back-btn');

  // Function to show a specific department section
  function showDepartment(deptId) {
      const targetSection = document.getElementById(deptId);
      if (targetSection) {
          deptGrid.classList.add('hidden');
          sections.forEach(section => section.classList.add('hidden'));
          targetSection.classList.remove('hidden');
          return true;
      }
      return false;
  }

  // Check query parameters on page load
  const params = new URLSearchParams(window.location.search);
  const deptParam = params.get('dept');
  if (deptParam) {
      showDepartment(deptParam.toLowerCase());
  }

  // Card click event listeners (Single click instead of double click)
  cards.forEach(function (card) {
      card.addEventListener('click', () => {
          const targetId = card.getAttribute('data-target');
          if (targetId) {
              // Update URL query param without refreshing the page
              const newUrl = `${window.location.pathname}?dept=${targetId}`;
              window.history.pushState({ dept: targetId }, '', newUrl);
              showDepartment(targetId);
          }
      });
  });

  // Back button functionality
  backButtons.forEach(btn => {
      btn.addEventListener('click', () => {
          sections.forEach(section => section.classList.add('hidden'));
          deptGrid.classList.remove('hidden');
          // Clean query parameter from URL bar
          window.history.pushState({}, '', window.location.pathname);
      });
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', (event) => {
      const state = event.state;
      if (state && state.dept) {
          showDepartment(state.dept);
      } else {
          sections.forEach(section => section.classList.add('hidden'));
          deptGrid.classList.remove('hidden');
      }
  });
});