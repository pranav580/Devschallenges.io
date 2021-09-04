import React from "react";
import { useEffect , useState} from "react";
import "./style.css";
import TopCard from "./HomePageRight/DailyReport";
import Heading from "./HomePageRight/Heading";
import TodayReportOne from "./HomePageRight/TodayReportOne";
import TodayReportTwo from "./HomePageRight/TodayReportTwo";
import initial from "./initial.json";

const HomePageLeft =()=>{
    return(
        <div className="HomePageLeft">
            <div className="HomeSearch"></div>
            <div className="LocationIMG"></div>
            <div className="Temprature"></div>
            <div className="WeatherDetails"></div>
            <div className="Date"></div>
            <div className="Location"></div>
        </div>
    )
}
const HomePageRight=({LocationData})=>{
    console.log(LocationData);
    const Tomorrow ="Tomorrow";
    return(
        <div className="HomePageRight">
            <div className="ButtonConvertor"></div>
            <div className="DailyReport">
                <TopCard Tomorrow={Tomorrow} locImg={LocationData.consolidated_weather[1].weather_state_name}/>
                <TopCard />
                <TopCard />
                <TopCard/>
                <TopCard/>
            </div>
            <div className="Heading">
                <Heading/>
            </div>
            <div className="TodayReportOne">
                <TodayReportOne/>
                <TodayReportOne/>
            </div>
            <div className="TodayReportTwo">
                <TodayReportTwo/>
                <TodayReportTwo/>
            </div>
            <div className="Profile"></div>
        </div>
    )

}
 // eslint-disable-next-line
const SearchPage=()=>{
    return(
        <div className="SearchPage">

        </div>
    )
}

const Background= ()=>{
    const [locationID, setLoactionID] = useState("44418");
    const [LocationData, setLoactionData] = useState(initial);
    useEffect(()=>{
        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${locationID}/`)
        .then((res)=> res.json())
        .then((Data)=>{
            // console.log(Data);
            setLoactionData(Data);
        })
        .catch(error => console.log('Authorization failed : ' + error.message));
    },[locationID]);
    return(
        <div className="Background">

            <div className="Left">
                <HomePageLeft/>
            </div>
            <div className="Right">
                <HomePageRight LocationData={LocationData}/>
            </div>

        </div>
    )
}
export default Background;