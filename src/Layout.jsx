
function Layout({ children , setLogin }) {
  return (
    <>
      <header
        className=" bg-red-600 flex justify-between my-5
       rounded-md px-5 py-4 font-bold items-center"
      >
        <h1 className="text-md text-">Axios Library Test</h1>
        <button onClick={() => setLogin(true)}>Login</button>
      </header>

      {children}

      <footer
        className=" bg-red-900 flex justify-around my-5
       rounded-md px-5 py-4 font-bold items-center"
      >
        Developed by Fate
      </footer>
    </>
  );
}

export default Layout;
