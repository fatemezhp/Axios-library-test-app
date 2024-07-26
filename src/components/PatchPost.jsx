
function PatchPost() {
  return (
    <div className=" bg-red-500 flex flex-col gap-2 px-2 p-6 mt-5 rounded-lg ">
    <input
      className="p-1 rounded-lg"
      type="number"
      
      placeholder="Enter post number here"
      onChange={(event) => setId(event.target.value)}
    />
    <input
      className="p-1 rounded-lg"
      type="text"
      
      placeholder="change title"
      onChange={(event) => setId(event.target.value)}
    />
    <button >Patch</button>
  </div>
  )
}

export default PatchPost