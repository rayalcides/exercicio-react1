function Minusculo(props) {
    const tesxtoInserido = props.text
    const textoConvertido = tesxtoInserido.toLowerCase()
    return(
      <p>{textoConvertido}</p>
    )
}

export default Minusculo