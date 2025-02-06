import BlockMainInterface from "../components/BlockMainInterface";
import BlockKitchen from "../components/BlockKitchen";
import {useState} from "react";
import {EAT, COOKED, ITEMS_START} from "../data";

function GamePage() {
	const [openItems, addOpenItems] = useState(ITEMS_START);
	return (
		<div className={"game"}>
			<BlockMainInterface
				EAT={EAT}
				addOpenItems={addOpenItems}
				openItems={openItems}
				startItem={ITEMS_START}
			/>
			<BlockKitchen
				openItems={openItems}
				addOpenItems={addOpenItems}
				EAT={EAT}
				COOKED={COOKED}
			/>
		</div>
	)
}
export default GamePage;
