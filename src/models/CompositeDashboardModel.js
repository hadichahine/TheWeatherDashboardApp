import createObservable from './Observable.js'

import CurrentWeatherModel from 'AppModels/CurrentWeatherModel.js'
import HourForecastModel from 'AppModels/HourForecastModel.js'
import DayForecastModel from 'AppModels/DayForecastModel.js'

let CompositeDashboardModel = {	
	__proto__: createObservable(),
	countdown: 3,
	modelChangedState(){
		this.countdown--;
		if(this.countdown === 0) {
			this.countdown = 3;			
			this.inform();
		}
	}
}

CurrentWeatherModel.onchange(() => { CompositeDashboardModel.modelChangedState() });
HourForecastModel.onchange(() => { CompositeDashboardModel.modelChangedState() });
DayForecastModel.onchange(() => { CompositeDashboardModel.modelChangedState() });

export default CompositeDashboardModel;
