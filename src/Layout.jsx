function Layout({ children }) {
  return (
    <>
      <header
        className=" bg-gray-700 flex justify-between my-5
       rounded-md px-5 py-4 font-bold items-center"
      >
        <h1 className="text-md text-">Axios Library Test</h1>
        <p>React</p>
      </header>

      {children}

      <footer
        className=" bg-gray-700 flex justify-around my-5
       rounded-md px-5 py-4 font-bold items-center"
      >
        Developed by Fate
      </footer>
    </>
  );
}

export default Layout;
