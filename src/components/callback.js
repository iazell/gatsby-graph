import React, { useEffect } from "react"
import { fetchUserInfo } from "../services/auth"

const Callback = () => {
  const parseQueryString = (queryString) => {
    var vars = queryString.split("&")
    return vars.reduce((map, str) => {
      var pair = str.split("=")
      map[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
      return map
    }, {})
  }

  useEffect(() => {
    const { access_token } = parseQueryString(window.location.hash.substring(1))
    fetchUserInfo(access_token)
  }, [])

  return <div></div>
}

export default Callback
