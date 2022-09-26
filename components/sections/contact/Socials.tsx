import Button from '../../buttons/Button'
import { authorData } from '../../../data/authorData';

const Socials = () => {
  return (
    <div>
        <p
            className="text-xl font-bold text-center md:text-4xl"
        >
            Or connect with me on socials
        </p>
        <ul
            className="mt-6 flex justify-center gap-12"
        >
            <li>
            <Button>
                <a href={authorData.github}>GitHub</a>
            </Button>
            </li>
            <li>
            <Button>
                <a href={authorData.linkedIn}>LinkedIn</a>
            </Button>
            </li>
        </ul>
    </div>
  )
}

export default Socials