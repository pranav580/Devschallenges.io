import "./HomePageRight.css";


const TopCard=({Tomorrow, locImg})=>{
    return(
        <div className="TopCard">
            <div>{Tomorrow}</div>
            <img src="/static/img/weather/lc.svg" alt="img" />
            <div>Data</div>
        </div>
    )
}
export default TopCard;