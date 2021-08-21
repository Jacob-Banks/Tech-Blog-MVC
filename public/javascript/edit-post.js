async function editFormHandler(event) {
  event.preventDefault();
  //alert("fuckyou");
  const title = document.querySelector('input[name="post-title"]').value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const content = document
    .querySelector('textarea[name="post-content"]')
    .value.trim();
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    alert(content);
  } else {
    alert("failed mother fucker");
  }
}

document.querySelector("#edit").addEventListener("click", editFormHandler);
