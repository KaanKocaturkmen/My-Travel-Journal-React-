import Header from "./components/Header"
import Entry from "./components/Entry"
import EntryData from "./data.js"
/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {
    const entryContainer = EntryData.map((data)=> {
        return <Entry 
            key={data.id} 
            img={data.img} 
            country={data.country} 
            googleMapsLink={data.googleMapsLink}
            title={data.title}
            text={data.text}
            dates={data.dates}
        />
    })
    
    return (
        <>
            <Header />
            <main className="container">
                { entryContainer }
            </main>
        </>
    )
}