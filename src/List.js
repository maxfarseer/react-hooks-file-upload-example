import React from 'react'
import T from 'prop-types'

const List = ({ data }) => {
  return (
    <ul>
      {data.map(item => {
        return (
          <li key={item}>
            <a href={item} target="_blank" rel="noopener noreferrer">
              {item}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

List.propTypes = {
  data: T.arrayOf(T.string).isRequired,
}

export { List }
