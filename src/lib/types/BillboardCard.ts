class BillboardCard {
	classes = "";
	heading = "";
	text = "";
	link: Link;
	mobile = {
		heading: "",
		text: "",
		linkLabel: "",
	};
	constructor() {
		this.link = {
			url: "",
			label: "",
		};
	}
}
