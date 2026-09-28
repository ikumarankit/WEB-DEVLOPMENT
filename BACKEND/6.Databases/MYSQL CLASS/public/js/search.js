document.querySelectorAll(".editButton").forEach((btn) => {
  btn.addEventListener('click', () => {
    const userId = btn.getAttribute("data-user-id");
    window.location.href = `/user/${userId}/edit`;
  });
});


document.querySelectorAll('.js-delete-button').forEach((btn) => {
  btn.addEventListener('click', () => {
    window.location.href = "/user/delete";
  });
});