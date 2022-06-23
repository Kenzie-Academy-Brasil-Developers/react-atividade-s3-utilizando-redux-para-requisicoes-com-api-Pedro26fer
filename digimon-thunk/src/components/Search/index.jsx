import { useState } from "react"
import { useDispatch } from "react-redux/es/exports"
import addDigimmonThunk from "../../store/modules/digimons/thunks"
import { HeaderSearch } from "./style"


const Search = () => {

    const dispatch = useDispatch()

    const [input, setInput] = useState("")
    const [error, setError] = useState(false)

        const handleSearch = () => {
            setError(false)
            dispatch(addDigimmonThunk(input,setError))
            setInput("")
        }


    return(
        <HeaderSearch>
            <h2>Procure o seu Digimon  {error && <span> -- Digimon não encontrado</span>}</h2>
           
            <div>
                <input type="text" placeholder="Procure aqui!" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => handleSearch()}>Pesquisar</button>
            </div>
        </HeaderSearch>


    )
}


export default Search