// Create a new blog post

() => {
  fetch("/api/blogs", {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    }
  });
};
