const createURL = (path) => {
  return window.location.origin + path;
};

export const askQuestion = async (question) => {
  const res = await fetch(
    new Request(createURL("/api/question"), {
      method: "POST",
      body: JSON.stringify({ question }),
    })
  );

  if (res.ok) {
    return res.json();
  } else {
    console.log("res in error is: ", res);
    throw new Error(
      "Something went wrong on API server! Method: askQuestion() "
    );
  }
};
