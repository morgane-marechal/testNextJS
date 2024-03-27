export default function Page() {
  // async function onSubmit(event) {
  //   event.preventDefault()
 
  //   const formData = new FormData(event.target)
  //   const response = await fetch('/api/submit', {
  //     method: 'POST',
  //     body: formData,
  //   })
 
  //   // Handle response if necessary
  //   const data = await response.json()
  //   // ...
  // }
 
  return (
    // <form onSubmit={onSubmit}>
    <form >
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}
