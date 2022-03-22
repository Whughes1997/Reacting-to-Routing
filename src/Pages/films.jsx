import React, { useEffect, useState } from "react";



const Films = () => {
    const [films, setFilms] = useState([])
    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films").then((response) => response.json()).then((data) => {
            setFilms(data)
        })
    }, []);




    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-center">Films Page</h1>
                </div>
            </section>
            <section className="row justify-content-center">
                <div className="col-md-6">
                    {films.map((film) => {
                        return <span> {film.title}</span>
                    })  } 
                </div>
            </section>

        </main>



    )


}

export default Films;