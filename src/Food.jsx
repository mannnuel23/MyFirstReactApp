function Food(){

    const food1 = "Naranja";
    const food2 = "Banana"

    return(
        <ul>
            <li>Manzana</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food