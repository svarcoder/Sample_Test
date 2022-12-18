import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import Data from "./Data.json";

const Home = () => {
	return (
		<>
			<div>
				<h1>Task 1</h1>
				<div className='button_cont' align='left'>
					<Link to='/task2'>
						<button
							type='button'
							className='sample'
							rel='nofollow noopener noreferrer'
							draggable='false'>
							{" "}
							TASK 2
						</button>
					</Link>
					<Link to='/task6'>
						<button
							type='button'
							className='sample'
							rel='nofollow noopener noreferrer'
							draggable='false'>
							{" "}
							TASK 6
						</button>
					</Link>
				</div>
				<div className='col-md-12' style={{ overflow: "scroll" }}>
					<table className='table table-bordered'>
						<thead>
							<tr>
								<th>Id</th>
								<th>Created</th>
								<th>Confirmed</th>
								<th>Type</th>
								<th>Status</th>
								<th>Buyer</th>
								<th>Seller</th>
								<th>Broker</th>
								<th>Variety</th>
								<th>Station</th>
								<th>Delivery By</th>
								<th>Quantity</th>
								<th>Quantity Unit</th>
								<th>Confirmation ID</th>
								<th>Original Price</th>
								<th>Accepted Price</th>
								<th>Price Unit</th>
								<th>Staple</th>
								<th>Strength</th>
								<th>Trash</th>
								<th>Moisture</th>
								<th>Mic Minimum</th>
								<th>Mic Maximum</th>
								<th>Remarks</th>
								<th>Dhara</th>
							</tr>
						</thead>

						<tbody>
							{Data &&
								Data.map((item, i) => (
									<tr key={i}>
										<td>{i + 1}</td>
										<td>
											{moment(new Date(item["Created At"])).format(
												"DD/MM/YYYY"
											)}
											<br />
											{new Date(item["Created At"]).toLocaleTimeString()}
										</td>
										<td>
											{moment(new Date(item["Confirmed At"])).format(
												"DD/MM/YYYY"
											)}
											<br />
											{new Date(item["Created At"]).toLocaleTimeString()}
										</td>
										<td>{item?.Type}</td>
										<td>{item?.Status}</td>
										<td>{item?.Buyer}</td>
										<td>{item?.Seller}</td>
										<td>{item?.Broker}</td>
										<td>{item?.Variety}</td>
										<td>{item?.Station}</td>
										<td>{item["Delivery By"]}</td>
										<td>{item?.Quantity}</td>
										<td>{item["Quantity Unit"]}</td>
										<td>{item["Confirmation ID"]}</td>
										<td>{item["Original Price"]}</td>
										<td>{item["Accepted Price"]}</td>
										<td>{item["Price Unit"]}</td>
										<td>{item?.Staple}</td>
										<td>{item?.Strength}</td>
										<td>{item?.Trash}</td>
										<td>{item?.Moisture}</td>
										<td>{item["Mic Minimum"]}</td>
										<td>{item["Mic Maximum"]}</td>
										<td>{item?.Remarks}</td>
										<td>{item?.Dhara}</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Home;
