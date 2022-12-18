import React from "react";
import Data from "./Data.json";

const Task2 = () => {
	var totalBought = 0;
	var totalSold = 0;

	for (let i = 0; i < Data.length; i++) {
		if (Data[i]?.Type === "BUYER") {
			totalBought += Number(Data[i].Quantity);
		} else if (Data[i]?.Type === "SELLER") {
			totalSold += Number(Data[i].Quantity);
		}
	}

	const Sum = Object.values(Data).reduce(
		(acc, current) =>
			acc + Number(current["Accepted Price"]) * Number(current["Quantity"]),
		0
	);

	const AverageBught = Sum / totalBought;

	const AverageSold = Sum / totalSold;

	return (
		<>
			<div className='p-4'>
				<h1>Task 2</h1>
			</div>
			<div>
				<h4>Total Quantity Bought : {totalBought}</h4>
				<h4>Total Quantity Sold : {totalSold}</h4>
				<h4>Average Bought Price : {AverageBught}</h4>
				<h4> Average Sold Price : {AverageSold}</h4>
			</div>
		</>
	);
};

export default Task2;
