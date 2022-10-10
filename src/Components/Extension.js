import React from 'react'

const Extension = ({ data }) => {
    return (
        <div>
            <div className='row'>
                {data.map(data =>
                    <div className='col-md-4'>
                        <div class='card' style={{ "width": "18ren" }}>
                            <img class="card-img-top" src={data.recipe.image} alt="Card img cap" />
                            <div class="card-body">
                                <center>
                                    <h5 class="card-title">{data.recipe.label}</h5>
                                    <p class="card-text">Total Amount of calories: {Math.round(data.recipe.calories)} </p>
                                    <a href='https://www.edamam.com/results/recipes/?search=all' class="btn btn-primary">Buy</a>
                                </center>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Extension;