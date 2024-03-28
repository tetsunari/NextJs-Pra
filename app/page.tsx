import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-lg border-b pb-1 mb-1">Users</h1>
      <ul className="list-disc ml-4">
        <li>
          <Link href="/users/0" className="text-blue-500 hover:text-blue-700">
            User 0
          </Link>
        </li>
        <li>
          <Link href="/users/1" className="text-blue-500 hover:text-blue-700">
            User 1
          </Link>
        </li>
        <li>
          <Link href="/users/2" className="text-blue-500 hover:text-blue-700">
            User 2
          </Link>
        </li>
      </ul>
    </>
  )
}
