
//imorting styles
import Style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={Style.loader}>   
        <img src='/assets/loader.svg' alt="Loading" />
        <p>Procurando por estudos</p>
    </div>
  )
}

export default Loader