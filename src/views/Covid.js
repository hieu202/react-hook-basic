import { useEffect, useState } from "react"
import useFetch from "../customize/fetch";
const Covid = () => {
    
    const { data: dataCovid, isLoading, isError } = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z', true)

    return (
        <table id="customers">
            <tr>
                <th>Date</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Deaths</th>
                <th>Recovered</th>
            </tr>

            {isError === false && isLoading === false && dataCovid && dataCovid.length > 0 && dataCovid.map(item => {
                return (
                    <tr key={item.ID}>
                        <td>{item.Date}</td>
                        <td>{item.Confirmed}</td>
                        <td>{item.Active}</td>
                        <td>{item.Deaths}</td>
                        <td>{item.Recovered}</td>

                    </tr>

                )
            })}
            {isLoading === true &&
                <tr>
                    <td colSpan={5} style={{ textAlign: "center" }}>Loading....</td>
                </tr>
            }
            {isError === true &&
                <tr>
                    <td colSpan={5} style={{ textAlign: "center" }}>Error....</td>
                </tr>
            }


        </table>
    )
}
export default Covid