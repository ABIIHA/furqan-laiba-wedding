const envelope =
  document.getElementById(
    "envelope"
  )


const openInvitation =
  document.getElementById(
    "openInvitation"
  )


const weddingPage =
  document.getElementById(
    "weddingPage"
  )


let opened = false


openInvitation.addEventListener(
  "click",
  () => {

    if (opened) {
      return
    }


    opened = true


    envelope.classList.add(
      "open"
    )


    setTimeout(
      () => {

        weddingPage.classList.add(
          "visible"
        )


        requestAnimationFrame(
          () => {

            weddingPage.classList.add(
              "show"
            )

          }
        )

      },
      1250
    )


    setTimeout(
      () => {

        weddingPage.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })

      },
      2200
    )

  }
)
