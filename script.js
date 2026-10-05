const envelope =
  document.getElementById("envelope")

const openInvitation =
  document.getElementById("openInvitation")

const invitationPage =
  document.getElementById("invitationPage")

let opened = false


function revealInvitation() {
  if (opened) return

  opened = true

  envelope.classList.add("open")

  openInvitation.setAttribute(
    "aria-expanded",
    "true"
  )


  // Reveal the full invitation
  // after the envelope animation begins.
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


  // Smoothly move the visitor
  // to the complete invitation.
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
