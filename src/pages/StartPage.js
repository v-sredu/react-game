function StartPage() {
	return (
		<div className={"start-page"}>
			<h2>Добро пожаловать!</h2>
			<p><span className={"name-game"}>Накорми Боби</span> - это игра, в которой вы должны открыть все рецепты блюд</p>
			<div className="rules">
				<h3>Правила игры</h3>
				<ul className={"rules-list"}>
					<li>Выберите 2-3 предмета и нажмите на кастрюлю, чтобы приготовить блюдо</li>
					<li>Чтобы взять подсказку нажмите два раза на ячейку предмета</li>
					<li>Игра считается пройденной, когда открыты все рецепты</li>
				</ul>
			</div>
			<a href={"/game"}>Начать игру</a>
		</div>
	)
}

export default StartPage;
