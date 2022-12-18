import axios from "axios";
import React, { useEffect, useState } from "react";

const Task6 = () => {
	const [Data, setData] = useState([]);
	const [loader, setloader] = useState(false);

	useEffect(() => {
		setloader(true);
		axios
			.get(`https://api.sampleapis.com/futurama/characters`)
			.then(({ data }) => {
				setData(data);
				setloader(false);
			})
			.catch((err) => {
				console.log("err", err);
			});
	}, []);

	return (
		<>
			<div className='p-4'>
				<h1>Task 6</h1>
			</div>
			<div className='p-4'>
				{loader ? (
					<div style={{ display: "flex", justifyContent: "center" }}>
						<div className='spinner-border' role='status'>
							<span className='sr-only'>Loading...</span>
						</div>
					</div>
				) : (
					<table className='table'>
						<thead>
							<tr>
								<th scope='col'>Id</th>
								<th scope='col'>homePlanet</th>
								<th scope='col'>gender</th>
								<th scope='col'>age</th>
								<th scope='col'>images</th>
								<th scope='col'>name</th>
								<th scope='col'>occupation</th>
								<th scope='col'>sayings</th>
								<th scope='col'>species</th>
							</tr>
						</thead>
						<tbody>
							{Data &&
								Data.map((value, i) => (
									<tr key={i}>
										<th scope='row'>{value.id}</th>
										<td>{value.homePlanet}</td>
										<td>{value.gender}</td>
										<td>{value.age}</td>
										<td>
											{value?.images?.main ? (
												<img
													src={`${value?.images?.main}`}
													style={{ height: "200px", width: "200px" }}
													alt='Pictures'
												/>
											) : (
												"---"
											)}
										</td>
										<td>
											{value?.name
												? value?.name?.first +
												  " " +
												  value?.name?.middle +
												  " " +
												  value?.name?.last
												: "---"}
										</td>
										<td>{value.occupation}</td>
										<td>
											{value.sayings &&
												value?.sayings.map((item, k) => (
													<ul className='list-group' key={k}>
														<li
															className='list-group-item'
															style={{ color: "black" }}>
															{item}
														</li>
													</ul>
												))}
										</td>
										<td>{value.species}</td>
									</tr>
								))}
						</tbody>
					</table>
				)}
			</div>
		</>
	);
};

export default Task6;
