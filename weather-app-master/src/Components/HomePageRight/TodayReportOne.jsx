const TodayReportWind=({wind})=>{
    return(
        <div className="TodayReportOneChild">
            <h4>Wind Status</h4>
            <h2>{wind} mph</h2>
        </div>
    )
}

const TodayReportHumidity =({humidity})=>{
    return(
        <div className="TodayReportOneChild">
            <h4>Humidity</h4>
            <h2>{humidity}%</h2>
        </div>
    )
}
export  {TodayReportWind , TodayReportHumidity};