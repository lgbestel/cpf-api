export const addCpfResponse = { teste: 'teste' };

export const validCpfBody = { cpf: '64852893055' };

export const validNewCpfBody = { cpf: '64852893059' };

export const invalidLengthCpfBody = { cpf: '6485289305' };

export const invalidCharsCpfBody = { cpf: '99999999999' };

export const checkCpfOutput = {
	cpf: '64852893055',
	createdAt: '2019-12-17T22:22:08.547Z',
};

export const findAllOutput = [
	{
		cpf: '64852893055',
		createdAt: '2019-12-17T22:22:08.547Z',
	},
	{
		cpf: '64852893056',
		createdAt: '2019-12-17T22:22:08.547Z',
	},
];

export const invalidExceptionOutput = {
	type: 'InvalidException',
	message: 'CPF is not valid.',
};

export const existsExceptionOutput = {
	type: 'ExistsCpfException',
	message: 'CPF alerady exists',
};

export const notFoundExceptionOutput = {
	type: 'NotFoundCpfException',
	message: 'CPF not found',
};
