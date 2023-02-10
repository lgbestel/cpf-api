import { RowDataPacket } from 'mysql2';

export default interface IExceptionOutput {
	type: string;
	message: string;
}
