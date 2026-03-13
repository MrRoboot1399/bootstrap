function Card() {
  return (
    <div className="container">
      <div className="card" style={{width:"300px"}}>

      
      <img src="https://img.freepik.com/vector-premium/casa-dibujada-mano-vector-corazon-ilustracion_1258045-3330.jpg?semt=ais_hybrid&w=740&q=80" className="card-img-top">
      </img>
      <div className="card-body">
          <h5 className="card-title">Mi Tarjeta</h5>
         <p className="card-text">ejemplo card bootstrap</p>
          <button className="btn btn-dark">Accion</button>
      </div>
    </div>
    </div>
  );
}

export default Card;