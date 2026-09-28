document.querySelectorAll(".editButton").forEach((btn) => {
  btn.addEventListener('click', () => {
    const userId = btn.getAttribute("data-user-id");
    window.location.href = `/user/${userId}/edit`;
  });
});


document.querySelector(".js-join-button")
  .addEventListener('click', () => {
    window.location.href = "/user/add";
  });


document.querySelectorAll('.js-delete-button').forEach((btn) => {
  btn.addEventListener('click', () => {
    window.location.href = "/user/delete";
  });
});



// search feature 
const searchBar = document.querySelector(".js-searchBar");
document.querySelector(".js-search-button").addEventListener('click', () => {
  const value = searchBar.value;
  console.log(value);
  window.location.href = `/search/${value}`;
});
