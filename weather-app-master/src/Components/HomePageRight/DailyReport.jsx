import "./HomePageRight.css";


const TopCard=({Date, locImg, locMinTemp, locMaxTemp,num})=>{
    return(
        <div className="TopCard">
            <div>{Date}</div>
            <img src={`https://developer.accuweather.com/sites/default/files/${num}-s.png`} alt="img" />
            <div className="MinMaxTemp">
                <h6>{locMaxTemp}</h6>
                <h6>{locMinTemp}</h6>
            </div>
        </div>
    )
}
export default TopCard;