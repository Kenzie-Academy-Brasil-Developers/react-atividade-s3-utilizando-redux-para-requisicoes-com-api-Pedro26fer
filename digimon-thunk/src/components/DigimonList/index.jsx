import { useSelector } from "react-redux/es/hooks/useSelector"
import { CardDigimon, ListDigimons, Main } from "./style"

const DigimonList = () => {

    const {digimons} = useSelector((state) => state)

    return(
        <Main>
            <ListDigimons>
                {digimons.map((digimon,index) => <li key={index}>
                    <CardDigimon>
                        <h3>{digimon.name}</h3>
                        <img src={digimon.img} alt="" />
                    </CardDigimon>
                </li> )}
            </ListDigimons>
        </Main>
    )
}


export default DigimonList