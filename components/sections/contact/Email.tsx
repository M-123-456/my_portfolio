import React from 'react'

type Props = {}

const Email = (props: Props) => {
  return (
    <div>
        <p
            className="text-xl font-bold text-center md:text-4xl"
        >
            Send me a message
        </p>

        {/* todo */}
        {/* hover and change pointer design und copy onclick */}
        <p
            className="mt-4 text-lg text-center md:text-3xl"
        >
            mikigerlach2@gmail.com
        </p>
    </div>
  )
}

export default Email