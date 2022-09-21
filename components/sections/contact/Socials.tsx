import SecondaryButton from '../../buttons/SecondaryButton'

type Props = {}

const Socials = (props: Props) => {
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
            <SecondaryButton>
                <a href="https://github.com/M-123-456">GitHub</a>
            </SecondaryButton>
            </li>
            <li>
            <SecondaryButton>
                <a href="https://www.linkedin.com/in/miki-gerlach/">LinkedIn</a>
            </SecondaryButton>
            </li>
        </ul>
    </div>
  )
}

export default Socials