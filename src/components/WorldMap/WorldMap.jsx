import map from '/worldmap.png'
import css from './WorldMap.module.css'




export const WorldMap = () => (

    <div className={css.world}>


        <img className={css.world__img} src={map}></img>


    </div>
)

