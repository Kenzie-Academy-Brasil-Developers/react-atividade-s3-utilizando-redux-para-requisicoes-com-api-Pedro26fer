import axios from "axios";
import { addDigimon } from "./actions";

const addDigimmonThunk = (digimon,setError) => (dispatch) => {

    axios.get(`https://digimon-api.herokuapp.com/api/digimon/name/${digimon}`)
    .then((response) => {
        const digimon = {
            name: response.data[0].name,
            img: response.data[0].img
        }

        dispatch(addDigimon(digimon))
    })
    .catch(() => setError(true))
}

export default addDigimmonThunk