import Link from "next/link"

type Props = {
  params: { userId: string };
}

export default function UserPage(props: Props) {
  return (
    <>
      <h1 className="text-lg border-b pb-1 mb-1">
        User Page {props.params.userId}
      </h1>
      <p>
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Go back
        </Link>
      </p>
    </>
  )
}
