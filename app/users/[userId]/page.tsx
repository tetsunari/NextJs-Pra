import { users } from "@/app/lib/users";
import Link from "next/link"

type Props = {
  params: { userId: string };
}

export default function UserPage(props: Props) {
  const user = users[Number(props.params.userId)];
  return (
    <>
      <h1 className="text-lg border-b pb-1 mb-1">
        {user.name}
      </h1>
      <p>
        {user.prof}
      </p>
      <p className="mt-4">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Go back
        </Link>
      </p>
    </>
  )
}
