import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Component/Home";
import Task2 from "../Component/Task2";
import Task6 from "../Component/Task6";

const HomeRoute = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/task2' component={Task2} />
				<Route exact path='/task6' component={Task6} />
			</Switch>
		</>
	);
};

export default HomeRoute;
