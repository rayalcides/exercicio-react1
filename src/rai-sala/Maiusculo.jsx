function Maiusculo(props) {
    const textInserido = props.text
    const textoConvertido = textInserido.toUpperCase()
    return(
      <p>{textoConvertido}</p>
    )
}

export default Maiusculo