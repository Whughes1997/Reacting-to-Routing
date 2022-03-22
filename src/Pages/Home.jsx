import React from "react";
import{Link} from "react-router-dom"


const Home = () => {
    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-center">Beep Boop Welcome to my Home</h1>
                    </div>
                    <div>

                    <Link to="/films">
                        Films
                    </Link>
                </div>

                <div>

                    <Link to="/people">
                        People
                    </Link>
                </div>



            </section>
        </main>



    )


}

export default Home;