function addPost(event) {
  // event.preventDefault();

  document.location.replace("/dashboard/new-post");
}

document.querySelector("#newPost").addEventListener("click", addPost);
