import React, {useState, useEffect} from 'react';


class Time extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: this.toOffsetDate(this.props.offset)
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    toOffsetDate(offset) {
        let d = new Date();
        let hrs = d.getUTCHours() + this.props.utc;
        if (hrs < 10) {
            hrs = '0' + Number(d.getUTCHours() + this.props.utc);
        } else {
            hrs = Number(d.getUTCHours() + this.props.utc);
        }

        let mins = d.getUTCMinutes();
        if (mins < 10) {
            mins = '0' + d.getUTCMinutes();
        } else {
            mins = d.getUTCMinutes();
        }


        let secs = d.getUTCSeconds();
        if (secs < 10) {
            secs = '0' + d.getUTCSeconds();
        } else {
            secs = d.getUTCSeconds();
        }


        return `${hrs}:${mins}:${secs}`;

    }

    tick() {
        this.setState({
            time: this.toOffsetDate(this.props.offset)
        });
    }
    render() {

       /* const [hours, setHours] = useState(now.getUTCHours())
        const [minutes, setMinutes] = useState(now.getMinutes())
        const [seconds, setSeconds] = useState(now.getSeconds())


        useEffect(() => {
            if (seconds === 61) {
                setSeconds(0)
                setMinutes(minutes + 1)
            }

            if (minutes === 61) {
                setSeconds(0)
                setMinutes(0)
                setHours(hours + 1)

            }

            if (hours === 25) {
                setSeconds(0)
                setMinutes(0)
                setHours(0)

            }

            const id = setTimeout(() => {
                setSeconds(seconds + 1)
            }, 1000)

        }, [seconds])
*/

        return (
            <div>
                <h1>{this.state.time}</h1>

            </div>
        );
    }
}

export default Time;
