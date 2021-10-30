import { Product } from 'src/app/models/Product';

export class Venda {	
	id: string;
	produtos: Product[];
	total: number;	
	data: Date;
}