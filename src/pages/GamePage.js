import BlockMainInterface from "../components/BlockMainInterface";
import BlockKitchen from "../components/BlockKitchen";
import {useState} from "react";
import {EAT, COOKED} from "../data";

function GamePage() {
	const startItem = ["id-23", "id-43", "id-62", "id-76", "id-13", "id-9", "id-37", "id-60", "id-44", "id-54", "id-92", "id-94", "id-22", "id-19", "id-39", "id-48", "id-12", "id-1", "id-86", "id-11", "id-46", "id-24", "id-32", "id-33", "id-90", "id-30", "id-87", "id-58", "id-38", "id-55", "id-57", "id-83"];
	const [openItems, addOpenItems] = useState(startItem);
	return (
		<div className={"game"}>
			<BlockMainInterface
				EAT={EAT}
				addOpenItems={addOpenItems}
				openItems={openItems}
				startItem={startItem}
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
