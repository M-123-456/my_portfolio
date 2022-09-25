import { authorData } from '../../../data/authorData';

type Props = {}

const Email = (props: Props) => {

    const copyToClipboard = (email:string) => {
        navigator.clipboard.writeText(email)
    }

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
            className="mt-4 text-lg text-center hover: md:text-3xl"
            onClick={() => copyToClipboard(authorData.email)}
        >
            {authorData.email}
        </p>
    </div>
  )
}

export default Email