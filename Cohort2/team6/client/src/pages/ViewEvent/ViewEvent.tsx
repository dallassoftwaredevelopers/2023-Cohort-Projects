import * as React from 'react';
import { API_URL } from '../../constants/api-constants';
export default function ViewEvent<T extends { title: string, description: string }>() {
  const [event, setEvent] = React.useState<T | null>(null)

  React.useEffect(() => {
    fetch(`${API_URL}/api/events/e38bb8c3-290f-4314-b33d-eb94bec7848f`)
      .then((res) => res.json())
      .then((data: T) => setEvent(data))
      .catch(console.error);
  }, [])

  console.log(event)
  if (!event) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
      </>
    )
  }
}
