function List(){
    const frutas = [{id: 1, Nombre: "Manzana", Calorias: 95}, 
                    {id: 2, Nombre: "Naranja", Calorias: 45}, 
                    {id: 3, Nombre: "Platano", Calorias: 105}, 
                    {id: 4, Nombre: "Coco", Calorias: 159}, 
                    {id: 5, Nombre: "Sandia", Calorias: 39}];
    frutas.sort((a,b) => b.Nombre.localeCompare(a.Nombre));
    const listItems = frutas.map(fruta => <li key={(fruta.id)}>
        {fruta.Nombre}: &nbsp;
        <b>{fruta.Calorias}</b></li>);

    return(<ul>{listItems}</ul>);
}
export default List