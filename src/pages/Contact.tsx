
const Contact = () => {
  const sendMessage = () => {
    alert("hello")
  }

  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="text-center text-white pt-5 pb-0 px-[30px]">
        <div className="text-[32px] font-bold mb-10">
          <h3>Contact with me!</h3>
        </div>

        <form onSubmit={sendMessage}>
          <div className="">
            <input
              className="h-[50px] w-[49vh] border text-sm mb-7 px-8 py-2 rounded-md border-[none] bg-[#fafafa0d] "
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="">
            <input
              className="h-[50px] w-[49vh] border text-sm mb-7 px-8 py-2 rounded-md bg-[#fafafa0d] "
              type="text"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="">
            <textarea
              className="h-40 w-[49vh] pt-4 text-sm mb-7 px-7 py-1 border rounded-md bg-[#fafafa0d] "
              placeholder="Message"
              maxLength={255}
              name="message"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 duration-300 text-gray-900 text-2xl py-4 px-3 rounded-lg w-[100%]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
