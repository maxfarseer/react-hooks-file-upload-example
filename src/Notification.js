import React from 'react'
import T from 'prop-types'

const Notification = ({ status }) => {
  return <p>notification: {status}</p>
}

Notification.propTypes = {
  status: T.string.isRequired,
}

export { Notification }
