function validateEmail(ev) {
  const email = ev.children.email.value
  const errorMessage = ev.children.errorMessage
  const matcher = /\w{2,}@[a-z]{2,}\.[a-z]{2,}/

  if (!email.match(matcher)) {
    errorMessage.classList.remove("invisible")
  } else {
    errorMessage.classList.add("invisible")
  }
}