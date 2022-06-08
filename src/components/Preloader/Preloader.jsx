import ClipLoader from "react-spinners/ClipLoader";
import { PreloaderBox } from "./Pleloader.styled";
export const Preloader = () => {

    return <PreloaderBox><ClipLoader color={'#00BDD3'} size={48} /></PreloaderBox>;
}