import './Main.css'


function WeaksList () {
    const Weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 3']
    return (
        <dl className="Weeks">
            <li>{Weeks[0]}</li>
            <li>{Weeks[1]}</li>
            <li>{Weeks[2]}</li>
            <li>{Weeks[3]}</li>
        </dl>
    )
}

function DaysList () {
    const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return (
        <dl className="Days">
            <li>{Days[0]}</li>
            <li>{Days[1]}</li>
            <li>{Days[2]}</li>
            <li>{Days[3]}</li>
            <li>{Days[4]}</li>
            <li>{Days[5]}</li>
            <li>{Days[6]}</li>
        </dl>
    )
}

export default function Main () {
    return (
        <main>
            <div className='Schedule'>
                <h2 className='Text'>Current <b>personal</b> meal plan</h2>
                <WeaksList />
                <DaysList />
            </div>
        </main>
    )
}