const RestaurentCard = (props) => {
    const {resData}=props
    
    const {name,cuisine,averageRating,costForTwo,deliveryTime}=resData
   
        return (
            <div className="res-card">
                <img className="res-logo" alt="food image" src={resData.imageURL} />
                <h3>{name}</h3>
                <h4>{cuisine}</h4>
                <h4>{averageRating} stars</h4>
                <h4>{costForTwo} For Two</h4>
                <h4>{deliveryTime} minutes</h4>
            </div>
        )
    }

    export default RestaurentCard