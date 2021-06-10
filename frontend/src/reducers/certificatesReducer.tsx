import { types } from "../types/types";
import { Certificate } from "../helpers/loadCertificates";

const initialState = {
	certificates: [],
	mainCertificate: null
};

interface Action {
	type: string;
	payload: Certificate | Certificate[];
}

export const certificatesReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case types.certsAdd:
			return { ...state, certificates: action.payload };
		case types.cerstSetMain:
			return { ...state, mainCertificate: action.payload };
		default:
			return state;
	}
};
