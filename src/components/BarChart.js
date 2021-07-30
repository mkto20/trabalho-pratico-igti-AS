import React, { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "../api/countries";
import _ from "lodash";
import { Bar } from "react-chartjs-2";

const CountryChart = () => {
	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};
	var labels = [];
	var countries = [];
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = () => {
			setData(ALL_COUNTRIES);
		};

		getData();
	}, []);

	let paisesOrdenados = _.orderBy(
		data,
		["TotalConfirmed", "Country"],
		["desc", "asc"]
	);

	let top10 = _.slice(paisesOrdenados, 0, 10);
	top10.forEach((element) => {
		labels.push(element.Country);
		countries.push(element.TotalConfirmed);
	});

	const barChart = () => ({
		labels: labels,
		datasets: [
			{
				label: "Casos Confirmados",
				data: countries,
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	});

	return (
		<>
			{/* Uso da biblioteca: https://github.com/reactchartjs/react-chartjs-2  */}
			<Bar data={barChart} options={options} />
		</>
	);
};

export default CountryChart;
