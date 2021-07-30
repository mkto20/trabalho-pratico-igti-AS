import VerticalBar from "./components/BarChart";
export default function App() {
	return (
		<div>
			<header>
				<div className="bg-gray-100 mx-auto p-4">
					<h1 className="text-center font-semibold text-xl">
						Top 10 casos confirmados
					</h1>
				</div>
			</header>
			<main>
				<h1>Alunos</h1>
				<p>Adria Menezes</p>
				<p>Grenny Ycow</p>
				<p>Marcos Paulo</p>
				<VerticalBar></VerticalBar>
				<br />
				<p>
					Uso da biblioteca:&nbsp;
					<a href="https://github.com/reactchartjs/react-chartjs-2">
						https://github.com/reactchartjs/react-chartjs-2
					</a>
				</p>
			</main>
		</div>
	);
}
