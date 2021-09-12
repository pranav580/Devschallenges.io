const TodayReportAir=({air})=>{
    return(
        <div className="TodayReportTwoChild">
            <h4>Precipitaion</h4>
            <h2>{air} mm</h2>
        </div>
    )
}
const TodayReportVisibility = ({visibility})=>{
    return(
        <div className="TodayReportTwoChild">
            <h4>Visibility</h4>
            <h2>{visibility} km</h2>
        </div>
    )
}
export {TodayReportAir , TodayReportVisibility};