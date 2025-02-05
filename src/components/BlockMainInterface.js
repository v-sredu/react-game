import {useNavigate} from "react-router-dom";

function BlockMainInterface({EAT, openItems, addOpenItems, startItem}) {
	const navigate = useNavigate();

	const maxWidth = Object.keys(EAT).length;
	const openWidth = openItems.length;
	const width = (100 / maxWidth) * openWidth + "%";

	document.querySelector("body").addEventListener("mousemove", eyeball);

	function eyeball(e) {
		let eye = document.querySelectorAll(".eye");
		eye.forEach(function (eye) {
			let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2)
			let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
			let radian = Math.atan2(e.pageX - x, e.pageY - y);
			let rot = (radian * (180 / Math.PI) * -1) - 135;
			eye.style.transform = "rotate(" + rot + "deg)"
		})
	}

	return (
		<>
			<div className="wrapper-main">
				<header>
					<div className="streak-lover-wrapper">
						<div className="streak-lover" style={{width: width}}/>
						<span>{`${openWidth}/${maxWidth}`}</span>
					</div>
					<div
						onClick={() => navigate("/")}
						className="reset icon"
					/>
				</header>
				<div className="container">
					<div className="eyes">
						<div className="eye"></div>
						<div className="eye"></div>
					</div>
					<div className="mouth"></div>
				</div>
			</div>
		</>
	);
}

export default BlockMainInterface;
