import React, { Component, PropTypes } from 'react';

class Time extends Component {

    static propTypes = {
        day: PropTypes.instanceOf(Date),
        pad: PropTypes.bool,
        onChange: React.PropTypes.func
    }
    
    static defaultProps = {
        day: new Date(),
        pad: true,
        onChange: () => null
    }

    _pad(n) {
        return n > 9 ? n : '0' + n;
    }
    
    _format(d) {

        let h = d.getHours();
        let m = this._pad(d.getMinutes());
        let AMPM = h < 12 ? 'AM' : 'PM';
        
        // convert to 12 hour clock
        h = (h % 12) || 12;
        
        // pad with a 0
        if(this.props.pad) {
            h = this._pad(h);
        }
        
        return `${h}:${m} ${AMPM}`;
    }
    
    _getOptions() {
        
        let day = this.props.day;
        let options = [];
        
        // set to beginning of day
        day.setHours(0, 0, 0, 0);
        
        // loop through half hour increments
        for(let i = 0; i < 48; i++) {
            let time = new Date(day.getTime() + (i * 1800000));
            let display = this._format(time);
            options.push(<option key={time} value={time}>{display}</option>);
        }
            
        return options;
    }
        
    _handleChange(e) {
        let day = new Date(React.findDOMNode(e.target).value);
        this.props.onChange(day);
    }
    
    render() {
        return(
            <select {...this.props} onChange={this._handleChange.bind(this)}>
                {this._getOptions()}
            </select>
        );
    }
}

export default Time;