type Props = {
  params: { userId: string };
}

export default function UserPage(props: Props) {
  return (
    <>
      <h1 className="text-lg border-b pb-1 mb-1">
        User Page {props.params.userId}
      </h1>
    </>
  )
}
