import * as React from "react"
import { navigate } from "gatsby"

const RedirectPage = ({ pageContext }) => {
  const to = pageContext?.to || "/net"

  React.useEffect(() => {
    navigate(to, { replace: true })
  }, [to])

  return (
    <p>
      Redirection vers <a href={to}>{to}</a>…
    </p>
  )
}

export default RedirectPage
