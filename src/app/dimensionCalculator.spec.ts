import { DimensionCalculator } from './dimensionCalculator';

describe('Dimension Calculator Validation', ()=>{
	it('Validate area is equal to 100', ()=>{
		let dimCalc: DimensionCalculator = new DimensionCalculator
		const area = dimCalc.getArea(20, 5);
		expect(area).toBe(100);

	})
})