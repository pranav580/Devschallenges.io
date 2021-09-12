import React from "react";
import { useEffect , useState} from "react";
import "./style.css";
import TopCard from "./HomePageRight/DailyReport";
import Heading from "./HomePageRight/Heading";
import {TodayReportWind,TodayReportHumidity} from "./HomePageRight/TodayReportOne";
import {TodayReportAir , TodayReportVisibility} from "./HomePageRight/TodayReportTwo";
import initial from "./initial.json";
import initial1 from "./initial1.json";

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
const HomePageRight=({LocationData, LocationData1})=>{
    // console.log(LocationData);
    const Date ="Tomorrow";
    return(
        <div className="HomePageRight">
            <div className="ButtonConvertor"></div>
            <div className="DailyReport">
                <TopCard 
                    Date={Date}
                    locMaxTemp={LocationData.DailyForecasts[0].Temperature.Maximum.Value}
                    locMinTemp={LocationData.DailyForecasts[0].Temperature.Minimum.Value}
                    num={LocationData.DailyForecasts[0].Day.Icon}
                />
                <TopCard 
                    locMaxTemp={LocationData.DailyForecasts[1].Temperature.Maximum.Value}
                    locMinTemp={LocationData.DailyForecasts[1].Temperature.Minimum.Value}
                    num={LocationData.DailyForecasts[1].Day.Icon}
                    Date={LocationData.DailyForecasts[1].Date.slice(0,10)}
                />
                <TopCard 
                    locMaxTemp={LocationData.DailyForecasts[2].Temperature.Maximum.Value}
                    locMinTemp={LocationData.DailyForecasts[2].Temperature.Minimum.Value}
                    num={LocationData.DailyForecasts[2].Day.Icon}
                    Date={LocationData.DailyForecasts[2].Date.slice(0,10)}
                />
                <TopCard 
                    locMaxTemp={LocationData.DailyForecasts[3].Temperature.Maximum.Value}
                    locMinTemp={LocationData.DailyForecasts[3].Temperature.Minimum.Value}
                    num={LocationData.DailyForecasts[3].Day.Icon}
                    Date={LocationData.DailyForecasts[3].Date.slice(0,10)}
                />
                <TopCard 
                    locMaxTemp={LocationData.DailyForecasts[4].Temperature.Maximum.Value}
                    locMinTemp={LocationData.DailyForecasts[4].Temperature.Minimum.Value}
                    num={LocationData.DailyForecasts[4].Day.Icon}
                    Date={LocationData.DailyForecasts[4].Date.slice(0,10)}
                />
            </div>
            <div className="Heading">
                <Heading/>
            </div>
            <div className="TodayReportOne">
                <TodayReportWind  wind={LocationData1.current.wind_mph}/>
                <TodayReportHumidity humidity={LocationData1.current.humidity}/>
            </div>
            <div className="TodayReportTwo">
                <TodayReportVisibility visibility={LocationData1.current.vis_km}/>
                <TodayReportAir air={LocationData1.current.precip_mm}/>
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
    const [locationID, setLoactionID] = useState("2487956");
    const [LocationName, setLoactionName] = useState("Delhi");
    const [LocationData, setLoactionData] = useState(initial);
    const [LocationData1, setLoactionData1] = useState(initial1);
    useEffect(()=>{
        async function fetchData(LocationName) {
            const res = await fetch(
              `https://api.weatherapi.com/v1/current.json?key=dd80f56a143b4d7388275739213107&q=${LocationName}`
            )
            const API1 = await res.json();
            setLoactionData1(API1);
            console.log(API1);
            }

        fetchData(LocationName);
        fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/2974356?apikey=iXA0dLhqzif65tqyHweLcRDP724LAdfC`)
        .then(res=> { 
            return res.json();
            })
        .then(Data=>{
            console.log(Data);
            setLoactionData(Data);
        })
        .catch(error => console.log('Authorization failed failed for 2st API: ' + error.message));
    },[locationID]);
    return(
        <div className="Background">

            <div className="Left">
                <HomePageLeft/>
            </div>
            <div className="Right">
                <HomePageRight LocationData={LocationData} LocationData1={LocationData1}/>
            </div>

        </div>
    )
}
export default Background;