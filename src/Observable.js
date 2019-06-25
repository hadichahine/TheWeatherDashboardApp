export default function() {
	return {
		handlers: [],
		onchange(handler){
			this.handlers.push(handler);
		},
		inform(){
			for(let handler of this.handlers)
				handler();
		}
	}
}
