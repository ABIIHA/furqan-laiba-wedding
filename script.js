document.addEventListener("DOMContentLoaded", () => {
  const envelope =
    document.getElementById("envelope")

  const openInvitation =
    document.getElementById("openInvitation")

  const invitationPage =
    document.getElementById("invitationPage")


  if (
    !envelope ||
    !openInvitation ||
    !invitationPage
  ) {
    console.error(
      "Invitation elements could not be found."
    )

    return
  }


  let opened = false


  function revealInvitation() {
    if (opened) return

    opened = true


    envelope.classList.add("open")


    openInvitation.setAttribute(
      "aria-expanded",
      "true"
    )


    window.setTimeout(() => {
      invitationPage.classList.add(
        "visible"
      )

      window.requestAnimationFrame(() => {
        invitationPage.classList.add(
          "show"
        )
      })
    }, 1100)


    window.setTimeout(() => {
      invitationPage.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 1950)
  }


  openInvitation.addEventListener(
    "click",
    revealInvitation
  )


  openInvitation.addEventListener(
    "touchend",
    (event) => {
      event.preventDefault()

      revealInvitation()
    },
    {
      passive: false,
    }
  )
})
