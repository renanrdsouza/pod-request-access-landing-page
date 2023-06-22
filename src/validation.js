function validateEmail(ev) {
  const email = ev.children.email.value
  const errorMessage = ev.children.errorMessage
  const addEmailErrorMessage = ev.children.addEmailErrorMessage
  const matcher = /\w{2,}@[a-z]{2,}\.[a-z]{2,}/

  console.log(email)

  if (email === "") {
    errorMessage.classList.add("invisible")
    addEmailErrorMessage.classList.remove("invisible")
  } else if (!email.match(matcher)) {
    errorMessage.classList.remove("invisible")
    addEmailErrorMessage.classList.add("invisible")
  } else if (email.match(matcher)) {
    errorMessage.classList.add("invisible")
    addEmailErrorMessage.classList.add("invisible")
  }
}