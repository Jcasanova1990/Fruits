const React = require('react')

function New (props) {
    return(
        <div> 
            <h1> New Fruit Page</h1>
            <a href='/fruits'>Return to Index Page</a>
            <form action="/fruits" method="POST">
                name: <input type="text" name="name"/><br/>
                color:<input type="text" name="color"/><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat"/>
                <input type="submit" value="create Fruit"/><br/>
            </form>
        </div>
    )
}

module.exports = New 