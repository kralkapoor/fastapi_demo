import { Navigate, Link } from "react-router-dom"

function Home() {

  return (
    <div className="home">
      <h1 className="welcome">Welcome to the Thirsty Snacker</h1>
      <p className="guide">&lt;- Which way? -&gt;</p>
      <div className="drinks">
        <nav className="bg-blue">
          <p>Drinks (FastAPI)</p>
          <Link to="/drinks">
            <img src="http://localhost:8000/static/images/tea.png" alt="tea!" />
          </Link>
        </nav>
      </div>
      <div className="snacks">
        <nav className="bg-green">
          <p>Snacks (Express)</p>
          <Link to="/snacks">
            <img src="http://localhost:3000/images/cookie.jpeg" alt="a delicious cookie" />
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Home