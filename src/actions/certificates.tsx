import { types } from "../types/types";
import { Certificate, loadCertificates } from "../helpers/loadCertificates";

export const startLoadingCerts = () => {
	return async (dispatch: Function) => {
		const certs: Certificate[] = await loadCertificates();
		dispatch(setCerts(certs));
	};
};

const setCerts = (certs: Certificate[]) => ({
	type: types.certsAdd,
	payload: certs
});
